import { describe, expect, it, jest, test } from '@jest/globals';
import Bison from '../../Animals/Mammals/Bison';
import Elephant from '../../Animals/Mammals/Elephant';
import Employee from '../Employee';
import Veterinarian from '../Veterinarian';

describe('Veterinarian', () => {
    it('should be able to create default veterinarian', () => {
        const veterinarian = new Veterinarian();

        expect(veterinarian).toBeInstanceOf(Employee);

        expect(veterinarian.firstName).toEqual('');
        expect(veterinarian.lastName).toEqual('');
        expect(veterinarian.animalExperiences).toEqual([]);
    });

    it('should be able to create veterinarian', () => {
        const firstName = 'First';
        const lastName = 'last';
        const animalExperiences = [Bison];

        const veterinarian = new Veterinarian(
            firstName,
            lastName,
            animalExperiences
        );

        expect(veterinarian.firstName).toEqual(firstName);
        expect(veterinarian.lastName).toEqual(lastName);
        expect(veterinarian.animalExperiences).toEqual(animalExperiences);
    });

    test.each([
        [[Bison], Bison, true],
        [[Bison], Elephant, false],
    ])(
        'should be able to check animal experience',
        (animalExperiences, animal, expected) => {
            const veterinarian = new Veterinarian();
            veterinarian.animalExperiences = animalExperiences;

            expect(veterinarian.hasAnimalExperience(animal)).toEqual(expected);
        }
    );

    test.each([
        [[Bison], [Bison]],
        [
            [Bison, Elephant, Bison],
            [Bison, Elephant],
        ],
    ])(
        'should be able to add animal experience',
        (newAnimalExperiences, expected) => {
            const veterinarian = new Veterinarian();
            newAnimalExperiences.forEach((animal) => {
                veterinarian.addAnimalExperience(animal);
            });

            expect(veterinarian.animalExperiences).toEqual(expected);
        }
    );

    it('should be able to heal animal', () => {
        const veterinarian = new Veterinarian();
        veterinarian.hasAnimalExperience = jest.fn(() => true);
        const bison = new Bison();
        bison.isSick = true;
        bison.heal = jest.fn();

        expect(veterinarian.healAnimal(bison)).toEqual(true);
        expect(bison.heal).toHaveBeenCalledTimes(1);
    });

    it('should not heal animal without experience', () => {
        const veterinarian = new Veterinarian();
        veterinarian.hasAnimalExperience = jest.fn(() => false);
        const bison = new Bison();
        bison.isSick = true;
        bison.heal = jest.fn();

        expect(veterinarian.healAnimal(bison)).toEqual(false);
        expect(bison.heal).toHaveBeenCalledTimes(0);
    });

    it('should not heal healthy animal', () => {
        const veterinarian = new Veterinarian();
        veterinarian.hasAnimalExperience = jest.fn(() => true);
        const bison = new Bison();
        bison.isSick = false;
        bison.heal = jest.fn();

        expect(veterinarian.healAnimal(bison)).toEqual(false);
        expect(bison.heal).toHaveBeenCalledTimes(0);
    });
});

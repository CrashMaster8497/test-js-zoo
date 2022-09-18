import { describe, expect, it } from '@jest/globals';
import Bison from '../../Animals/Mammals/Bison';
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
});

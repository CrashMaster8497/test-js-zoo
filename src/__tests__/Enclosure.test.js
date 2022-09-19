import { describe, expect, it, test } from '@jest/globals';
import Parrot from '../Animals/Birds/Parrot';
import Bison from '../Animals/Mammals/Bison';
import Elephant from '../Animals/Mammals/Elephant';
import Lion from '../Animals/Mammals/Lion';
import Enclosure from '../Enclosure';
import Zoo from '../Zoo';

describe('Enclosure', () => {
    it('should be able to create default enclosure', () => {
        const enclosure = new Enclosure();

        expect(enclosure.name).toEqual('');
        expect(enclosure.squareFeet).toEqual(0);
        expect(enclosure.parentZoo).toEqual(null);
        expect(enclosure.animals).toEqual([]);
    });

    it('should be able to create enclosure', () => {
        const name = 'Name';
        const squareFeet = 1000;
        const parentZoo = new Zoo();

        const enclosure = new Enclosure(name, squareFeet, parentZoo);

        expect(enclosure.name).toEqual(name);
        expect(enclosure.squareFeet).toEqual(squareFeet);
        expect(enclosure.parentZoo).toStrictEqual(parentZoo);
    });

    it('should be able to add animal', () => {
        const enclosure = new Enclosure();
        enclosure.squareFeet = 1000;
        const bison = new Bison();

        enclosure.addAnimal(bison);

        expect(enclosure.animals).toContainEqual(bison);
    });

    test.each([
        [999, [], new Bison(), 'Enclosure 1', 1000, 999],
        [1998, [new Bison()], new Bison(), 'Enclosure 2', 1000, 998],
        [3, [], new Parrot(), 'Enclosure 3', 5, 3],
    ])(
        'should throw no available space',
        (
            squareFeet,
            animals,
            wrongAnimal,
            enclosureName,
            requiredSpace,
            availableSpace
        ) => {
            const enclosure = new Enclosure();
            enclosure.name = enclosureName;
            enclosure.squareFeet = squareFeet;

            animals.forEach((animal) => {
                enclosure.addAnimal(animal);
            });

            expect(() => {
                enclosure.addAnimal(wrongAnimal);
            }).toThrowError(
                `No available space in enclosure ${enclosure.name}: ${requiredSpace} required, ${availableSpace} available`
            );
        }
    );

    test.each([
        [[new Bison()], new Lion(), 'Enclosure 1', new Bison()],
        [
            [new Elephant(), new Bison()],
            new Lion(),
            'Enclosure 2',
            new Elephant(),
        ],
    ])(
        'should throw not friendly animal',
        (animals, wrongAnimal, enclosureName, notFriendlyAnimal) => {
            const enclosure = new Enclosure();
            enclosure.name = enclosureName;
            enclosure.squareFeet = 10000;

            animals.forEach((animal) => {
                enclosure.addAnimal(animal);
            });

            expect(() => {
                enclosure.addAnimal(wrongAnimal);
            }).toThrowError(
                `Not friendly animal in enclosure ${enclosure.name}: ${wrongAnimal} is not friendly with ${notFriendlyAnimal}`
            );
        }
    );
});

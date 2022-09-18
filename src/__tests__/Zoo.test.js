import { describe, expect, it, test } from '@jest/globals';
import Bison from '../Animals/Mammals/Bison';
import Elephant from '../Animals/Mammals/Elephant';
import Lion from '../Animals/Mammals/Lion';
import Enclosure from '../Enclosure';
import Zoo from '../Zoo';

describe('Zoo', () => {
    it('should be able to create default zoo', () => {
        const zoo = new Zoo();

        expect(zoo.location).toEqual('');
        expect(zoo.employees).toEqual([]);
        expect(zoo.enclosures).toEqual([]);
    });

    it('should be able to create zoo', () => {
        const location = 'Location';
        const zoo = new Zoo(location);

        expect(zoo.location).toEqual(location);
    });

    it('should be able to add enclosure', () => {
        const zoo = new Zoo();
        const name = 'Enclosure';
        const squareFeet = 1000;
        const enclosure = zoo.addEnclosure(name, squareFeet);

        expect(zoo.enclosures).toContain(enclosure);
        expect(enclosure).toBeInstanceOf(Enclosure);
        expect(enclosure.name).toEqual(name);
        expect(enclosure.squareFeet).toEqual(squareFeet);
        expect(enclosure.parentZoo).toStrictEqual(zoo);
    });

    test.each([
        [[[1000, []]], new Bison()],
        [[[2000, [new Bison()]]], new Bison()],
        [
            [
                [1999, [new Bison()]],
                [2000, [new Bison()]],
            ],
            new Bison(),
        ],
        [
            [
                [2000, [new Lion()]],
                [3000, [new Bison(), new Elephant()]],
            ],
            new Bison(),
        ],
    ])(
        'should be able to find available enclosure',
        (enclosuresData, newAnimal) => {
            const zoo = new Zoo();
            enclosuresData.forEach((data) => {
                const enclosure = zoo.addEnclosure(
                    `Enclosure ${enclosuresData.indexOf(data) + 1}`,
                    data[0]
                );
                data[1].forEach((animal) => {
                    enclosure.addAnimal(animal);
                });
            });

            const enclosure = zoo.findAvailableEnclosure(newAnimal);

            enclosure.addAnimal(newAnimal);
        }
    );

    test.each([
        [[[1997, [new Bison()]]], new Bison()],
        [
            [
                [999, []],
                [998, []],
            ],
            new Bison(),
        ],
        [
            [
                [2000, [new Lion()]],
                [2996, [new Bison(), new Elephant()]],
            ],
            new Bison(),
        ],
    ])('should throw no available enclosure', (enclosuresData, newAnimal) => {
        const zoo = new Zoo();
        enclosuresData.forEach((data) => {
            const enclosure = zoo.addEnclosure(
                `Enclosure ${enclosuresData.indexOf(data) + 1}`,
                data[0]
            );
            data[1].forEach((animal) => {
                enclosure.addAnimal(animal);
            });
        });

        expect(() => zoo.findAvailableEnclosure(newAnimal)).toThrowError(
            `No available enclosure for animal ${newAnimal}`
        );
    });
});

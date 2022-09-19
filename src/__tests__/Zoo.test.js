import { describe, expect, it, test } from '@jest/globals';
import Bison from '../Animals/Mammals/Bison';
import Elephant from '../Animals/Mammals/Elephant';
import Lion from '../Animals/Mammals/Lion';
import Veterinarian from '../Employees/Veterinarian';
import ZooKeeper from '../Employees/ZooKeeper';
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

    test.each([[new ZooKeeper()], [new Veterinarian()]])(
        'should be able to hire employee %p',
        (employee) => {
            const zoo = new Zoo();
            const enclosure = zoo.addEnclosure('Enclosure', 1000);
            enclosure.addAnimal(new Bison());

            employee.addAnimalExperience(Bison);

            zoo.hireEmployee(employee);

            expect(zoo.employees).toContain(employee);
        }
    );

    test.each([[new ZooKeeper()], [new Veterinarian()]])(
        'should not hire employee %p without needed experiences',
        (employee) => {
            const zoo = new Zoo();
            const enclosure = zoo.addEnclosure('Enclosure', 1000);
            enclosure.addAnimal(new Bison());

            expect(() => zoo.hireEmployee(employee)).toThrowError(
                'No needed experience'
            );

            expect(zoo.employees).not.toContain(employee);
        }
    );

    // it('should be able to feed animals', () => {
    //     const zoo = new Zoo();

    //     const enclosure1 = zoo.addEnclosure('Enclosure 1', 1000);
    //     const lion = new Lion();
    //     lion.feed = jest.fn();
    //     enclosure1.addAnimal(lion);
    //     const enclosure2 = zoo.addEnclosure('Enclosure 2', 2000);
    //     const bison = new Bison();
    //     bison.feed = jest.fn();
    //     enclosure2.addAnimal(bison);
    //     const elephant = new Elephant();
    //     elephant.feed = jest.fn();
    //     enclosure2.addAnimal(elephant);

    //     const zooKeeper1 = new ZooKeeper();
    //     zooKeeper1.addAnimalExperience(Bison);
    //     zooKeeper1.addAnimalExperience(Lion);
    //     zoo.hireEmployee(zooKeeper1);
    //     const zooKeeper2 = new ZooKeeper();
    //     zooKeeper2.addAnimalExperience(Elephant);
    //     zooKeeper2.addAnimalExperience(Lion);
    //     zoo.hireEmployee(zooKeeper2);

    //     zoo.feedAnimals();

    //     expect(lion.feed).toBeCalledTimes(1);
    //     expect(bison.feed).toBeCalledTimes(1);
    //     expect(elephant.feed).toBeCalledTimes(1);
    // });
});

import { describe, expect, it, jest, test } from '@jest/globals';
import Parrot from '../Animals/Birds/Parrot';
import Bison from '../Animals/Mammals/Bison';
import Elephant from '../Animals/Mammals/Elephant';
import Lion from '../Animals/Mammals/Lion';
import Turtle from '../Animals/Reptiles/Turtle';
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

    it('should be able to feed animals', () => {
        const zoo = new Zoo();

        const enclosure1 = zoo.addEnclosure('Enclosure 1', 1000);
        const lion = new Lion();
        enclosure1.addAnimal(lion);
        const enclosure2 = zoo.addEnclosure('Enclosure 2', 1010);
        const elephant = new Elephant();
        enclosure2.addAnimal(elephant);
        const parrot = new Parrot();
        enclosure2.addAnimal(parrot);
        const turtle = new Turtle();
        enclosure2.addAnimal(turtle);

        const zooKeeper1 = new ZooKeeper();
        zooKeeper1.addAnimalExperience(Bison);
        zooKeeper1.addAnimalExperience(Lion);
        zoo.hireEmployee(zooKeeper1);
        const zooKeeper2 = new ZooKeeper();
        zooKeeper2.addAnimalExperience(Elephant);
        zooKeeper2.addAnimalExperience(Lion);
        zooKeeper2.addAnimalExperience(Turtle);
        zoo.hireEmployee(zooKeeper2);

        zooKeeper1.feedAnimal = jest.fn((animal) => {
            return [lion].includes(animal);
        });
        zooKeeper2.feedAnimal = jest.fn((animal) => {
            return [elephant, lion, turtle].includes(animal);
        });

        zoo.feedAnimals();

        expect(zooKeeper1.feedAnimal).toHaveBeenCalledTimes(1);
        expect(zooKeeper1.feedAnimal).toHaveBeenNthCalledWith(1, lion);
        expect(zooKeeper2.feedAnimal).toHaveBeenCalledTimes(2);
        expect(zooKeeper2.feedAnimal).toHaveBeenNthCalledWith(1, elephant);
        expect(zooKeeper2.feedAnimal).toHaveBeenNthCalledWith(2, turtle);
    });

    it('should be able to heal animals', () => {
        const zoo = new Zoo();

        const enclosure1 = zoo.addEnclosure('Enclosure 1', 1000);
        const lion = new Lion();
        enclosure1.addAnimal(lion);
        const enclosure2 = zoo.addEnclosure('Enclosure 2', 1010);
        const elephant = new Elephant();
        enclosure2.addAnimal(elephant);
        const parrot = new Parrot();
        enclosure2.addAnimal(parrot);
        const turtle = new Turtle();
        enclosure2.addAnimal(turtle);

        const veterinarian1 = new Veterinarian();
        veterinarian1.addAnimalExperience(Bison);
        veterinarian1.addAnimalExperience(Lion);
        zoo.hireEmployee(veterinarian1);
        const veterinarian2 = new Veterinarian();
        veterinarian2.addAnimalExperience(Elephant);
        veterinarian2.addAnimalExperience(Lion);
        veterinarian2.addAnimalExperience(Turtle);
        zoo.hireEmployee(veterinarian2);

        veterinarian1.healAnimal = jest.fn((animal) => {
            return [lion].includes(animal);
        });
        veterinarian2.healAnimal = jest.fn((animal) => {
            return [elephant, lion, turtle].includes(animal);
        });

        zoo.healAnimals();

        expect(veterinarian1.healAnimal).toHaveBeenCalledTimes(1);
        expect(veterinarian1.healAnimal).toHaveBeenNthCalledWith(1, lion);
        expect(veterinarian2.healAnimal).toHaveBeenCalledTimes(2);
        expect(veterinarian2.healAnimal).toHaveBeenNthCalledWith(1, elephant);
        expect(veterinarian2.healAnimal).toHaveBeenNthCalledWith(2, turtle);
    });
});

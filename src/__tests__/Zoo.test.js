import { describe, expect, it, jest, test } from '@jest/globals';
import Bison from '../Animals/Mammals/Bison';
import Elephant from '../Animals/Mammals/Elephant';
import Lion from '../Animals/Mammals/Lion';
import Veterinarian from '../Employees/Veterinarian';
import ZooKeeper from '../Employees/ZooKeeper';
import HireValidatorProvider from '../Validators/HireValidatorProvider';
import Enclosure from '../Enclosure';
import Zoo from '../Zoo';
import ZooKeeperHireValidator from '../Validators/ZooKeeperHireValidator';
import VeterinarianHireValidator from '../Validators/VeterinarianHireValidator';

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

            const veterinarianValidator = new VeterinarianHireValidator();
            veterinarianValidator.validateEmployee = jest.fn(() => []);

            const zooKeeperValidator = new ZooKeeperHireValidator();
            zooKeeperValidator.validateEmployee = jest.fn(() => []);

            HireValidatorProvider.getHireValidator = jest.fn((employee) => {
                if (employee instanceof Veterinarian) {
                    return veterinarianValidator;
                } else {
                    return zooKeeperValidator;
                }
            });

            zoo.hireEmployee(employee);

            expect(zoo.employees).toContain(employee);
        }
    );

    test.each([[new ZooKeeper()], [new Veterinarian()]])(
        'should not hire employee %p without needed experiences',
        (employee) => {
            const zoo = new Zoo();

            const veterinarianValidator = new VeterinarianHireValidator();
            veterinarianValidator.validateEmployee = jest.fn(() => [
                'No needed experience',
            ]);

            const zooKeeperValidator = new ZooKeeperHireValidator();
            zooKeeperValidator.validateEmployee = jest.fn(() => [
                'No needed experience',
            ]);

            HireValidatorProvider.getHireValidator = jest.fn((employee) => {
                if (employee instanceof Veterinarian) {
                    return veterinarianValidator;
                } else {
                    return zooKeeperValidator;
                }
            });

            expect(() => zoo.hireEmployee(employee)).toThrowError(
                'No needed experience'
            );

            expect(zoo.employees).not.toContain(employee);
        }
    );
});

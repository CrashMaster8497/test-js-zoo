import { describe, expect, it, test } from '@jest/globals';
import Bison from '../../Animals/Mammals/Bison';
import Elephant from '../../Animals/Mammals/Elephant';
import Lion from '../../Animals/Mammals/Lion';
import ZooKeeper from '../../Employees/ZooKeeper';
import Zoo from '../../Zoo';
import HireValidator from '../HireValidator';
import ZooKeeperHireValidator from '../ZooKeeperHireValidator';

describe('ZooKeeperHireValidator', () => {
    it('should be able to create zoo keeper hire validator', () => {
        const validator = new ZooKeeperHireValidator();

        expect(validator).toBeInstanceOf(HireValidator);
    });

    test.each([
        [[[new Bison()]], [Bison]],
        [[[new Elephant()]], [Bison, Elephant]],
        [[[new Lion()], [new Bison(), new Elephant()]], [Elephant]],
    ])(
        'should be able to validate zoo keeper',
        (enclosuresData, experiences) => {
            const validator = new ZooKeeperHireValidator();

            const zooKeeper = new ZooKeeper();
            experiences.forEach((experience) => {
                zooKeeper.addAnimalExperience(experience);
            });

            const zoo = new Zoo();
            enclosuresData.forEach((animals) => {
                const enclosure = zoo.addEnclosure(
                    `Enclosure ${enclosuresData.indexOf(animals)}`,
                    10000
                );
                animals.forEach((animal) => {
                    enclosure.addAnimal(animal);
                });
            });

            const errors = validator.validateEmployee(zooKeeper, zoo);

            expect(errors).toHaveLength(0);
        }
    );

    test.each([
        [[[new Bison()]], []],
        [[[new Bison()]], [Elephant]],
        [[[new Bison()], [new Bison(), new Elephant()]], [Lion]],
    ])('should return no needed experience', (enclosuresData, experiences) => {
        const validator = new ZooKeeperHireValidator();

        const zooKeeper = new ZooKeeper();
        experiences.forEach((experience) => {
            zooKeeper.addAnimalExperience(experience);
        });

        const zoo = new Zoo();
        enclosuresData.forEach((animals) => {
            const enclosure = zoo.addEnclosure(
                `Enclosure ${enclosuresData.indexOf(animals)}`,
                10000
            );
            animals.forEach((animal) => {
                enclosure.addAnimal(animal);
            });
        });

        const errors = validator.validateEmployee(zooKeeper, zoo);

        expect(errors).toContainEqual('No needed experience');
    });
});

import { describe, expect, it } from '@jest/globals';
import Bison from '../../Animals/Mammals/Bison';
import ZooKeeper from '../../Employees/ZooKeeper';
import HireValidator from '../HireValidator';
import ZooKeeperHireValidator from '../ZooKeeperHireValidator';

describe('ZooKeeperHireValidator', () => {
    it('should be able to create zoo keeper hire validator', () => {
        const validator = new ZooKeeperHireValidator();

        expect(validator).toBeInstanceOf(HireValidator);
    });

    it('should be able to validate zoo keeper', () => {
        const validator = new ZooKeeperHireValidator();
        const zooKeeper = new ZooKeeper();
        zooKeeper.addAnimalExperience(Bison);
        //const zoo = new Zoo();
        //zoo.enclosures = [];

        const errors = validator.validateEmployee(zooKeeper /*, zoo*/);

        expect(errors).toHaveLength(0);
    });

    // it('should return no needed experience', () => {
    //     const validator = new ZooKeeperHireValidator();
    //     const zooKeeper = new ZooKeeper();
    //     const zoo = new Zoo();
    //     zoo.enclosures = [];

    //     const errors = validator.validateEmployee(zooKeeper /*, zoo*/);

    //     expect(errors).toContainEqual('No needed experience');
    // });
});

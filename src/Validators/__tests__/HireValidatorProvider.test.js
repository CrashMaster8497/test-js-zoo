import { describe, expect, it } from '@jest/globals';
import Veterinarian from '../../Employees/Veterinarian';
import ZooKeeper from '../../Employees/ZooKeeper';
import HireValidatorProvider from '../HireValidatorProvider';
import VeterinarianHireValidator from '../VeterinarianHireValidator';
import ZooKeeperHireValidator from '../ZooKeeperHireValidator';

describe('HireValidatorProvider', () => {
    it('should return new zoo keeper hire validator', () => {
        const zooKeeper = new ZooKeeper();

        const validator = HireValidatorProvider.getHireValidator(zooKeeper);

        expect(validator).toBeInstanceOf(ZooKeeperHireValidator);
    });

    it('should return new veterinarian hire validator', () => {
        const veterinarian = new Veterinarian();

        const validator = HireValidatorProvider.getHireValidator(veterinarian);

        expect(validator).toBeInstanceOf(VeterinarianHireValidator);
    });
});

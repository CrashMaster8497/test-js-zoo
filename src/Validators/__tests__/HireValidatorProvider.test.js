import { describe, expect, it } from '@jest/globals';
import Veterinarian from '../../Employees/Veterinarian';
import ZooKeeper from '../../Employees/ZooKeeper';
import HireValidatorProvider from '../HireValidatorProvider';
import VeterinarianHireValidator from '../VeterinarianHireValidator';
import ZooKeeperHireValidator from '../ZooKeeperHireValidator';

describe('HireValidatorProvider', () => {
    it('should be able to create hire validator provider', () => {
        const validatorProvider = new HireValidatorProvider();

        expect(validatorProvider).toBeDefined();
        expect(validatorProvider).not.toBeNull();
    });

    it('should return new zoo keeper hire validator', () => {
        const validatorProvider = new HireValidatorProvider();

        const zooKeeper = new ZooKeeper();

        const validator = validatorProvider.getHireValidator(zooKeeper);

        expect(validator).toBeInstanceOf(ZooKeeperHireValidator);
    });

    it('should return new veterinarian hire validator', () => {
        const validatorProvider = new HireValidatorProvider();

        const veterinarian = new Veterinarian();

        const validator = validatorProvider.getHireValidator(veterinarian);

        expect(validator).toBeInstanceOf(VeterinarianHireValidator);
    });
});

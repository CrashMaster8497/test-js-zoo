import { describe, expect, it } from '@jest/globals';
import HireValidator from '../HireValidator';

describe('HireValidator', () => {
    it('should be able to create hire validator', () => {
        const validator = new HireValidator();

        expect(validator).toBeDefined();
        expect(validator).not.toBeNull();
    });

    it('should be able to validate employee', () => {
        const validator = new HireValidator();

        const actual = validator.validateEmployee();

        expect(actual).toBeNull();
    });
});

import { describe, it, expect } from '@jest/globals';
import Antibiotics from '../Antibiotics';
import Medicine from '../Medicine';

describe('Antibiotics', () => {
    it('should be able to create antibiotics', () => {
        const antibiotics = new Antibiotics();

        expect(antibiotics).toBeDefined();
        expect(antibiotics).not.toBeNull();
        expect(antibiotics).toBeInstanceOf(Medicine);
    });
});

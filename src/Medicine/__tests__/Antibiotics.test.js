const { describe, it, expect } = require('@jest/globals');
const { Antibiotics } = require('../Antibiotics');
const { Medicine } = require('../Medicine');

describe('Antibiotics', () => {
    it('should be able to create antibiotics', () => {
        const antibiotics = new Antibiotics();

        expect(antibiotics).toBeDefined();
        expect(antibiotics).not.toBeNull();
        expect(antibiotics).toBeInstanceOf(Medicine);
    });
});

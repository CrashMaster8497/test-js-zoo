const { describe, it, expect } = require('@jest/globals');
const { Medicine } = require('../Medicine');

describe('Medicine', () => {
    it('should be able to create medicine', () => {
        const medicine = new Medicine();

        expect(medicine).toBeDefined();
        expect(medicine).not.toBeNull();
    });
});

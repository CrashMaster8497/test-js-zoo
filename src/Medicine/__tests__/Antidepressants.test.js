const { describe, it, expect } = require('@jest/globals');
const { Antidepressants } = require('../Antidepressants');
const { Medicine } = require('../Medicine');

describe('Antidepressants', () => {
    it('should be able to create antidepressants', () => {
        const antidepressants = new Antidepressants();

        expect(antidepressants).toBeDefined();
        expect(antidepressants).not.toBeNull();
        expect(antidepressants).toBeInstanceOf(Medicine);
    });
});

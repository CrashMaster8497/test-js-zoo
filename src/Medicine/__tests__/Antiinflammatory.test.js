const { describe, it, expect } = require('@jest/globals');
const { Antiinflammatory } = require('../Antiinflammatory');
const { Medicine } = require('../Medicine');

describe('Antiinflammatory', () => {
    it('should be able to create antiinflammatory', () => {
        const antiinflammatory = new Antiinflammatory();

        expect(antiinflammatory).toBeDefined();
        expect(antiinflammatory).not.toBeNull();
        expect(antiinflammatory).toBeInstanceOf(Medicine);
    });
});

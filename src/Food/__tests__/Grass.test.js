const { describe, it, expect } = require('@jest/globals');
const { Food } = require('../Food');
const { Grass } = require('../Grass');

describe('Grass', () => {
    it('should be able to create grass', () => {
        const grass = new Grass();

        expect(grass).toBeDefined();
        expect(grass).not.toBeNull();
        expect(grass).toBeInstanceOf(Food);
    });
});

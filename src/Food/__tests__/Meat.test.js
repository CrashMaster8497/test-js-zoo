const { describe, it, expect } = require('@jest/globals');
const { Food } = require('../Food');
const { Meat } = require('../Meat');

describe('Meat', () => {
    it('should be able to create meat', () => {
        const meat = new Meat();

        expect(meat).toBeDefined();
        expect(meat).not.toBeNull();
        expect(meat).toBeInstanceOf(Food);
    });
});

const { describe, it, expect } = require('@jest/globals');
const { Food } = require('../Food');
const { Vegetable } = require('../Vegetable');

describe('Vegetable', () => {
    it('should be able to create vegetable', () => {
        const vegetable = new Vegetable();

        expect(vegetable).toBeDefined();
        expect(vegetable).not.toBeNull();
        expect(vegetable).toBeInstanceOf(Food);
    });
});

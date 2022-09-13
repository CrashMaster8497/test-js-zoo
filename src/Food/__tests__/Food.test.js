const { describe, expect, it } = require('@jest/globals');
const { Food } = require('../Food');

describe('Food', () => {
    it('should be able to create food', () => {
        const food = new Food();

        expect(food).toBeDefined();
        expect(food).not.toBeNull();
    });
});

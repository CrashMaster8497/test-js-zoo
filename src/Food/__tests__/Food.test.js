import { describe, expect, it } from '@jest/globals';
import Food from '../Food';

describe('Food', () => {
    it('should be able to create food', () => {
        const food = new Food();

        expect(food).toBeDefined();
        expect(food).not.toBeNull();
    });
});

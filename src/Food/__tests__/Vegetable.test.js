import { describe, expect, it } from '@jest/globals';
import Food from '../Food';
import Vegetables from '../Vegetables';

describe('Vegetable', () => {
    it('should be able to create vegetable', () => {
        const vegetables = new Vegetables();

        expect(vegetables).toBeDefined();
        expect(vegetables).not.toBeNull();
        expect(vegetables).toBeInstanceOf(Food);
    });
});

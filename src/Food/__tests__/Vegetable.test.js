import { describe, expect, it } from '@jest/globals';
import Food from '../Food';
import Vegetable from '../Vegetable';

describe('Vegetable', () => {
    it('should be able to create vegetable', () => {
        const vegetable = new Vegetable();

        expect(vegetable).toBeDefined();
        expect(vegetable).not.toBeNull();
        expect(vegetable).toBeInstanceOf(Food);
    });
});

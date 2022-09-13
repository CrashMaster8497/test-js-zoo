import { describe, expect, it } from '@jest/globals';
import Food from '../Food';
import Meat from '../Meat';

describe('Meat', () => {
    it('should be able to create meat', () => {
        const meat = new Meat();

        expect(meat).toBeDefined();
        expect(meat).not.toBeNull();
        expect(meat).toBeInstanceOf(Food);
    });
});

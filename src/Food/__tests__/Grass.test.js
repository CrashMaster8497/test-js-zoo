import { describe, expect, it } from '@jest/globals';
import Food from '../Food';
import Grass from '../Grass';

describe('Grass', () => {
    it('should be able to create grass', () => {
        const grass = new Grass();

        expect(grass).toBeDefined();
        expect(grass).not.toBeNull();
        expect(grass).toBeInstanceOf(Food);
    });
});

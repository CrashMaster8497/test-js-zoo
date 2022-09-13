import { describe, expect, it } from '@jest/globals';
import Meat from '../../../Food/Meat';
import Bird from '../Bird';
import Penguin from '../Penguin';

describe('Penguin', () => {
    it('should be able to create penguin', () => {
        const penguin = new Penguin();

        expect(penguin).toBeDefined();
        expect(penguin).not.toBeNull();
        expect(penguin).toBeInstanceOf(Bird);

        expect(penguin.requiredSpaceSqFt).toEqual(10);
        expect(penguin.favoriteFood).toEqual(Meat);
    });
});

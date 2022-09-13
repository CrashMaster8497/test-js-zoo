import { describe, expect, it } from '@jest/globals';
import Animal from '../../Animal';
import Bird from '../Bird';

describe('Bird', () => {
    it('should be able to create bird', () => {
        const bird = new Bird();

        expect(bird).toBeDefined();
        expect(bird).not.toBeNull();
        expect(bird).toBeInstanceOf(Animal);

        expect(bird.requiredSpaceSqFt).toBeNull();
        expect(bird.favoriteFood).toBeNull();
    });
});

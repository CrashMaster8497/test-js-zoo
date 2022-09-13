import { describe, expect, it } from '@jest/globals';
import Vegetables from '../../../Food/Vegetables';
import Bird from '../Bird';
import Parrot from '../Parrot';

describe('Parrot', () => {
    it('should be able to create parrot', () => {
        const parrot = new Parrot();

        expect(parrot).toBeDefined();
        expect(parrot).not.toBeNull();
        expect(parrot).toBeInstanceOf(Bird);

        expect(parrot.requiredSpaceSqFt).toEqual(5);
        expect(parrot.favoriteFood).toEqual(Vegetables);
    });
});

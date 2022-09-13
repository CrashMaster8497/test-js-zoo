import { describe, expect, it } from '@jest/globals';
import Grass from '../../../Food/Grass';
import Reptile from '../Reptile';
import Turtle from '../Turtle';

describe('Turtle', () => {
    it('should be able to create turtle', () => {
        const turtle = new Turtle();

        expect(turtle).toBeDefined();
        expect(turtle).not.toBeNull();
        expect(turtle).toBeInstanceOf(Reptile);

        expect(turtle.requiredSpaceSqFt).toEqual(5);
        expect(turtle.favoriteFood).toEqual(Grass);
    });
});

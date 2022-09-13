import { describe, expect, it } from '@jest/globals';
import Meat from '../../../Food/Meat';
import Reptile from '../Reptile';
import Snake from '../Snake';

describe('Snake', () => {
    it('should be able to create snake', () => {
        const snake = new Snake();

        expect(snake).toBeDefined();
        expect(snake).not.toBeNull();
        expect(snake).toBeInstanceOf(Reptile);

        expect(snake.requiredSpaceSqFt).toEqual(2);
        expect(snake.favoriteFood).toEqual(Meat);
    });
});

import { describe, expect, it } from '@jest/globals';
import Meat from '../../../Food/Meat';
import Lion from '../Lion';
import Mammal from '../Mammal';

describe('Lion', () => {
    it('should be able to create lion', () => {
        const lion = new Lion();

        expect(lion).toBeDefined();
        expect(lion).not.toBeNull();
        expect(lion).toBeInstanceOf(Mammal);

        expect(lion.requiredSpaceSqFt).toEqual(1000);
        expect(lion.favoriteFood).toEqual(Meat);
    });
});

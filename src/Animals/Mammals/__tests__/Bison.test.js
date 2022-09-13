import { describe, expect, it } from '@jest/globals';
import Grass from '../../../Food/Grass';
import Bison from '../Bison';
import Mammal from '../Mammal';

describe('Bison', () => {
    it('should be able to create bison', () => {
        const bison = new Bison();

        expect(bison).toBeDefined();
        expect(bison).not.toBeNull();
        expect(bison).toBeInstanceOf(Mammal);

        expect(bison.requiredSpaceSqFt).toEqual(1000);
        expect(bison.favoriteFood).toEqual(Grass);
    });
});

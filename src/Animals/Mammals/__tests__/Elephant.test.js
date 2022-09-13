import { describe, expect, it } from '@jest/globals';
import Grass from '../../../Food/Grass';
import Elephant from '../Elephant';
import Mammal from '../Mammal';

describe('Elephant', () => {
    it('should be able to create elephant', () => {
        const elephant = new Elephant();

        expect(elephant).toBeDefined();
        expect(elephant).not.toBeNull();
        expect(elephant).toBeInstanceOf(Mammal);

        expect(elephant.requiredSpaceSqFt).toEqual(1000);
        expect(elephant.favoriteFood).toEqual(Grass);
    });
});

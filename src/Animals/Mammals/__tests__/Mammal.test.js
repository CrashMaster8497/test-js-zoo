import { describe, expect, it } from '@jest/globals';
import Animal from '../../Animal';
import Mammal from '../Mammal';

describe('Mammal', () => {
    it('should be able to create mammal', () => {
        const mammal = new Mammal();

        expect(mammal).toBeDefined();
        expect(mammal).not.toBeNull();
        expect(mammal).toBeInstanceOf(Animal);

        expect(mammal.requiredSpaceSqFt).toBeNull();
        expect(mammal.favoriteFood).toBeNull();
        expect(mammal.isFriendlyWith()).toBeNull();
    });
});

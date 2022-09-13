import { describe, expect, it } from '@jest/globals';
import Animal from '../../Animal';
import Reptile from '../Reptile';

describe('Reptile', () => {
    it('should be able to create reptile', () => {
        const reptile = new Reptile();

        expect(reptile).toBeDefined();
        expect(reptile).not.toBeNull();
        expect(reptile).toBeInstanceOf(Animal);

        expect(reptile.requiredSpaceSqFt).toBeNull();
        expect(reptile.favoriteFood).toBeNull();
        expect(reptile.isFriendlyWith()).toBeNull();
    });
});

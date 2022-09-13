import { describe, it, expect } from '@jest/globals';
import Antiinflammatory from '../Antiinflammatory';
import Medicine from '../Medicine';

describe('Antiinflammatory', () => {
    it('should be able to create antiinflammatory', () => {
        const antiinflammatory = new Antiinflammatory();

        expect(antiinflammatory).toBeDefined();
        expect(antiinflammatory).not.toBeNull();
        expect(antiinflammatory).toBeInstanceOf(Medicine);
    });
});

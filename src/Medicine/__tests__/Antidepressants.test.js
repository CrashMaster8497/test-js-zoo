import { describe, it, expect } from '@jest/globals';
import Antidepressants from '../Antidepressants';
import Medicine from '../Medicine';

describe('Antidepressants', () => {
    it('should be able to create antidepressants', () => {
        const antidepressants = new Antidepressants();

        expect(antidepressants).toBeDefined();
        expect(antidepressants).not.toBeNull();
        expect(antidepressants).toBeInstanceOf(Medicine);
    });
});

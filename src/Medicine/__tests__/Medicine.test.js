import { describe, it, expect } from '@jest/globals';
import Medicine from '../Medicine';

describe('Medicine', () => {
    it('should be able to create medicine', () => {
        const medicine = new Medicine();

        expect(medicine).toBeDefined();
        expect(medicine).not.toBeNull();
    });
});

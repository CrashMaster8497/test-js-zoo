import { describe, expect, it } from '@jest/globals';
import Animal from '../Animal';
import FeedTime from '../FeedTime';

describe('Animal', () => {
    it('should be able to create animal', () => {
        const id = 1;
        const feedSchedule = [1, 2];
        const feedTimes = [new FeedTime(Date.now)];
        const isSick = false;
        const animal = new Animal(id, feedSchedule, feedTimes, isSick);

        expect(animal).toBeDefined();
        expect(animal).not.toBeNull();

        expect(animal.id).toEqual(id);
        expect(animal.feedSchedule).toEqual(feedSchedule);
        expect(animal.feedTimes).toEqual(feedTimes);
        expect(animal.isSick).toEqual(isSick);

        expect(animal.requiredSpaceSqFt).toBeNull();
        expect(animal.favoriteFood).toBeNull();
    });
});

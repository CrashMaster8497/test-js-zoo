import { describe, expect, it, test } from '@jest/globals';
import Animal from '../Animal';
import FeedTime from '../FeedTime';
import Bison from '../Mammals/Bison';
import Elephant from '../Mammals/Elephant';
import Lion from '../Mammals/Lion';
import Parrot from '../Birds/Parrot';
import Penguin from '../Birds/Penguin';
import Snake from '../Reptiles/Snake';
import Turtle from '../Reptiles/Turtle';

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
        expect(animal.isFriendlyWith()).toBeNull();
    });

    const getAnimalCases = () => [
        new Bison(),
        new Elephant(),
        new Lion(),
        new Parrot(),
        new Penguin(),
        new Snake(),
        new Turtle(),
    ];

    test.each(getAnimalCases())(
        '%p should be able to add feed schedule',
        (animal) => {
            const feedSchedule = [1, 2];
            animal.addFeedSchedule(feedSchedule);

            expect(animal.feedSchedule).toEqual(feedSchedule);
        }
    );

    test.each(getAnimalCases())('%p should be able to feed', (animal) => {
        animal.feed();

        expect(animal.feedTimes).toHaveLength(1);
    });

    test.each(getAnimalCases())(
        '%p should not be able to feed more than 2 times',
        (animal) => {
            animal.feedTimes.push(new FeedTime(new Date(0)));
            animal.feed();
            animal.feed();
            animal.feed();

            expect(animal.feedTimes).toHaveLength(3);
        }
    );

    test.each(getAnimalCases())('%p should be able to heal', (animal) => {
        animal.isSick = true;

        animal.heal();

        expect(animal.isSick).toEqual(false);
    });
});

import { describe, expect, it, test } from '@jest/globals';
import Meat from '../../../Food/Meat';
import Bison from '../../Mammals/Bison';
import Elephant from '../../Mammals/Elephant';
import Lion from '../../Mammals/Lion';
import Snake from '../../Reptiles/Snake';
import Turtle from '../../Reptiles/Turtle';
import Bird from '../Bird';
import Parrot from '../Parrot';
import Penguin from '../Penguin';

describe('Penguin', () => {
    it('should be able to create penguin', () => {
        const penguin = new Penguin();

        expect(penguin).toBeDefined();
        expect(penguin).not.toBeNull();
        expect(penguin).toBeInstanceOf(Bird);

        expect(penguin.requiredSpaceSqFt).toEqual(10);
        expect(penguin.favoriteFood).toEqual(Meat);
    });

    const getFriendlyAnimals = () => [new Penguin()];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const penguin = new Penguin();

        const actual = penguin.isFriendlyWith(animal);

        expect(actual).toEqual(true);
    });

    const getNotFriendlyAnimals = () => [
        new Lion(),
        new Bison(),
        new Elephant(),
        new Parrot(),
        new Snake(),
        new Turtle(),
    ];
    test.each(getNotFriendlyAnimals())(
        'should not be friendly with %p',
        (animal) => {
            const penguin = new Penguin();

            const actual = penguin.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

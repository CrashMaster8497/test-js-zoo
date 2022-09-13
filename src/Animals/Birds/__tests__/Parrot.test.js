import { describe, expect, it, test } from '@jest/globals';
import Vegetables from '../../../Food/Vegetables';
import Bison from '../../Mammals/Bison';
import Elephant from '../../Mammals/Elephant';
import Lion from '../../Mammals/Lion';
import Snake from '../../Reptiles/Snake';
import Turtle from '../../Reptiles/Turtle';
import Bird from '../Bird';
import Parrot from '../Parrot';
import Penguin from '../Penguin';

describe('Parrot', () => {
    it('should be able to create parrot', () => {
        const parrot = new Parrot();

        expect(parrot).toBeDefined();
        expect(parrot).not.toBeNull();
        expect(parrot).toBeInstanceOf(Bird);

        expect(parrot.requiredSpaceSqFt).toEqual(5);
        expect(parrot.favoriteFood).toEqual(Vegetables);
    });

    const getFriendlyAnimals = () => [
        new Bison(),
        new Elephant(),
        new Parrot(),
        new Turtle(),
    ];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const parrot = new Parrot();

        const actual = parrot.isFriendlyWith(animal);

        expect(actual).toEqual(true);
    });

    const getNotFriendlyAnimals = () => [
        new Lion(),
        new Penguin(),
        new Snake(),
    ];
    test.each(getNotFriendlyAnimals())(
        'should not be friendly with %p',
        (animal) => {
            const parrot = new Parrot();

            const actual = parrot.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

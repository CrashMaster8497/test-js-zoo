import { describe, expect, it, test } from '@jest/globals';
import Grass from '../../../Food/Grass';
import Parrot from '../../Birds/Parrot';
import Penguin from '../../Birds/Penguin';
import Bison from '../../Mammals/Bison';
import Elephant from '../../Mammals/Elephant';
import Lion from '../../Mammals/Lion';
import Reptile from '../Reptile';
import Snake from '../Snake';
import Turtle from '../Turtle';

describe('Turtle', () => {
    it('should be able to create turtle', () => {
        const turtle = new Turtle();

        expect(turtle).toBeDefined();
        expect(turtle).not.toBeNull();
        expect(turtle).toBeInstanceOf(Reptile);

        expect(turtle.requiredSpaceSqFt).toEqual(5);
        expect(turtle.favoriteFood).toEqual(Grass);
    });

    const getFriendlyAnimals = () => [
        new Bison(),
        new Elephant(),
        new Parrot(),
        new Turtle(),
    ];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const turtle = new Turtle();

        const actual = turtle.isFriendlyWith(animal);

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
            const turtle = new Turtle();

            const actual = turtle.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

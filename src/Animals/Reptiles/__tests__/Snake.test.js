import { describe, expect, it, test } from '@jest/globals';
import Meat from '../../../Food/Meat';
import Parrot from '../../Birds/Parrot';
import Penguin from '../../Birds/Penguin';
import Bison from '../../Mammals/Bison';
import Elephant from '../../Mammals/Elephant';
import Lion from '../../Mammals/Lion';
import Reptile from '../Reptile';
import Snake from '../Snake';
import Turtle from '../Turtle';

describe('Snake', () => {
    it('should be able to create snake', () => {
        const snake = new Snake();

        expect(snake).toBeDefined();
        expect(snake).not.toBeNull();
        expect(snake).toBeInstanceOf(Reptile);

        expect(snake.requiredSpaceSqFt).toEqual(2);
        expect(snake.favoriteFood).toEqual(Meat);
    });

    const getFriendlyAnimals = () => [new Snake()];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const snake = new Snake();

        const actual = snake.isFriendlyWith(animal);

        expect(actual).toEqual(true);
    });

    const getNotFriendlyAnimals = () => [
        new Lion(),
        new Bison(),
        new Elephant(),
        new Parrot(),
        new Penguin(),
        new Turtle(),
    ];
    test.each(getNotFriendlyAnimals())(
        'should not be friendly with %p',
        (animal) => {
            const snake = new Snake();

            const actual = snake.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

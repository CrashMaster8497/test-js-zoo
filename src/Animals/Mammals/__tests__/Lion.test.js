import { describe, expect, it, test } from '@jest/globals';
import Meat from '../../../Food/Meat';
import Parrot from '../../Birds/Parrot';
import Penguin from '../../Birds/Penguin';
import Snake from '../../Reptiles/Snake';
import Turtle from '../../Reptiles/Turtle';
import Bison from '../Bison';
import Elephant from '../Elephant';
import Lion from '../Lion';
import Mammal from '../Mammal';

describe('Lion', () => {
    it('should be able to create lion', () => {
        const lion = new Lion();

        expect(lion).toBeDefined();
        expect(lion).not.toBeNull();
        expect(lion).toBeInstanceOf(Mammal);

        expect(lion.requiredSpaceSqFt).toEqual(1000);
        expect(lion.favoriteFood).toEqual(Meat);
    });

    const getFriendlyAnimals = () => [new Lion()];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const lion = new Lion();

        const actual = lion.isFriendlyWith(animal);

        expect(actual).toEqual(true);
    });

    const getNotFriendlyAnimals = () => [
        new Bison(),
        new Elephant(),
        new Parrot(),
        new Penguin(),
        new Snake(),
        new Turtle(),
    ];
    test.each(getNotFriendlyAnimals())(
        'should not be friendly with %p',
        (animal) => {
            const lion = new Lion();

            const actual = lion.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

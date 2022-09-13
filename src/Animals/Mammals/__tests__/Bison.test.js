import { describe, expect, it, test } from '@jest/globals';
import Grass from '../../../Food/Grass';
import Parrot from '../../Birds/Parrot';
import Penguin from '../../Birds/Penguin';
import Snake from '../../Reptiles/Snake';
import Turtle from '../../Reptiles/Turtle';
import Bison from '../Bison';
import Elephant from '../Elephant';
import Lion from '../Lion';
import Mammal from '../Mammal';

describe('Bison', () => {
    it('should be able to create bison', () => {
        const bison = new Bison();

        expect(bison).toBeDefined();
        expect(bison).not.toBeNull();
        expect(bison).toBeInstanceOf(Mammal);

        expect(bison.requiredSpaceSqFt).toEqual(1000);
        expect(bison.favoriteFood).toEqual(Grass);
    });

    const getFriendlyAnimals = () => [new Bison(), new Elephant()];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const bison = new Bison();

        const actual = bison.isFriendlyWith(animal);

        expect(actual).toEqual(true);
    });

    const getNotFriendlyAnimals = () => [
        new Lion(),
        new Parrot(),
        new Penguin(),
        new Snake(),
        new Turtle(),
    ];
    test.each(getNotFriendlyAnimals())(
        'should not be friendly with %p',
        (animal) => {
            const bison = new Bison();

            const actual = bison.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

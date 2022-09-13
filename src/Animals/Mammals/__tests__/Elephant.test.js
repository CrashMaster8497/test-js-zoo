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

describe('Elephant', () => {
    it('should be able to create elephant', () => {
        const elephant = new Elephant();

        expect(elephant).toBeDefined();
        expect(elephant).not.toBeNull();
        expect(elephant).toBeInstanceOf(Mammal);

        expect(elephant.requiredSpaceSqFt).toEqual(1000);
        expect(elephant.favoriteFood).toEqual(Grass);
    });

    const getFriendlyAnimals = () => [
        new Bison(),
        new Elephant(),
        new Parrot(),
        new Turtle(),
    ];
    test.each(getFriendlyAnimals())('should be friendly with %p', (animal) => {
        const elephant = new Elephant();

        const actual = elephant.isFriendlyWith(animal);

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
            const elephant = new Elephant();

            const actual = elephant.isFriendlyWith(animal);

            expect(actual).toEqual(false);
        }
    );
});

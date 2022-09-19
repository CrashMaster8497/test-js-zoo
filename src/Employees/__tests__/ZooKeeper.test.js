import { describe, expect, it, jest, test } from '@jest/globals';
import FeedTime from '../../Animals/FeedTime';
import Bison from '../../Animals/Mammals/Bison';
import Elephant from '../../Animals/Mammals/Elephant';
import Employee from '../Employee';
import ZooKeeper from '../ZooKeeper';

describe('ZooKeeper', () => {
    it('should be able to create default zookeeper', () => {
        const zooKeeper = new ZooKeeper();

        expect(zooKeeper).toBeInstanceOf(Employee);

        expect(zooKeeper.firstName).toEqual('');
        expect(zooKeeper.lastName).toEqual('');
        expect(zooKeeper.animalExperiences).toEqual([]);
    });

    it('should be able to create zookeeper', () => {
        const firstName = 'First';
        const lastName = 'Last';
        const animalExperiences = [Bison];
        const zooKeeper = new ZooKeeper(firstName, lastName, animalExperiences);

        expect(zooKeeper.firstName).toEqual(firstName);
        expect(zooKeeper.lastName).toEqual(lastName);
        expect(zooKeeper.animalExperiences).toEqual(animalExperiences);
    });

    test.each([
        [[Bison], Bison, true],
        [[Bison], Elephant, false],
    ])(
        'should be able to check animal experience',
        (animalExperiences, animal, expected) => {
            const zooKeeper = new ZooKeeper();
            zooKeeper.animalExperiences = animalExperiences;

            expect(zooKeeper.hasAnimalExperience(animal)).toEqual(expected);
        }
    );

    test.each([
        [[Bison], [Bison]],
        [
            [Bison, Elephant, Bison],
            [Bison, Elephant],
        ],
    ])(
        'should be able to add animal experience',
        (newAnimalExperiences, expected) => {
            const zooKeeper = new ZooKeeper();
            newAnimalExperiences.forEach((animal) => {
                zooKeeper.addAnimalExperience(animal);
            });

            expect(zooKeeper.animalExperiences).toEqual(expected);
        }
    );

    it('should be able to feed animal', () => {
        const zooKeeper = new ZooKeeper();
        zooKeeper.hasAnimalExperience = jest.fn(() => true);
        const bison = new Bison();
        bison.feed = jest.fn();

        expect(zooKeeper.feedAnimal(bison)).toEqual(true);
        expect(zooKeeper.hasAnimalExperience).toHaveBeenCalledWith(
            bison.constructor
        );
        expect(bison.feed).toHaveBeenCalledTimes(1);
        expect(bison.feed).toHaveBeenCalledWith(zooKeeper);
    });

    it('should not feed animal without experience', () => {
        const zooKeeper = new ZooKeeper();
        zooKeeper.hasAnimalExperience = jest.fn(() => false);
        const bison = new Bison();
        bison.feed = jest.fn();

        expect(zooKeeper.feedAnimal(bison)).toEqual(false);
        expect(zooKeeper.hasAnimalExperience).toHaveBeenCalledWith(
            bison.constructor
        );
        expect(bison.feed).toHaveBeenCalledTimes(0);
    });

    it('should not feed animal more than 2 times a day', () => {
        const zooKeeper = new ZooKeeper();
        zooKeeper.hasAnimalExperience = jest.fn(() => true);
        const bison = new Bison();

        bison.feed = jest.fn((zooKeeper) => {
            bison.feedTimes.push(new FeedTime(new Date(0), zooKeeper));
        });

        expect(zooKeeper.feedAnimal(bison)).toEqual(true);
        expect(zooKeeper.hasAnimalExperience).toHaveBeenCalledWith(
            bison.constructor
        );
        expect(bison.feed).toHaveBeenCalledTimes(1);
        expect(bison.feed).toHaveBeenCalledWith(zooKeeper);

        bison.feed = jest.fn((zooKeeper) => {
            bison.feedTimes.push(new FeedTime(new Date(), zooKeeper));
        });

        expect(zooKeeper.feedAnimal(bison)).toEqual(true);
        expect(zooKeeper.hasAnimalExperience).toHaveBeenCalledWith(
            bison.constructor
        );
        expect(zooKeeper.feedAnimal(bison)).toEqual(true);
        expect(zooKeeper.hasAnimalExperience).toHaveBeenCalledWith(
            bison.constructor
        );
        expect(zooKeeper.feedAnimal(bison)).toEqual(false);
        expect(zooKeeper.hasAnimalExperience).toHaveBeenCalledWith(
            bison.constructor
        );
        expect(bison.feed).toHaveBeenCalledTimes(2);
        expect(bison.feed).toHaveBeenLastCalledWith(zooKeeper);
    });
});

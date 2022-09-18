import { describe, expect, it } from '@jest/globals';
import Bison from '../../Animals/Mammals/Bison';
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
});

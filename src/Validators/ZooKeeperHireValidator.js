import HireValidator from './HireValidator';

export default class ZooKeeperHireValidator extends HireValidator {
    validateEmployee = (zooKeeper, zoo) => {
        let result = [];

        const hasExperience = zoo.enclosures.some((enclosure) => {
            return enclosure.animals.some((animal) => {
                return zooKeeper.animalExperiences.includes(animal.constructor);
            });
        });

        if (!hasExperience) {
            result.push('No needed experience');
        }

        return result;
    };
}

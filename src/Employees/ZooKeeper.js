import Employee from './Employee';

export default class ZooKeeper extends Employee {
    constructor(firstName, lastName, animalExperiences) {
        super(firstName, lastName);
        this.animalExperiences = animalExperiences || [];
    }

    hasAnimalExperience = (animal) => {
        return this.animalExperiences.includes(animal);
    };

    addAnimalExperience = (animal) => {
        if (!this.hasAnimalExperience(animal)) {
            this.animalExperiences.push(animal);
        }
    };

    feedAnimal = (animal) => {
        if (this.hasAnimalExperience()) {
            const now = new Date();
            if (animal.feedTimes.length >= 2) {
                const time1 = animal.feedTimes.at(-1).time;
                const time2 = animal.feedTimes.at(-2).time;

                const nowDay = new Date(
                    `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
                );
                const time1Day = new Date(
                    `${time1.getFullYear()}-${time1.getMonth()}-${time1.getDate()}`
                );
                const time2Day = new Date(
                    `${time2.getFullYear()}-${time2.getMonth()}-${time2.getDate()}`
                );

                if (
                    nowDay.valueOf() != time1Day.valueOf() ||
                    nowDay.valueOf() != time2Day.valueOf()
                ) {
                    animal.feed();
                    return true;
                }

                return false;
            }

            animal.feed();
            return true;
        }

        return false;
    };
}

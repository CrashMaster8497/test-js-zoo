import Employee from './Employee';

export default class Veterinarian extends Employee {
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

    healAnimal = (animal) => {
        if (this.hasAnimalExperience(animal) && animal.isSick) {
            animal.heal();
            return true;
        }

        return false;
    };
}

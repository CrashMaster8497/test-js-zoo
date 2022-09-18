import Employee from './Employee';

export default class Veterinarian extends Employee {
    constructor(firstName, lastName, animalExperiences) {
        super(firstName, lastName);
        this.animalExperiences = animalExperiences || [];
    }
}

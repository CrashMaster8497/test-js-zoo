export default class Enclosure {
    constructor(name, squareFeet, parentZoo) {
        this.name = name || '';
        this.squareFeet = squareFeet || 0;
        this.parentZoo = parentZoo || null;
        this.animals = [];
    }

    addAnimal = (newAnimal) => {
        let squareFeetLeft = this.squareFeet;
        this.animals.forEach((animal) => {
            squareFeetLeft -= animal.requiredSpaceSqFt;
        });

        if (squareFeetLeft < newAnimal.requiredSpaceSqFt) {
            throw new Error(
                `No available space in enclosure ${this.name}: ${newAnimal.requiredSpaceSqFt} required, ${squareFeetLeft} available`
            );
        }

        const notFriendlyAnimals = this.animals.filter(
            (animal) =>
                !newAnimal.isFriendlyWith(animal) ||
                !animal.isFriendlyWith(newAnimal)
        );

        if (notFriendlyAnimals.length > 0) {
            throw new Error(
                `Not friendly animal in enclosure ${this.name}: ${newAnimal} is not friendly with ${notFriendlyAnimals[0]}`
            );
        }

        this.animals.push(newAnimal);
    };
}

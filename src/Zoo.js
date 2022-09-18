import Enclosure from './Enclosure';

export default class Zoo {
    constructor(location) {
        this.location = location || '';
        this.employees = [];
        this.enclosures = [];
    }

    addEnclosure = (name, squareFeet) => {
        const enclosure = new Enclosure(name, squareFeet, this);
        this.enclosures.push(enclosure);
        return enclosure;
    };

    findAvailableEnclosure = (newAnimal) => {
        for (let i = 0; i < this.enclosures.length; i++) {
            const enclosure = this.enclosures[i];

            let squareFeetLeft = enclosure.squareFeet;
            enclosure.animals.forEach((animal) => {
                squareFeetLeft -= animal.requiredSpaceSqFt;
            });

            const notFriendlyAnimals = enclosure.animals.filter(
                (animal) =>
                    !newAnimal.isFriendlyWith(animal) ||
                    !animal.isFriendlyWith(newAnimal)
            );

            if (
                squareFeetLeft >= newAnimal.requiredSpaceSqFt &&
                notFriendlyAnimals.length == 0
            ) {
                return enclosure;
            }
        }

        throw new Error(`No available enclosure for animal ${newAnimal}`);
    };
}

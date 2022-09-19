import Veterinarian from './Employees/Veterinarian';
import ZooKeeper from './Employees/ZooKeeper';
import Enclosure from './Enclosure';
import HireValidatorProvider from './Validators/HireValidatorProvider';

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

    hireEmployee = (employee) => {
        const validator = new HireValidatorProvider().getHireValidator(
            employee
        );

        if (
            validator
                .validateEmployee(employee, this)
                .includes('No needed experience')
        ) {
            throw new Error('No needed experience');
        }

        this.employees.push(employee);
    };

    feedAnimals = () => {
        this.enclosures.forEach((enclosure) => {
            enclosure.animals.forEach((animal) => {
                const eligible = this.employees.filter(
                    (employee) =>
                        employee instanceof ZooKeeper &&
                        employee.hasAnimalExperience(animal.constructor)
                );
                if (eligible.length > 0) {
                    eligible[0].feedAnimal(animal);
                }
            });
        });
    };

    healAnimals = () => {
        this.enclosures.forEach((enclosure) => {
            enclosure.animals.forEach((animal) => {
                const eligible = this.employees.filter(
                    (employee) =>
                        employee instanceof Veterinarian &&
                        employee.hasAnimalExperience(animal.constructor)
                );
                if (eligible.length > 0) {
                    eligible[0].healAnimal(animal);
                }
            });
        });
    };
}

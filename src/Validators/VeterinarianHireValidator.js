import HireValidator from './HireValidator';

export default class VeterinarianHireValidator extends HireValidator {
    validateEmployee = (veterinarian, zoo) => {
        let result = [];

        const hasExperience = zoo.enclosures.some((enclosure) => {
            return enclosure.animals.some((animal) => {
                return veterinarian.animalExperiences.includes(
                    animal.constructor
                );
            });
        });

        if (!hasExperience) {
            result.push('No needed experience');
        }

        return result;
    };
}

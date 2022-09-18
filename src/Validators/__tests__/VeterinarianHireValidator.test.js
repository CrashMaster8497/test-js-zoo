import { describe, expect, it } from '@jest/globals';
import Bison from '../../Animals/Mammals/Bison';
import Veterinarian from '../../Employees/Veterinarian';
import HireValidator from '../HireValidator';
import VeterinarianHireValidator from '../VeterinarianHireValidator';

describe('VeterinarianHireValidator', () => {
    it('should be able to create veterinarian hire validator', () => {
        const validator = new VeterinarianHireValidator();

        expect(validator).toBeInstanceOf(HireValidator);
    });

    it('should be able to validate veterinarian', () => {
        const validator = new VeterinarianHireValidator();
        const veterinarian = new Veterinarian();
        veterinarian.addAnimalExperience(Bison);
        //const zoo = new Zoo();
        //zoo.enclosures = [];

        const errors = validator.validateEmployee(veterinarian /*, zoo*/);

        expect(errors).toHaveLength(0);
    });

    // it('should return no needed experience', () => {
    //     const validator = new VeterinarianHireValidator();
    //     const veterinarian = new Veterinarian();
    //     const zoo = new Zoo();
    //     zoo.enclosures = [];

    //     const errors = validator.validateEmployee(veterinarian /*, zoo*/);

    //     expect(errors).toContainEqual('No needed experience');
    // });
});

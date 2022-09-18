import ZooKeeper from '../Employees/ZooKeeper';
import VeterinarianHireValidator from './VeterinarianHireValidator';
import ZooKeeperHireValidator from './ZooKeeperHireValidator';

export default class HireValidatorProvider {
    static getHireValidator = (employee) => {
        if (employee instanceof ZooKeeper) {
            return new ZooKeeperHireValidator();
        } else {
            return new VeterinarianHireValidator();
        }
    };
}

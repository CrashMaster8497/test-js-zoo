import ZooKeeper from '../Employees/ZooKeeper';
import VeterinarianHireValidator from './VeterinarianHireValidator';
import ZooKeeperHireValidator from './ZooKeeperHireValidator';

export default class HireValidatorProvider {
    getHireValidator = (employee) => {
        if (employee instanceof ZooKeeper) {
            return new ZooKeeperHireValidator();
        } else {
            return new VeterinarianHireValidator();
        }
    };
}

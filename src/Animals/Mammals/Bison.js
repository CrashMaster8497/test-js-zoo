import Grass from '../../Food/Grass';
import Mammal from './Mammal';

export default class Bison extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.favoriteFood = Grass;
    }
}

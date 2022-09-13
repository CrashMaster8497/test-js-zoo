import Grass from '../../Food/Grass';
import Reptile from './Reptile';

export default class Turtle extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.favoriteFood = Grass;
    }
}

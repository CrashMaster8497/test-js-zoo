import Vegetables from '../../Food/Vegetables';
import Bird from './Bird';

export default class Parrot extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.favoriteFood = Vegetables;
    }
}

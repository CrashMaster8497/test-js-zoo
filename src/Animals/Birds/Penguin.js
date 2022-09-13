import Meat from '../../Food/Meat';
import Bird from './Bird';

export default class Penguin extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 10;
        this.favoriteFood = Meat;
    }
}

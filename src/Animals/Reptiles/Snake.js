import Meat from '../../Food/Meat';
import Reptile from './Reptile';

export default class Snake extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 2;
        this.favoriteFood = Meat;

        this.friendlyAnimals = [Snake];
    }

    isFriendlyWith = (animal) => {
        return this.friendlyAnimals.some(
            (friendly) => animal instanceof friendly
        );
    };
}

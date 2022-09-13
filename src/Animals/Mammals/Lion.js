import Meat from '../../Food/Meat';
import Mammal from './Mammal';

export default class Lion extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.favoriteFood = Meat;

        this.friendlyAnimals = [Lion];
    }

    isFriendlyWith = (animal) => {
        return this.friendlyAnimals.some(
            (friendly) => animal instanceof friendly
        );
    };
}

import Grass from '../../Food/Grass';
import Elephant from './Elephant';
import Mammal from './Mammal';

export default class Bison extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.favoriteFood = Grass;

        this.friendlyAnimals = [Bison, Elephant];
    }

    isFriendlyWith = (animal) => {
        return this.friendlyAnimals.some(
            (friendly) => animal instanceof friendly
        );
    };
}

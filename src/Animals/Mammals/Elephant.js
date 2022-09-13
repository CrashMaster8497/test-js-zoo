import Grass from '../../Food/Grass';
import Parrot from '../Birds/Parrot';
import Turtle from '../Reptiles/Turtle';
import Bison from './Bison';
import Mammal from './Mammal';

export default class Elephant extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.favoriteFood = Grass;

        this.friendlyAnimals = [Bison, Elephant, Parrot, Turtle];
    }

    isFriendlyWith = (animal) => {
        return this.friendlyAnimals.some(
            (friendly) => animal instanceof friendly
        );
    };
}

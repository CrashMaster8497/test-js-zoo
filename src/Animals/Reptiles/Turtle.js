import Grass from '../../Food/Grass';
import Parrot from '../Birds/Parrot';
import Bison from '../Mammals/Bison';
import Elephant from '../Mammals/Elephant';
import Reptile from './Reptile';

export default class Turtle extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.favoriteFood = Grass;

        this.friendlyAnimals = [Bison, Elephant, Parrot, Turtle];
    }

    isFriendlyWith = (animal) => {
        return this.friendlyAnimals.some(
            (friendly) => animal instanceof friendly
        );
    };
}

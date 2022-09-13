import Vegetables from '../../Food/Vegetables';
import Bison from '../Mammals/Bison';
import Elephant from '../Mammals/Elephant';
import Turtle from '../Reptiles/Turtle';
import Bird from './Bird';

export default class Parrot extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.favoriteFood = Vegetables;

        this.friendlyAnimals = [Bison, Elephant, Parrot, Turtle];
    }

    isFriendlyWith = (animal) => {
        return this.friendlyAnimals.some(
            (friendly) => animal instanceof friendly
        );
    };
}

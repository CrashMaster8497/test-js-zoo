import Parrot from './Animals/Birds/Parrot';
import Penguin from './Animals/Birds/Penguin';
import Bison from './Animals/Mammals/Bison';
import Elephant from './Animals/Mammals/Elephant';
import Lion from './Animals/Mammals/Lion';
import Snake from './Animals/Reptiles/Snake';
import Turtle from './Animals/Reptiles/Turtle';
import Veterinarian from './Employees/Veterinarian';
import ZooKeeper from './Employees/ZooKeeper';
import Zoo from './Zoo';
import ZooApp from './ZooApp';

export default function run() {
    const zooApp = new ZooApp();

    const zoo1 = new Zoo('Zoo 1 Location');
    zooApp.addZoo(zoo1);

    zoo1.addEnclosure('Zoo 1 Enclosure 1', 50);
    zoo1.addEnclosure('Zoo 1 Enclosure 2', 15);
    zoo1.addEnclosure('Zoo 1 Enclosure 3', 15);
    zoo1.addEnclosure('Zoo 1 Enclosure 4', 1000);
    zoo1.addEnclosure('Zoo 1 Enclosure 5', 2000);
    zoo1.addEnclosure('Zoo 1 Enclosure 6', 1000);

    const animals = [
        new Bison(),
        new Elephant(),
        new Lion(),
        new Parrot(),
        new Penguin(),
        new Snake(),
        new Turtle(),
        new Bison(),
        new Penguin(),
    ];

    animals.forEach((animal) => {
        let enclosure = null;
        try {
            enclosure = zoo1.findAvailableEnclosure(animal);
        } catch (error) {
            console.log(error);
        }

        if (enclosure != null) {
            enclosure.addAnimal(animal);
        }
    });

    zoo1.enclosures.forEach((enclosure) => {
        console.log(enclosure);
        enclosure.animals.forEach((animal) => {
            console.log(animal);
        });
    });

    const veterinarian1 = new Veterinarian();
    veterinarian1.addAnimalExperience(Bison);
    const veterinarian2 = new Veterinarian();
    veterinarian2.addAnimalExperience(Elephant);
    veterinarian2.addAnimalExperience(Lion);
    veterinarian2.addAnimalExperience(Parrot);
    veterinarian2.addAnimalExperience(Penguin);
    const veterinarian3 = new Veterinarian();
    veterinarian3.addAnimalExperience(Parrot);
    veterinarian3.addAnimalExperience(Snake);
    veterinarian3.addAnimalExperience(Turtle);
    const veterinarian4 = new Veterinarian();

    const zooKeeper1 = new ZooKeeper();
    zooKeeper1.addAnimalExperience(Bison);
    const zooKeeper2 = new ZooKeeper();
    zooKeeper2.addAnimalExperience(Elephant);
    zooKeeper2.addAnimalExperience(Lion);
    zooKeeper2.addAnimalExperience(Parrot);
    zooKeeper2.addAnimalExperience(Penguin);
    const zooKeeper3 = new ZooKeeper();
    zooKeeper3.addAnimalExperience(Parrot);
    zooKeeper3.addAnimalExperience(Snake);
    zooKeeper3.addAnimalExperience(Turtle);
    const zooKeeper4 = new ZooKeeper();

    const employees = [
        veterinarian1,
        veterinarian2,
        veterinarian3,
        veterinarian4,
        zooKeeper1,
        zooKeeper2,
        zooKeeper3,
        zooKeeper4,
    ];

    employees.forEach((employee) => {
        try {
            zoo1.hireEmployee(employee);
        } catch (error) {
            console.log(error);
        }
    });

    zoo1.feedAnimals();
    zoo1.healAnimals();
}

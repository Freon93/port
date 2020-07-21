class Results {
    animals = [];

    constructor(picName) {
        this.picName = picName;
    }

    addAnimal(animal) {
        this.animals[this.animals.length] = animal;
    }
}
'use strict';

class Animal {
  static alive = [];
  health = 100;
  name;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }

  bite(target) {
    if (target instanceof Herbivore) {
      if (!target.hidden && Animal.alive.includes(target)) {
        target.health -= 50;

        if (target.health <= 0) {
          Animal.alive.splice(Animal.alive.indexOf(target), 1);
        }
      }
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
}

class Carnivore extends Animal {}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

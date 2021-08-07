const IMAGE_PATH = "./public/images/";

// Animals to be draw
export const animalsArray = ["bird", "chicken", "crow", "duck", "elephant", "hedgehog", "hippopotamus", "horse", "lion", "rabbit", "rat", "squirrel"];

export const animalObject = {
    bird: {
        id: "#bird",
        holeId: "#bird-hole",
        image: `${IMAGE_PATH}bird.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    chicken: {
        id: "#chicken",
        holeId: "#chicken-hole",
        image: `${IMAGE_PATH}chicken.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 0,
            left: 0
        }
    },

    crow: {
        id: "#crow",
        holeId: "#crow-hole",
        image: `${IMAGE_PATH}crow.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    duck: {
        id: "#duck",
        holeId: "#duck-hole",
        image: `${IMAGE_PATH}duck.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

       holePosition: {
            top: 200,
            left: 200
        }
    },

    elephant: {
        id: "#elephant",
        holeId: "#elephant-hole",
        image: `${IMAGE_PATH}elephant.png`,
        animalPosition: {
            top: 200,
            left: 350
        },

       holePosition: {
            top: 200,
            left: 200
        }
    },

    hedgehog: {
        id: "#hedgehog",
        holeId: "#hedgehog-hole",
        image: `${IMAGE_PATH}hedgehog.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    hippopotamus: {
        id: "#hippopotamus",
        holeId: "#hippopotamus-hole",
        image: `${IMAGE_PATH}hippopotamus.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    horse: {
        id: "#horse",
        holeId: "#horse-hole",
        image: `${IMAGE_PATH}horse.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    lion: {
        id: "#lion",
        holeId: "#lion-hole",
        image: `${IMAGE_PATH}lion.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    rabbit: {
        id: "#rabbit",
        holeId: "#rabbit-hole",
        image: `${IMAGE_PATH}rabbit.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    },

    rat: {
        id: "#rat",
        holeId: "#rat-hole",
        image: `${IMAGE_PATH}rat.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

       holePosition: {
            top: 200,
            left: 200
        }
    },

    squirrel: {
        id: "#squirrel",
        holeId: "#squirrel-hole",
        image: `${IMAGE_PATH}squirrel.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 200,
            left: 200
        }
    }
}

export class Game {
    #totalLevel = animalsArray.length / 2;
    #currentLevel = this.#totalLevel;
    #totalAnimalsThisLevel = this.currentLevel * 2;
    #totalHolesThisLevel = this.currentLevel;
    #dragAnimal = undefined;
    #playerPoints = 0;
    #playerLifes = 3;

    get totalLevel() {
        return this.#totalLevel;
    }

    set currentLevel(_currentLevel) {
        this.#currentLevel = _currentLevel;
    }

    get currentLevel() {
        return this.#currentLevel;
    }

    get totalAnimalsThisLevel() {
        return this.#totalAnimalsThisLevel;
    }

    get totalHolesThisLevel() {
        return this.#totalHolesThisLevel;
    }

    set dragAnimal(_dragAnimal) {
        this.#dragAnimal = _dragAnimal
    }

    get dragAnimal() {
        return this.#dragAnimal;
    }

    set playerPoints(_playerPoints) {
        this.#playerPoints = _playerPoints;
    }

    get playerPoints() {
        return this.#playerPoints;
    }

    set playerLifes(_playerLifes) {
        this.#playerLifes = _playerLifes;
    }

    get playerLifes() {
        return this.#playerLifes;
    }
}
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
        }
    },

    elephant: {
        id: "#elephant",
        holeId: "#elephant-hole",
        image: `${IMAGE_PATH}elephant.png`,
        animalPosition: {
            top: 0,
            left: 0
        },

        holePosition: {
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
            top: 0,
            left: 0
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
    #currentLevel = 1;
    #playerPointsThisLevel = 0;
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

    set playerPointsThisLevel(_playerPointsThisLevel) {
        this.#playerPointsThisLevel = _playerPointsThisLevel;
    }

    get playerPointsThisLevel() {
        return this.#playerPointsThisLevel;
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

    clearGame() {
        this.#totalLevel = animalsArray.length / 2;
        this.#currentLevel = 1;
        this.#playerPointsThisLevel = 0;
        this.#dragAnimal = undefined;
        this.#playerPoints = 0;
        this.#playerLifes = 3;
    }
}
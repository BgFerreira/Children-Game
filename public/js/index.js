$(document).ready(function () {

    const IMAGE_PATH = "./public/images/";
    const AUDIO_PATH = "./public/audio/";

    const animalsArray = ["bird", "chicken", "crow", "duck", "elephant", "hedgehog", "hippopotamus", "horse", "lion", "rabbit", "rat", "squirrel"];
    const animalObject = {
        bird: {
            id: "bird",
            image: `${IMAGE_PATH}bird.png`
        },

        chicken: {
            id: "chicken",
            image: `${IMAGE_PATH}chicken.png`
        },

        crow: {
            id: "crow",
            image: `${IMAGE_PATH}crow.png`
        },

        duck: {
            id: "duck",
            image: `${IMAGE_PATH}duck.png`
        },

        elephant: {
            id: "elephant",
            image: `${IMAGE_PATH}elephant.png`
        },

        hedgehog: {
            id: "hedgehog",
            image: `${IMAGE_PATH}hedgehog.png`
        },

        hippopotamus: {
            id: "hippopotamus",
            image: `${IMAGE_PATH}hippopotamus.png`
        },

        horse: {
            id: "horse",
            image: `${IMAGE_PATH}horse.png`
        },

        lion: {
            id: "lion",
            image: `${IMAGE_PATH}lion.png`
        },
        
        rabbit: {
            id: "lion",
            image: `${IMAGE_PATH}lion.png`
        },

        rat: {
            id: "rat",
            image: `${IMAGE_PATH}rat.png`
        },

        squirrel: {
            id: "squirrel",
            image: `${IMAGE_PATH}squirrel.png`
        }
    }

    class Game {
        #totalLevel = animalsArray.length - 1;
        #currentLevel = 1;
        #totalAnimalsThisLevel = currentLevel + 1;
        #selectedAnimals = [];
        #playerPoints = 0;
        #playerLifes = 3;
        #ranking = [];
    
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


        set selectedAnimals(_selectedAnimals) {
            this.#selectedAnimals = _selectedAnimals;
        }

        get selectedAnimals() {
            return this.#selectedAnimals;
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


        set ranking(_ranking) {
            this.#ranking = _ranking;
        }

        get ranking() {
            return this.#ranking;
        }

        createLevel() {

        }
    }

    $("#rules-menu, #game-screen").hide();

    // ---------- Sound Area ----------
    let muteAudioState = false;

    let music = new Audio();
    music.src = `${AUDIO_PATH}LittlerootTown_fromPokemonEmerald.mp3`;
    music.autoplay = true;
    music.loop = true;
    music.volume = 0.03;

    let buttonClick = new Audio();
    buttonClick.src = `${AUDIO_PATH}button_click.mp3`;
    buttonClick.preload = true;
    buttonClick.muted = muteAudioState;


    $("button").click(function () {
        buttonClick.play();

        buttonClick = new Audio();
        buttonClick.src = `${AUDIO_PATH}button_click.mp3`;
        buttonClick.preload = true;
        buttonClick.muted = muteAudioState;
    });


    $("#sound-effects").click(function () {
        let img = $("#sound-effects").attr("src");
        let muteImage = `${IMAGE_PATH}soundmuted.png`;
        let soundImage = `${IMAGE_PATH}soundbox.png`;

        if (img != muteImage) {
            $("#sound-effects").attr("src", muteImage); 7

            buttonClick = new Audio();
            buttonClick.src = `${AUDIO_PATH}button_click.mp3`;
            buttonClick.preload = true;
            muteAudioState = true;
            buttonClick.muted = muteAudioState;

        } else {
            $("#sound-effects").attr("src", soundImage);

            buttonClick = new Audio();
            buttonClick.src = `${AUDIO_PATH}button_click.mp3`;
            buttonClick.preload = true;
            muteAudioState = false;
            buttonClick.muted = muteAudioState;
        }
    });


    $("#menu-music").click(function () {
        let img = $("#menu-music").attr("src");
        let muteImage = `${IMAGE_PATH}musicmuted.png`;
        let soundImage = `${IMAGE_PATH}music.png`;

        if (img != muteImage) {
            $("#menu-music").attr("src", muteImage); 7
            music.pause();
            music.currentTime = 0;

        } else {
            $("#menu-music").attr("src", soundImage);
            music.play();
        }
    });
    // ---------- Sound Area ----------

    // ---------- Rules Area ----------
    $("#go-rules").click(function () {
        $("#main-menu").hide();
        $("#life-bar-tutorial2").hide();
        $("#rules-menu").fadeIn(500);

        // Tutorial Animation
        function tutorialAnimated() {
            $("#cursor-tutorial").animate({ left: "-=200px", top: "+=50px" }, 600, function () {
                $("#cursor-tutorial").attr("src", `${IMAGE_PATH}drag_cursor.png`);
                $("#cursor-tutorial").animate({ left: "+=412px" }, 1200);
                $("#elephant-tutorial").animate({ left: "+=412px" }, 1200, function () {
                    $("#cursor-tutorial").attr("src", `${IMAGE_PATH}pointer_cursor.png`);
                    $("#float-point-tutorial").animate({ opacity: "1", top: "-=100px" }, 600).animate({ opacity: "0" }, 600, function () {
                        $("#cursor-tutorial").animate({ left: "0px", top: "0px" }, 10);
                        $("#elephant-tutorial").animate({ left: "0px" }, 10);
                        $("#cursor-tutorial").animate({ left: "-=200px", top: "+=50px" }, 600, function () {
                            $("#cursor-tutorial").attr("src", `${IMAGE_PATH}drag_cursor.png`);
                            $("#cursor-tutorial").animate({ left: "+=380px", top: "+=150px" }, 1200);
                            $("#elephant-tutorial").animate({ left: "+=380px", top: "+=150px" }, 1200, function () {
                                $("#life-bar-tutorial2").fadeIn(300, function() {
                                    setTimeout(function() {resetTutorial(tutorialAnimated)}, 700);
                                });
                            });
                        });
                    });
                });
            });
        }

        tutorialAnimated();
    });


    $("#exit-rules").click(function () {
        $("#drag-tutorial").children().stop(true);
        $("#rules-menu").fadeOut(500, function () {
            $("#main-menu").show();
        });
        resetTutorial();
    });


    function resetTutorial(callback) {
        $("#cursor-tutorial").attr("src", `${IMAGE_PATH}pointer_cursor.png`)
        $("#cursor-tutorial").animate({ left: "0px", top: "0px" }, 10);
        $("#elephant-tutorial").animate({ left: "0px", top: "0px" }, 10);
        $("#float-point-tutorial").animate({ left: "1100px", top: "400px", opacity: "0" }, 10);
        $("#life-bar-tutorial2").fadeOut(10, callback);
    }
    // ---------- Rules Area ----------

    // ---------- Game Area -----------
    $("#go-game").click(function() {
        $("#main-menu").fadeOut(700, function() {
            $(".menu-stickers").fadeOut(300);
            $("#game-screen").show();
        });
    });

    $(".animals").draggable({cursor: "move",
        cursorAt: {top: 75, left: 75},
        zIndex: 10,
        revert: "invalid"});
});
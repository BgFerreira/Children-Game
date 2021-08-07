import { Game, animalsArray, animalObject } from "./objects.js"

$(document).ready(function () {

    const IMAGE_PATH = "./public/images/";
    const AUDIO_PATH = "./public/audio/";

    let gameControl = new Game();

    $("#rules-menu, #game-screen, .animals, .holes, .life-bar").hide();
    $("#life-bar").show();
    // ---------- Sound Area ----------
    let muteAudioState = false;

    let music = new Audio();
    music.src = `${AUDIO_PATH}LittlerootTown_fromPokemonEmerald.mp3`;
    music.autoplay = true;
    music.loop = true;
    music.volume = 0.1;

    let buttonClick = new Audio();
    buttonClick.src = `${AUDIO_PATH}button_click.mp3`;
    buttonClick.preload = true;
    buttonClick.muted = muteAudioState;

    let gameOver = new Audio();
    gameOver.src = `${AUDIO_PATH}gameover_sound.wav`;
    gameOver.preload = true;
    gameOver.muted = muteAudioState;

    let hitSound = new Audio();
    hitSound.src = `${AUDIO_PATH}hit_sound.wav`;
    hitSound.preload = true;
    hitSound.muted = muteAudioState;
    hitSound.volume = 0.1;

    let errorSound = new Audio();
    errorSound.src = `${AUDIO_PATH}error_sound.mp3`;
    errorSound.preload = true;
    errorSound.muted = muteAudioState;
    errorSound.volume = 0.1;

    let newLevelSound = new Audio();
    newLevelSound.src = `${AUDIO_PATH}newlevel_sound.wav`;
    newLevelSound.preload = true;
    newLevelSound.muted = muteAudioState;
    newLevelSound.volume = 0.2;

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

            hitSound = new Audio();
            hitSound.src = `${AUDIO_PATH}hit_sound.wav`;
            hitSound.preload = true;
            hitSound.muted = muteAudioState;
            hitSound.volume = 0.2;

            errorSound = new Audio();
            errorSound.src = `${AUDIO_PATH}error_sound.mp3`;
            errorSound.preload = true;
            errorSound.muted = muteAudioState;
            errorSound.volume = 0.1;

            newLevelSound = new Audio();
            newLevelSound.src = `${AUDIO_PATH}newlevel_sound.wav`;
            newLevelSound.preload = true;
            newLevelSound.muted = muteAudioState;
            newLevelSound.volume = 0.2;

        } else {
            $("#sound-effects").attr("src", soundImage);

            buttonClick = new Audio();
            buttonClick.src = `${AUDIO_PATH}button_click.mp3`;
            buttonClick.preload = true;
            muteAudioState = false;
            buttonClick.muted = muteAudioState;

            hitSound = new Audio();
            hitSound.src = `${AUDIO_PATH}hit_sound.wav`;
            hitSound.preload = true;
            hitSound.muted = muteAudioState;
            hitSound.volume = 0.2;

            errorSound = new Audio();
            errorSound.src = `${AUDIO_PATH}error_sound.mp3`;
            errorSound.preload = true;
            errorSound.muted = muteAudioState;
            errorSound.volume = 0.1;

            newLevelSound = new Audio();
            newLevelSound.src = `${AUDIO_PATH}newlevel_sound.wav`;
            newLevelSound.preload = true;
            newLevelSound.muted = muteAudioState;
            newLevelSound.volume = 0.1;
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
                    $("#float-point-tutorial").animate({ opacity: "1", top: "-=50px" }, 500).animate({ opacity: "0" }, 300, function () {
                        $("#cursor-tutorial").animate({ left: "0px", top: "0px" }, 10);
                        $("#elephant-tutorial").animate({ left: "0px" }, 10);
                        $("#cursor-tutorial").animate({ left: "-=200px", top: "+=50px" }, 600, function () {
                            $("#cursor-tutorial").attr("src", `${IMAGE_PATH}drag_cursor.png`);
                            $("#cursor-tutorial").animate({ left: "+=380px", top: "+=200px" }, 1200);
                            $("#elephant-tutorial").animate({ left: "+=380px", top: "+=200px" }, 1200, function () {
                                $("#life-bar-tutorial2").fadeIn(300, function () {
                                    setTimeout(function () { resetTutorial(tutorialAnimated) }, 700);
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
    $("#go-game").click(function () {
        $("#main-menu").fadeOut(700, function () {
            $(".menu-stickers").fadeOut(300, function () {
                $("#game-screen").show();
            });
        });
        buildLevel();
    });


    $(".animals").draggable({
        cursor: "move",
        cursorAt: { top: 75, left: 75 },
        zIndex: 10,
        containment: "parent",
        revert: "invalid",

        drag: function (event, ui) {
            gameControl.dragAnimal = $(this).attr("id");
            animalObject[gameControl.dragAnimal].animalPosition = $(this).position();
        },

        revert: function () {
            if ($(this).hasClass('drag-revert')) {
                $(this).removeClass('drag-revert');
                return true;
            }
        }
    });

    $(".holes").droppable({
        drop: function (event, ui) {
            if (animalObject[ui.draggable[0].id].holeId == `#${$(this).attr("id")}`) {

                gameControl.playerPoints += 10;
                gameControl.playerPointsThisLevel += 10
                $("#player-points > span").text(gameControl.playerPoints);

                hitSound.play();
                hitSound = new Audio();
                hitSound.src = `${AUDIO_PATH}hit_sound.wav`;
                hitSound.preload = true;
                hitSound.muted = muteAudioState;
                hitSound.volume = 0.1;

                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this),
                });

                ui.draggable.draggable({ disabled: true });
                $(this).droppable({ disabled: true });

                if (gameControl.playerPointsThisLevel == gameControl.currentLevel * 10) {
                    gameControl.currentLevel++;
                    gameControl.playerPointsThisLevel = 0;

                    newLevelSound.play();
                    newLevelSound = new Audio();
                    newLevelSound.src = `${AUDIO_PATH}newlevel_sound.wav`;
                    newLevelSound.preload = true;
                    newLevelSound.muted = muteAudioState;
                    newLevelSound.volume = 0.2;

                    if (gameControl.currentLevel > gameControl.totalLevel) {
                        gameControl.clearGame();
                        $(".animals").draggable({ disabled: false });
                        $(".holes").droppable({ disabled: false });
                        $("#game-screen").fadeOut(1000, function() {
                            // if for ranking
                            $("#main-menu").show();
                            $(".animals, .holes").hide();
                            $("#player-points > span").text("0");
                            $("#life-bar2, #life-bar3, #life-bar4").hide(0);
                            gameControl.clearGame();
                        });

                    } else {
                        $(".animals").draggable({ disabled: false });
                        $(".holes").droppable({ disabled: false });
                        $(".animals, .holes").hide();
                        buildLevel();
                    }
                }

            } else {
                gameControl.playerLifes--;

                if (gameControl.playerLifes == 2) {
                    $("#life-bar2").fadeIn(300);
                } else if (gameControl.playerLifes == 1) {
                    $("#life-bar3").fadeIn(300);
                } else {
                    $("#life-bar4").fadeIn(300);
                    // if for ranking
                }

                errorSound.play()
                errorSound = new Audio();
                errorSound.src = `${AUDIO_PATH}error_sound.mp3`;
                errorSound.preload = true;
                errorSound.muted = muteAudioState;
                errorSound.volume = 0.1;

                return $(ui.draggable).addClass('drag-revert');
            }
        }
    });

    $("#quit-game").click(function () {
        gameControl.clearGame();
        $("#player-points > span").text("0");
        $(".animals").draggable({ disabled: false });
        $(".holes").droppable({ disabled: false });

        $(".animals").hide();
        $(".holes").hide();
        $(".life-bar").hide();

        $("#game-screen").fadeOut(700, function () {
            $(".menu-stickers").show();
            $("#main-menu").show();
            $("#life-bar").show();
        });


    });

    function drawAnimals() {
        let random = Math.floor(Math.random() * (animalsArray.length));
        let selectedAnimals = [];

        do {
            if (selectedAnimals.indexOf(animalsArray[random]) == -1) {
                selectedAnimals.push(animalsArray[random]);
            }

            random = Math.floor(Math.random() * (gameControl.currentLevel * 2));

        } while (selectedAnimals.length < gameControl.currentLevel * 2);
        return selectedAnimals;
    }

    function drawHoles(selectedAnimals) {
        let random = Math.floor(Math.random() * selectedAnimals.length);
        let selectedHoles = [];

        do {
            if (selectedHoles.indexOf(selectedAnimals[random]) == -1) {
                selectedHoles.push(selectedAnimals[random]);
            }

            random = Math.floor(Math.random() * selectedAnimals.length);

        } while (selectedHoles.length < gameControl.currentLevel);
        return selectedHoles;
    }

    function drawPos() {
        let divWidth = $("#game-frame").css("width").slice(0, $("#game-frame").css("width").indexOf("p"));
        let divHeight = $("#game-frame").css("height").slice(0, $("#game-frame").css("height").indexOf("p"));
        let randomX = Math.floor(Math.random() * (divWidth / 150));
        let randomY = Math.floor(Math.random() * (divHeight / 150));
        let divPos = [randomY, randomX];
        let divPosArray = [];
        let arraysEqual = 0;

        do {
            if ((divPos[0] * 150 < (divHeight - 150) && divPos[1] * 150 < divWidth - 150) && (divPosArray.length == 0 || arraysEqual == 0)) {
                divPosArray.push(divPos);
            }

            randomX = Math.floor(Math.random() * (divWidth / 150));
            randomY = Math.floor(Math.random() * (divHeight / 150));
            divPos = [randomY, randomX];

            arraysEqual = lookEqualsPos(divPosArray, divPos);

        } while (divPosArray.length < gameControl.currentLevel + (gameControl.currentLevel * 2));

        return divPosArray;
    }

    function lookEqualsPos(divPosArray, divPos) {
        let arrayReturn = [];

        for (let i = 0; i < divPosArray.length; i++) {
            if (divPosArray[i][0] == divPos[0] && divPosArray[i][1] == divPos[1]) {
                arrayReturn.push(null);
            }
        }

        return arrayReturn.length;
    };

    function buildLevel() {
        let selectedAnimals = drawAnimals();
        let selectedHoles = drawHoles(selectedAnimals);
        let divPosArray = drawPos();
        let animalPosArray = divPosArray.slice(0, selectedAnimals.length);
        let holePosArray = divPosArray.slice(selectedAnimals.length, selectedAnimals.length + selectedHoles.length)

        for (let i = 0; i < selectedAnimals.length; i++) {
            $(animalObject[selectedAnimals[i]].id).show();

            animalObject[selectedAnimals[i]].animalPosition.top = animalPosArray[i][0] * 150;
            animalObject[selectedAnimals[i]].animalPosition.left = animalPosArray[i][1] * 150;

            $(animalObject[selectedAnimals[i]].id).css(animalObject[selectedAnimals[i]].animalPosition);
        }

        for (let i = 0; i < selectedHoles.length; i++) {
            $(animalObject[selectedHoles[i]].holeId).show();

            animalObject[selectedHoles[i]].holePosition.top = holePosArray[i][0] * 150;
            animalObject[selectedHoles[i]].holePosition.left = holePosArray[i][1] * 150;

            $(animalObject[selectedHoles[i]].holeId).css(animalObject[selectedHoles[i]].holePosition);
        }
    }
});
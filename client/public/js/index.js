import { Game, animalsArray, animalObject } from "./objects.js"

$(document).ready(function () {

    const IMAGE_PATH = "./public/images/";
    const AUDIO_PATH = "./public/audio/";

    let gameControl = new Game();

    $("#rules-menu, #game-screen, .animals, .holes").hide();
    // ---------- Sound Area ----------
    let muteAudioState = false;

    let music = new Audio();
    music.src = `${AUDIO_PATH}LittlerootTown_fromPokemonEmerald.mp3`;
    music.autoplay = true;
    music.loop = true;
    music.volume = 0.02;

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

        let selectedAnimals = drawAnimals();
        console.log(selectedAnimals);

        let selectedHoles = drawHoles(selectedAnimals);
        console.log(selectedHoles);

        for (let i = 0; i < selectedAnimals.length; i++ ) {
            $(animalObject[selectedAnimals[i]].id).show();
        }

        let holePosArray = drawPos();
        for (let i = 0; i < selectedHoles.length; i++ ) {
            $(animalObject[selectedHoles[i]].holeId).show();
            
            animalObject[selectedHoles[i]].holePosition.top = holePosArray[i][0] * 150;
            animalObject[selectedHoles[i]].holePosition.left = holePosArray[i][1] * 150;
            $(animalObject[selectedHoles[i]].holeId).css(animalObject[selectedHoles[i]].holePosition);
        }


    });


    $(".animals").draggable({
        cursor: "move",
        cursorAt: { top: 75, left: 75 },
        zIndex: 10,
        revert: "invalid",

        drag: function (ui, event) {
            gameControl.dragAnimal = $(this).attr("id");
            console.log(Math.floor($(this).position().top + 75), Math.floor($(this).position().left + 75));
        },

        //detect when LBM is released
        stop: function (ui, event) {
            //code
        }
    });

    $(".holes").droppable({
        drop: function (ui, event) {
            //code
        }
    });

    $("#quit-game").click(function () {

        $(".animals").hide();
        $(".holes").hide();

        $("#game-screen").fadeOut(700, function () {
            $(".menu-stickers").show();
            $("#main-menu").show();
        });


    });

    function drawAnimals() {
        let random = Math.floor(Math.random() * (animalsArray.length));
        let selectedAnimals = [];

        do {
            if (selectedAnimals.indexOf(animalsArray[random]) == -1) {
                selectedAnimals.push(animalsArray[random]);
            }

            random = Math.floor(Math.random() * (gameControl.totalAnimalsThisLevel));

        } while (selectedAnimals.length < gameControl.totalAnimalsThisLevel);
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

        } while (selectedHoles.length < gameControl.totalHolesThisLevel);
        return selectedHoles;
    }

    function drawPos() {
        let divWidth = $("#game-frame").css("width").slice(0, $("#game-frame").css("width").indexOf("p"));
        let divHeight = $("#game-frame").css("height").slice(0, $("#game-frame").css("height").indexOf("p"));
        let randomX = Math.floor(Math.random() * (divWidth / 150));
        let randomY = Math.floor(Math.random() * (divHeight / 150));
        let divPos = [randomY, randomX];
        let divPosArray = [];

        do {
            
            for (let i = 0; i < divPosArray.length; i++) {
                if (divPosArray[i].indexOf(divPos) == -1) {
                    if (divPos[0] * 150 < (divHeight - 150) && divPos[1] * 150 < divWidth - 150) {
                        divPosArray.push(divPos);
                    }
                }
            }

            randomX = Math.floor(Math.random() * (divWidth / 150));
            randomY = Math.floor(Math.random() * (divHeight / 150));
            divPos = [randomY, randomX];

        } while (divPosArray.length < gameControl.totalHolesThisLevel + gameControl.totalAnimalsThisLevel);
        console.log(divPosArray)
        return divPosArray;
    }
});
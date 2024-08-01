
let speed = 0;
let gravity = 0.3;
let score = 0;
let gameState = "game";
let restartButton;
let LandingSpeed = 2;

function setup() {
    createCanvas(800, 600);
    restartButton = createButton('↻');
    restartButton.position(410, 150);
    restartButton.mousePressed(restartGame);
    restartButton.hide();

    restartButton.style('color', 'white');
    restartButton.style('font-size', '50px');
    restartButton.style('border', 'none');
    restartButton.style('background', 'none');
}

function draw() {
    if (gameState === "start") {
        startScreen();
    } else if (gameState === "game") {
        gameScreen();
    } else if (gameState === "gameover") {
        gameover();
    } else if (gameState === "win") {
        win();
    }
}

//start screen
function startScreen() {
    background(255, 180, 100);

    noStroke();
    fill(195, 195, 195);
    ellipse(435, 355, 200, 200);

    fill(255);
    rect(335, 350, 200, 20, 5);
    rect(423, 255, 25, 200, 5);

    fill(0);
    rect(400, 300, 70, 120, 30);
    rect(423, 400, 25, 95, 10);
    rect(418, 475, 35, 15, 5);

    fill(55);
    rect(420, 370, 10, 30, 5);
    rect(440, 370, 10, 30, 5);

    fill(255, 220, 130);
    textSize(40);
    textStyle(BOLD);
    text("Helicopter Lander", 250, 150);

    fill(220, 255, 205);
    text("START", 370, 230);
}

//main game
function gameScreen() {
    background(255, 145, 80);

    //the sun
    fill(240, 130, 65);
    ellipse(730, 70, 140, 140);
    fill(240, 179, 100);
    ellipse(730, 70, 100, 100);
    fill(255, 255, 150);
    ellipse(730, 70, 60, 60);

    ground();
    helicopter();
}

//asphalt ground
function ground() {
    noStroke();
    fill(60);
    rect(0, 490, 800, 110);
    rect(200, 450, 450, 100);
}

let x = 400;
let y = 100;

//the helicopter
function helicopter() {
    //box
    fill(255);
    rect(x, y, 50, 50);

    //helicopter legs
    fill(50);
    rect(x - 5, y + 130, 15, 30, 10);
    rect(x + 40, y + 130, 15, 30, 10);

    fill(205, 235, 250);
    ellipse(x + 25, y, 250, 30);

    //helicopter body
    fill(0);
    rect(x - 35, y, 120, 135, 40);

    //helicopter window
    fill(180, 185, 200);
    rect(x - 15, y + 40, 30, 40);
    rect(x + 35, y + 40, 30, 40);

    fill(0);
    ellipse(x + 25, y + 90, 100, 30);

    speed += gravity;
    y += speed;

    //key function
    if (keyIsDown(UP_ARROW)) {
        speed -= 0.8;
    }
    if (y + 50 > 340) {
        y = 340 - 50;
        if (speed > LandingSpeed) {
            gameState = "gameover";
        } else {
            gameState = "win";
            speed = 0;
        }
    }
}

//gameover + restart
function gameover() {
    fill(255, 0, 0);
    textStyle(BOLD);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER!", 430, 100);
    noLoop();
    restartButton.show();
}

//win screen
function win() {
    fill(187, 255, 153);
    textStyle(BOLD);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GREAT JOB!", 430, 100);
    restartButton.show();
}

//where the game starts over
function restartGame() {
    gameState = "game";
    restartButton.hide();
    x = 400;
    y = 100;
    speed = 0;
    loop();
}
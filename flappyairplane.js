let x = 90;
let y = 100;
let speed = 0;
const gravity = 0.9;
let buildings = [];
let score = 0;
let gameState = "start";
let restartButton;

function setup() {
    createCanvas(800, 600);
    restartButton = createButton('↻');
    restartButton.position(width / 2, height / 2.5 + 20);
    restartButton.mousePressed(restartGame);
    restartButton.hide();

    restartButton.style('background-color', 'transparent');
    restartButton.style('color', 'white');
    restartButton.style('font-weight', 'bold');
    restartButton.style('font-size', '50px');
    restartButton.style('border', 'none');

}

function draw() {
    if (gameState === "start") {
        startScreen();
    } else if (gameState === "game") {
        gameScreen();
    } else if (gameState === "gameover") {
        gameover();
    } else if (gameState === "game") {
        gameScreen();
    }
}

//gameover + score + restart
function gameover() {
    fill(255, 0, 0);
    textStyle(BOLD);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("!GAME OVER!", width / 2, height / 5);
    noLoop();

    fill(0, 0, 0);
    textSize(24);
    text("Score : " + score, width / 2, height / 3.5);
    restartButton.show();
}

//start screen
function startScreen() {
    background(230, 242, 255);
    //window frame 1
    noStroke();
    fill(175, 205, 219);
    rect(200, 90, 250, 290, 90);
    //window frame 2
    fill(230, 242, 255);
    rect(210, 100, 230, 270, 80);
    //window frame 3
    fill(175, 205, 219);
    rect(215, 105, 220, 260, 80);
    //buildings
    fill(73, 101, 107);
    rect(280, 275, 45, 89, 10);
    rect(328, 234, 45, 130, 10);
    //windows building 1
    fill(176, 147, 0);
    rect(290, 285, 7);
    rect(305, 285, 7);
    rect(290, 300, 7);
    rect(305, 300, 7);
    rect(290, 315, 7);
    rect(305, 315, 7);

    //windows building 2
    fill(176, 147, 0);
    rect(340, 245, 7);
    rect(355, 245, 7);
    rect(340, 260, 7);
    rect(355, 275, 7);
    rect(340, 275, 7);
    rect(355, 290, 7);

    // Check if mouse is over the button
    if (
        mouseX > 230 &&
        mouseX < 430 &&
        mouseY > 395 &&
        mouseY < 495
    ) {
        cursor(HAND);
        if (mouseIsPressed) {
            gameState = "game";
        }
    } else {
        cursor(ARROW);
    }

    //start game button
    fill(185, 205, 219);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(30);
    text("FLAPPY AIRPLANE", 320, 50);

    textSize(50);
    text("START GAME", 330, 445);

    textSize(20);
    text("use Spacebar or Mouse to make the airplane jump", 330, 495);
    text("and don't forget to avoid the buildings", 330, 515);
}

//main game
function gameScreen() {
    background(179, 229, 255);
    ground();
    airplane();
    moveBuildings();

    //score while playing
    fill(147, 201, 235);
    textStyle(BOLD);
    textSize(40);
    textAlign(CENTER, CENTER);
    text(" " + score, width / 2, 30);

    //airplane gravity and speed
    speed = speed + gravity;
    y = y + speed;

    if (y + 20 > 450 || collideWithBuildings()) {
        gameover();
    }

    if ((keyIsDown(32) || mouseIsPressed) && y > 100) {
        speed = -10;
    }
}

//asphalt ground
function ground() {
    noStroke();
    fill(170, 180, 180);
    rect(0, 450, 800, 160);

    fill(255, 255, 255);
    for (let i = 0; i < 8; i++) {
        rect(10 + i * 80, 470, 50, 10);
    }
}

//the airplane
function airplane() {
    //wing 1
    fill(167, 201, 235);
    triangle(x - 20, y - 60, x + 30, y + 5, x - 10, y + 5);

    //airplane body
    fill(230, 242, 255);
    ellipse(x, y, 130, 40);
    ellipse(x - 50, y - 15, 35, 50);

    //airplane windows
    fill(175, 205, 219);
    rect(x - 10, y - 10, 7);
    rect(x, y - 10, 7);
    rect(x + 10, y - 10, 7);
    rect(x + 20, y - 10, 7);

    //wing 2
    fill(167, 201, 235);
    triangle(x - 30, y + 70, x + 30, y + 5, x - 10, y + 5);
}

//the objects (buildings)
function Building(height) {
    this.x = width;
    this.height = height;

    this.show = function () {
        fill(26, 26, 0);
        rect(this.x, 450 - this.height, 70, this.height, 10);

        //building windows
        fill(255, 255, 204);
        rect(this.x + 20, 450 - this.height + 15, 10, 10);
        rect(this.x + 40, 450 - this.height + 15, 10, 10);

        rect(this.x + 20, 450 - this.height + 35, 10, 10);
        rect(this.x + 40, 450 - this.height + 35, 10, 10);

        rect(this.x + 20, 450 - this.height + 55, 10, 10);
        rect(this.x + 40, 450 - this.height + 55, 10, 10);
    };
}

function moveBuildings() {
    for (let building of buildings) {
        building.x -= 5;
        building.show();
    }

    if (frameCount % 60 === 0) {
        buildings.push(new Building(70 + Math.floor(Math.random() * 201)));
        score++;
    }

    buildings = buildings.filter(building => building.x + 70 > 0);
}

function collideWithBuildings() {
    for (let building of buildings) {
        if (
            x + 20 > building.x &&
            x - 20 < building.x + 70 &&
            y + 20 > 450 - building.height
        ) {
            return true;
        }
    }
    return false;
}


function restartGame() {
    gameState = "game";
    restartButton.hide();
    x = 90;
    y = 100;
    speed = 0;
    buildings = [];
    score = 0;
    loop();
}

function resetGame() {
    score = 0;
    buildings = [];
    y = 100;
    speed = 0;
    gameState = "game";
    loop();
}
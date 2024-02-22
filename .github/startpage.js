function draw() {

    background(230, 242, 255);

    //windowframe
    noStroke();
    fill(175, 205, 219);
    rect(200, 90, 250, 290, 90);

    fill(230, 242, 255);
    rect(210, 100, 230, 270, 80);

    fill(175, 205, 219);
    rect(215, 105, 220, 260, 80);

    //the buildings
    fill(73, 101, 107);
    rect(280, 275, 45, 89, 10);
    rect(328, 234, 45, 130, 10);

    //building window 1
    fill(176, 147, 0);
    rect(290, 285, 7);
    rect(305, 285, 7);
    rect(290, 300, 7);
    rect(305, 300, 7);
    rect(290, 315, 7);
    rect(305, 315, 7);

    //building window 2
    fill(176, 147, 0);
    rect(340, 245, 7);
    rect(355, 245, 7);
    rect(340, 260, 7);
    rect(355, 275, 7);
    rect(340, 275, 7);
    rect(355, 290, 7);

    //start button
    fill(185, 205, 219);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("START GAME", 330, 445);
}


background(179, 229, 255);
function setup() {
    createCanvas(600, 700);
}

function ground() {
    //asphaltground
    noStroke();
    fill(170, 180, 180);
    rect(0, 450, 730, 160);

    //asphalt painting
    fill(255, 255, 255);
    rect(10, 470, 50, 10);
    rect(90, 470, 50, 10);
    rect(170, 470, 50, 10);
    rect(250, 470, 50, 10);
    rect(330, 470, 50, 10);
    rect(410, 470, 50, 10);
    rect(490, 470, 50, 10);
    rect(570, 470, 50, 10);
    rect(650, 470, 50, 10);
}
ground();

function airplane() {
    //airplane wing 1
    fill(167, 201, 235);
    triangle(70, 140, 120, 205, 80, 205);

    //airplane body
    fill(230, 242, 255);
    ellipse(90, 200, 130, 40);
    ellipse(40, 185, 35, 50);

    //airplane windows
    fill(175, 205, 219);
    rect(80, 190, 7);
    rect(90, 190, 7);
    rect(100, 190, 7);
    rect(110, 190, 7);

    //airplane wing 2
    fill(167, 201, 235);
    triangle(60, 270, 120, 205, 80, 205);
}
airplane();


function building() {
    //the objects 
    fill(26, 26, 0);
    rect(230, 300, 70, 150, 10);

    //building windows
    fill(255, 255, 204);
    rect(250, 315, 10, 10);
    rect(270, 315, 10, 10);

    rect(250, 335, 10, 10);
    rect(270, 335, 10, 10);

    rect(250, 355, 10, 10);
    rect(270, 375, 10, 10);

}
building();

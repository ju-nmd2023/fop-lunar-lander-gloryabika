function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(179, 229, 255);

    function ground() {
        //asphaltground
        noStroke();
        fill(170, 180, 180);
        rect(0, 450, 800, 160);

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
        rect(730, 470, 50, 10);
    }
    ground();

    let x = 90;
    let y = 200;

    function airplane() {
        //airplane wing 1
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

        //airplane wing 2
        fill(167, 201, 235);
        triangle(x - 30, y + 70, x + 30, y + 5, x - 10, y + 5);
    }
    airplane();

    function draw() {
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
    }
}
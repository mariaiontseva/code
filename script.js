
function setup() {
    createCanvas (500, 500)

}

function draw () {
    if (mouseIsPressed) {
            pixelDensity(5);
            ellipse (mouseX, mouseY, 50, 50);
            stroke (144, 0,0);
            fill (188,11,11);}
    else {
    pixelDensity(5);
    rect (mouseX, mouseY, 50, 50);
    stroke (144, 0,0);
    fill (188,11,11);     
    }
    
        }
    
   
    




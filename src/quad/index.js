function setup() {
    createCanvas(1600,700,WEBGL)
    noStroke()
    fill('blue')
}

function draw(){
    rotate(0.3)
    quad(75,50,225,50,200,200,50,200)
    translate(0)
}
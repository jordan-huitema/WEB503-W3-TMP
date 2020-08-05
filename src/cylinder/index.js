function setup() {
    createCanvas(1600,700,WEBGL)
}

function draw(){
    cylinder(100,250)
    translate(250,0)
    ellipsoid(100,100,100)
    translate(-250,0)
}
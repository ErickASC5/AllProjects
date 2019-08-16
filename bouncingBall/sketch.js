let x = 0, y = 0, w = 0, h = 0;
let bouncey = false, bouncex = false;
let ymove = 4, xmove = 2;
function setup(){
    createCanvas(600,600);
    x = random(15,585);
    y = random(15,585);
}

function draw(){
if(y <= 19){
    bouncey = false;
}
if(y >= 580){
    bouncey = true;
}
if(bouncey == false){
    y += ymove;
}

if(bouncey == true){
    y -= ymove;
}

if(x <= 16){
    bouncex = false;
}
if(x >= 584){
    bouncex = true;
}
if(bouncex == false){
    x += xmove;
}
if(bouncex == true){
    x -= xmove;
}
    background(220);
    ellipse(x,y,30,30);
}

function mouseClicked(){
    x = random(15,585);
    y = random(15,585);
}
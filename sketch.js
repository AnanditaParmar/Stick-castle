const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,385);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(480,350,50,160);
    box2 = new Box(200,350,50,160);
    box7 = new Box(340,380,230,220);
    box3 = new Box(340,240,338,60);
    box4 = new Box(340,180,250,60);
    box5 = new Box(340,125,162,50);
    box6 = new Box(340,80,74,40);
    box8 = new Box(80,350,50,160);
    box9 = new Box(600,350,50,160);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

}
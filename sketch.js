var ground,player
var groundImage
var playerImage
var edges
function preload(){
 groundImage = loadImage("Images/ground.png")
 playerImage = loadAnimation("Images/player1.png","Images/player2.png",
 "Images/player3.png","Images/player4.png","Images/player5.png","Images/player6.png",
 "Images/player7.png"
 )

}
function setup(){
createCanvas(1200,400)
player = new Player(50,300,40,80)
ground = new Ground(600,500,1200,20)
edges = createEdgeSprites();
}

function draw(){
background("black");
ground.reset();
player.behaviour();
drawSprites();
}
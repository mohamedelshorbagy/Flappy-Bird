
/* Global Variables */
/* Definning Bird Object */ 
var bird;

var pipes = [];




function setup() {  
  createCanvas(400 , 600);
  bird= new Bird();

  pipes.push(new Pipes());

}



function keyPressed() {
  if(key == ' ') {
    bird.up();
  }



}


function draw() {
background(51);
bird.update();
bird.show();


/* Adding New Pipes */ 
if(frameCount % 50 == 0) {
  pipes.push(new Pipes());

}





for (var i = 0 ; i < pipes.length ; i++) {
  pipes[i].show();
  pipes[i].update();
  
  
  if(pipes[i].hit(bird))  {
    console.log("OOOOOh!");


  } 

}




}
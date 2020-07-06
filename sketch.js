
let words = ['hello', 'my', 'name', 'is', 'Luka'];
let index= 0;
let colors = [0,200,255]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  textSize(50)
  fill(colors[0],colors[1],colors[2])
  text(words[index], 15, 200);
}

function mousePressed() {
  index = index + 1
  if(index == words.length){
    index = 0;
    colors = [random(255),random(255),random(255)]
  }
}

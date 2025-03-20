function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  frameRate(3);
  noLoop();
}

function draw() {
  background(0);

  let gridSize = 45;
  let shapeSpacing = width / gridSize;

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {

      let posX = x * shapeSpacing + shapeSpacing / 2;
      let posY = y * shapeSpacing + shapeSpacing / 2;

      let r = random(10, shapeSpacing);

      let shade = random(50, 200);
      fill(shade);
      noStroke();

      ellipse(posX, posY, r, r);
    }
  }
}

function setup() {
  createCanvas(800, 800);
  noLoop();
  // of white background
  //background(246, 244, 237);
  // light gray background in hsb
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 95);

}

function draw() {
  let rows = 17;
  let cols = 17;
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  // fixed hue for monochromatic color scheme
  //let fixedHue = 210; // blue tone
  let fixedHue = 30; // orange tone
  //let fixedHue = 300; // pinkish purple

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let centerX = x * cellWidth + cellWidth / 2;
      let centerY = y * cellHeight + cellHeight / 2;

      push();

      translate(centerX, centerY);

      let numSquares = int(random(3, 12));

      let maxSize = min(cellWidth, cellHeight) * 0.95;

      for (let i = 0; i < numSquares; i++) {
        let size = map(i, 0, numSquares - 1, maxSize, 5) + random(-2, 2);

        // randomize saturation and brightness so each nested square has slightly different shade of blue
        let saturation = random(30, 80);
        let brightness = random(30, 100);

        strokeWeight(random(0.5, 2));

        //stroke(0);
        stroke(fixedHue, saturation, brightness);
        noFill();

        square(-size / 2, -size / 2, size);
      }

      pop();
    }
  }
}

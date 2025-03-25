function setup() {
  createCanvas(1000, 500);         // wide canvas
  background(201, 178, 138);
  noLoop();
}

function draw() {
  // Define a minimal color palette (opaque)
  // You could add or change these for more variety
  let palette = [
    color(0),      // black
    color(25, 0, 0),
    color(75, 0, 0),
    color(150),
    color(255),    // white
    color(100),    // gray
  ];

  // We’ll do multiple passes, one for each color
  // but also randomize the order to emulate Pollock’s layering
  shuffleArray(palette); // randomize the color order

  for (let c of palette) {
    // Each color gets 2-3 “passes” of flinging
    let passes = int(random(2, 4));
    for (let p = 0; p < passes; p++) {
      flingPaint(c);
    }
  }

  // let passes = 5;

  // for (let p = 0; p < passes; p++) {
  //   let r = random(255);
  //   let g = random(255);
  //   let b = random(255);

  //   let strokesCount = int(random(50, 200));

  //   for (let i = 0; i < strokesCount; i++) {
  //     strokeWeight(random(1, 10));
  //     stroke(r, g, b, random(50, 200));
  //     noFill();

  //     let x1 = random(width);
  //     let y1 = random(height);
  //     let x2 = x1 + random(-100, 100)
  //     let y2 = y1 + random(-100, 100);

  //     // Option 1: Random arcs
  //     // arc(x1, y1, x2, y2, random(TWO_PI), random(TWO_PI));

  //     // Or Option 2: Random lines
  //     //line(x1, y1, x2, y2);

  //     // Or Option 3: Random splat circles
  //     ellipse(x1, y1, random(10, 60));
  //   }
  // }
}

// This function randomly flings paint across the canvas
function flingPaint(paintColor) {
  // Decide how many lines / arcs to fling in this pass
  let count = int(random(30, 60));

  // Use a single stroke color (Pollock layered same color in bursts)
  stroke(paintColor);
  noFill();

  for (let i = 0; i < count; i++) {
    // Random stroke weight for variety
    strokeWeight(random(1, 7));

    // Either fling a line or fling a swirling arc
    let choice = random(1);
    if (choice < 0.5) {
      // Simple fling: line from one random point to another
      let x1 = random(width);
      let y1 = random(height);
      let x2 = x1 + random(-200, 200);
      let y2 = y1 + random(-200, 200);
      line(x1, y1, x2, y2);
    } else {
      // Arc fling: create a quick arc that curves randomly
      let arcX = random(width);
      let arcY = random(height);
      let w = random(50, 250);
      let h = random(50, 250);
      let startA = random(TWO_PI);
      let endA = startA + random(PI / 2, 2 * PI);
      arc(arcX, arcY, w, h, startA, endA);
    }

    // Optionally drop in small splatter points near each fling
    let splatterCount = int(random(5, 15));
    for (let s = 0; s < splatterCount; s++) {
      strokeWeight(random(1, 3));
      let sx = random(width);
      let sy = random(height);
      point(sx, sy);
    }
  }
}

// Utility to randomize array order
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

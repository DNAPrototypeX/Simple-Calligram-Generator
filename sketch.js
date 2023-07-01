function setup() {
  createCanvas(1920, 780);

  // Create the outer text input box and prompt.
  outerInput = createInput('TEST');
  outerInput.position(125, height + 25);
  outerInput.size(350);
  outerPrompt = createElement('h2', 'Outer Text: ');
  outerPrompt.position(0, height);

  // Create the inner text input box and prompt.
  innerInput = createInput('TEST');
  innerInput.position(125, height + 75);
  innerInput.size(350);
  innerPrompt = createElement('h2', 'Inner Text: ');
  innerPrompt.position(0, height + 50);

  // Create The font size sliders.
  outerSizePrompt = createElement('h2', 'Outer Font Size: ');
  outerSizePrompt.position(150 + outerInput.width - 15)
  outerSizeSlider = createSlider(10, 500, 300);
  outerSizeSlider.position(350 + innerInput.width, height + 25);

  innerSizePrompt = createElement('h2', 'Inner Font Size: ');
  innerSizePrompt.position(150 + innerInput.width - 15, height + 50)
  innerSizeSlider = createSlider(5, 20, 15);
  innerSizeSlider.position(350 + innerInput.width, height + 75);
}

function draw() {
  background(50);

  // Creating the background text used to correctly position small text.
  fill(49, 49, 49);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(outerSizeSlider.value());
  text(outerInput.value(), 0, 0, width, height);

  // Small font text styling
  fill(255);
  textSize(innerSizeSlider.value());

  // Loop over pixels searching for the background text
  let index = 0;
  for (j = 0; j < height; j += innerSizeSlider.value()){
    for (i = 0; i < width; i += innerSizeSlider.value()){
      /* If a background text pixel is found, draw the next character of the small text string.

         The next character is tracked using index. To avoid index out of bounds errors, we use it modulo the length of the 
         small text string provided by the user.
      */
      if (get(i , j)[0] == 49){
        // Draw the text and increment index.
        text(innerInput.value().charAt(index % innerInput.value().length), i + innerSizeSlider.value() / 2, j + innerSizeSlider.value() / 2);
        index++;
      }
    }
  }
}

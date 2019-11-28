const festivalColours = color1 => {
  // code here!
  let returnColour = [];
  
  returnColour[0] = (color1 + 150);
  returnColour[1] = (color1 + 210);
  
  return returnColour;
};

/*
Challenge #16 - In Living Colour
It's time to order the banners and flags for the festival, and you need to decide on the key colour scheme.

You want to use colour theory to make sure the colours complement one another. To do so we'll need to choose a main colour and use code to determine the best complementary colours.

Instructions
We'll complete a function festivalColours() that calculates the split complementary colours for a given colour. We'll be working with a special colour system called HSL, which stands for Hue, Saturation, and Lightness.

Here's an example of an HSL colour picker.

The function will receive an H(Hue) value, and must return an array of the values for the two split complementary colours. The smaller number should be the first element, and the larger number should be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the split complementary colours.

Examples
Input:

    const color1 = 100
    
Output:
[250, 310]
*/
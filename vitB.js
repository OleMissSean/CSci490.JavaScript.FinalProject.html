/*
  vitB.js
  Sean Staz
  CSci 490 ~ Special Topics: JavaScript
  01/13/2014
*/

/**
 * @return {undefined}
 */
 // Establish functionality on window load
window.onload = function() 
{
  /** @type {(HTMLElement|null)} */
  var e = document.getElementById("selectB");

  /**
   * @return {undefined}
   */
  // Run code when "onclick" event fires:
  e.onclick = function() 
  {
    // This is in reference to "selectB":
    var selected = this.options[this.selectedIndex]; 
    // Displays Text for Vitamin B (Starting Text)
    if (selected.value == 0)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "The B vitamin family is made up of eight B vitamins. Although they are commonly recognized as a group and often work together in the body, each of the B vitamins performs unique and important functions.";
    }
    // Displays Text for Vitamin B1
    if (selected.value == 1)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B1: Thiamin is needed to produce cellular energy from the foods you eat, and is also required for the synthesis of DNA and RNA. Thiamin is found in a wide variety of foods with some of the best sources coming from lentils, whole grains and pork. Thiamin can also be found in red meats, yeast, nuts, sunflower seeds, peas, milk, cauliflower, spinach and legumes.";
    }
    // Displays Text for Vitamin B2
    if (selected.value == 2)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B2: Riboflavin is a basic building block for normal growth and development. It is needed for healthy cellular energy production and also supports the antioxidant activity in the body. Riboflavin is found in a variety of foods such as fortified cereals, milk, eggs, salmon, beef, spinach and broccoli.";
    }
    // Displays Text for Vitamin B3
    if (selected.value == 3)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B3: Niacin is also known as vitamin B3, and supports over 200 chemical reactions in the body including cellular energy production and fatty acid synthesis. Niacin in the form of nicotinic acid has been studied for its role in cardiovascular health. Good sources of niacin include beef, poultry and fish as well as whole wheat bread, peanuts and lentils.";
    }
    // Displays Text for Vitamin B5
    if (selected.value == 5)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B5: Pantothenic acid helps support fatty acid synthesis and cellular energy production in the body. Pantothenic acid is widely available in plant and animal food sources. Rich sources include organ meats (liver, kidney), egg yolk, whole grains, avocados, cashew nuts, peanuts, lentils, soybeans, brown rice, broccoli, and milk.";
    }
    // Displays Text for Vitamin B6
    if (selected.value == 6)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B6: Involved in over 100 cellular reactions throughout the body, vitamin B6 is instrumental in keeping various bodily functions operating at their best. Vitamin B6, also known as pyridoxine, is needed to metabolize amino acids and glycogen (the body’s storage form of glucose), and is also necessary for normal nervous system, hormone and red blood cell function. Vitamin B6 is fairly abundant in the diet and can be found in foods such as meat, poultry, eggs, bananas, fish, fortified cereal grains and cooked spinach.";
    }
    // Displays Text for Vitamin B7
    if (selected.value == 7)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B7: Biotin is commonly found in foods such as brewer’s yeast, strawberries, organ meat, cheese and soybeans. For those who are biotin deficient, studies show that biotin may help in the health of hair, skin & nails. Biotin also supports healthy carbohydrate, protein and fat metabolism.";
    }
    // Displays Text for Vitamin B9
    if (selected.value == 9)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B9: Folic acid is needed for DNA synthesis, the formation of red blood cells and for the metabolism of amino acids. Folic acid is most commonly known for its role in fetal health and development as it is critical for the formation of a baby’s spinal cord and nervous system. This important developmental process occurs during the initial weeks of pregnancy, and so adequate folic acid intake is especially important for all women of child-bearing age. Fortified foods such as breads and cereals are good dietary sources of folic acid. Other good sources are dark green leafy vegetables such as asparagus and spinach as well as brewer’s yeast, liver, fortified orange juice, beets, dates and avocados.";
    }
    // Displays Text for Vitamin B12
    if (selected.value == 12)
    {
      /** @type {string} */
      document.getElementById("p1").innerHTML = "B12: Cobalamin, plays a critical role in the pathways of the body that produce cellular energy. It is also needed for DNA synthesis, red blood cell formation and for healthy nervous system function. Individuals who follow vegan or vegetarian diets may benefit from a B12 supplement since B12 is predominantly found in foods of animal origin such as chicken, beef, fish, milk and eggs.";
    }
  };
};

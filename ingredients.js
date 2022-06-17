const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let ingredientsWhileList = () => {
  console.log('This is the while list:');
  let i = 0;
  while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
  }
  console.log('\n');
};
// Write a for loop that prints out the contents of ingredients:
 let ingredientsForList = () => {
  console.log('This is the for list:');
  for (let j = 0; j < ingredients.length; j++) {
    console.log(ingredients[j]);
  }
  console.log('\n');
};
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let ingredientsForListRev = () => {
  console.log('This is the for list reversed:');
  for (let k = ingredients.length - 1; k > -1; k--) {
    console.log(ingredients[k]);
  }
};

ingredientsWhileList();
ingredientsForList();
ingredientsForListRev();
// QuerySelectors
// var radioSide = document.querySelector('#side');
// var radioMainDish = document.querySelector('#mainDish');
// var radioDessert = document.querySelector('#dessert');
// var radioEntireMeal = document.querySelector('#entireMeal');
var containerSection = document.querySelector('.container');
var letsCookBtn = document.querySelector('#letsCookButton');


// EvenListener
letsCookBtn.addEventListener('click', displayFood);
containerSection.addEventListener('click', testFunction)


// Buttons








// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function testFunction(event) {
event.preventDefault();
var currentDish;
if (event.target.value === 'sides') {
   currentDish =  sides[getRandomIndex(sides)];

} else if (event.target.value === 'radioMainDish') {
  currentDish = mains[getRandomIndex(mains)];

} else if (event.target.value === 'desserts') {
  currentDish = desserts[getRandomIndex(desserts)];

}else if (event.target.value === 'letsCook') {
  console.log(currentDish);
}
// if sides button is selected when lets cook button is clicked return a random element from the sides array.
// create a currentDish variable to push the random food item given.
// when lets cook is clicked show currentDish
console.log(currentDish);
}

function displayFood(event) {
  event.preventDefault();


  // var sideDishes = sides[getRandomIndex(array)];
  // var mainDishes = mains[getRandomIndex(array)];
  // var dessertDishes = desserts[getRandomIndex(array)];
  console.log(event);
}
// Create a random function which takes in all of the food arrays
// Add an event listener to lets cook button
//link the radio button #id with the value of its type of food  array.
//make the element of the img pot hidden when button is clicked. Then show the random food item.
//

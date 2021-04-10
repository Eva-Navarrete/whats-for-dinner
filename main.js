// QuerySelectors
// var radioSide = document.querySelector('#side');
// var radioMainDish = document.querySelector('#mainDish');
// var radioDessert = document.querySelector('#dessert');
// var radioEntireMeal = document.querySelector('#entireMeal');
var containerSection = document.querySelector('.container');
var letsCookBtn = document.querySelector('#letsCookButton');
var radioBtns = document.getElementsByName('dish');
var potImage = document.querySelector('.cookpot');
var recipeText = document.querySelector('.recipe-text');
var wrapper1 = document.querySelector('.wrapper1');


// EvenListener
letsCookBtn.addEventListener('click', displayFood);
// containerSection.addEventListener('click', testFunction)


// Buttons








// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayFood(event) {
  event.preventDefault();
  var currentDish;
 for (var i = 0; i < radioBtns.length; i++) {
    if(radioBtns[i].checked && radioBtns[i].value ==='sides') {
      currentDish = sides[getRandomIndex(sides)];
       console.log(currentDish);
       getDish(currentDish);
       break;
    } else if (radioBtns[i].checked && radioBtns[i].value === 'mainDish'){
      currentDish = mains[getRandomIndex(mains)];
      console.log(currentDish);
      break;
    } else if (radioBtns[i].checked && radioBtns[i].value === 'desserts'){
      currentDish = desserts[getRandomIndex(desserts)];
      console.log(currentDish);
      break;
    }
 }
}

function getDish(currentDish) {
  potImage.classList.add('hidden');
  recipeText.classList.remove('hidden');
  var p = document.createElement('p');

  p.append(currentDish);
  wrapper1.append(p);


}






// function testFunction(event) {
// event.preventDefault();
// console.log(event.target);
// console.log(event.target.value);
// var currentDish;
// if (event.target.value === 'sides') {
//    currentDish =  sides[getRandomIndex(sides)];
// console.log('sides', currentDish);
// } else if (event.target.value === 'mainDish') {
//   currentDish = mains[getRandomIndex(mains)];
// console.log('mains', currentDish);
// } else if (event.target.value === 'desserts') {
//   currentDish = desserts[getRandomIndex(desserts)];
//
// }else if (event.target.value === 'letsCook') {
//   console.log(currentDish);
// }
// // if sides button is selected when lets cook button is clicked return a random element from the sides array.
// // create a currentDish variable to push the random food item given.
// // when lets cook is clicked show currentDish
// console.log(currentDish);
// }

// function displayFood(event) {
//   event.preventDefault();


  // var sideDishes = sides[getRandomIndex(array)];
  // var mainDishes = mains[getRandomIndex(array)];
  // var dessertDishes = desserts[getRandomIndex(array)];
//   console.log(event);
// }
// Create a random function which takes in all of the food arrays
// Add an event listener to lets cook button
//link the radio button #id with the value of its type of food  array.
//make the element of the img pot hidden when button is clicked. Then show the random food item.
//

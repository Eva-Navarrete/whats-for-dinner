// QuerySelectors
var containerSection = document.querySelector('.container');
var potImage = document.querySelector('.cookpot');
var recipeText = document.querySelector('.recipe-text');
var wrapper1 = document.querySelector('.wrapper1');
var recipeDisplayed = document.querySelector('.recipe-displayed');
var savedViewPage = document.querySelector('.saved-view');
var hideHomeView = document.querySelector('.home-view')
var savedRecipeSection = document.querySelector('.saved-recipes-section')

// Buttons
var letsCookBtn = document.querySelector('#letsCookButton');
var radioBtns = document.getElementsByName('dish');
var favoriteBtn = document.querySelector('#favoriteButton');
var viewSavedBtn = document.querySelector('#viewFavoriteRecipeButton')
var backHomeBtn = document.querySelector('#backHomeButton');
var removeFavoriteBtn = document.querySelector('#removeFavoriteButton');
var favRecipRadioBtn = document.getElementsByName('dish1');

// EvenListener
letsCookBtn.addEventListener('click', displayFood);
favoriteBtn.addEventListener('click', addToFavorite);
viewSavedBtn.addEventListener('click', displaySavedRecipe);
backHomeBtn.addEventListener('click', displayHomePage);
removeFavoriteBtn.addEventListener('click', removeFavoriteDish);






// Functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayFood(event) {
  event.preventDefault();
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked && radioBtns[i].value === 'sides') {
      currentDish = sides[getRandomIndex(sides)];
      getDish(currentDish);
      break;
    } else if (radioBtns[i].checked && radioBtns[i].value === 'mainDish') {
      currentDish = mains[getRandomIndex(mains)];
      break;
    } else if (radioBtns[i].checked && radioBtns[i].value === 'desserts') {
      currentDish = desserts[getRandomIndex(desserts)];
      getDish(currentDish);
      break;
    }
  }
}

function getDish(currentDish) {
  potImage.classList.add('hidden');
  recipeText.classList.remove('hidden');
  recipeDisplayed.classList.remove('hidden');
  favoriteBtn.classList.remove('hidden');
  recipeDisplayed.innerText = currentDish;

}

function addToFavorite() {
  if (!favoriteDish.includes(currentDish)) {
    favoriteDish.push(currentDish);
  }

}

function displaySavedRecipe() {

  savedViewPage.classList.remove('hidden');
  hideHomeView.classList.add('hidden');
  backHomeBtn.classList.remove('hidden');
  viewSavedBtn.classList.add('hidden');
  removeFavoriteBtn.classList.remove('hidden')
  for (var i = 0; i < favoriteDish.length; i++) {
    savedRecipeSection.innerHTML +=
      `<div class="fav-recipe-list" id="recipeList">
    <input type="radio" class="fav-dish" id="faveDish-${i}" name="dish1" value="${favoriteDish[i]}"></input>
    <label for="${favoriteDish[i]}">${favoriteDish[i]}</label>
  </div>
 `


  }

}

function displayHomePage() {
  savedViewPage.classList.add('hidden');
  hideHomeView.classList.remove('hidden');
  viewSavedBtn.classList.remove('hidden');
  backHomeBtn.classList.add('hidden');

}

function removeFavoriteDish() {
  for (var i = 0; i < favoriteDish.length; i++) {
    if (favRecipRadioBtn[i].checked) {
      document.getElementById('recipeList').remove();
      favoriteDish.splice(i, 1);

    }
  }
}

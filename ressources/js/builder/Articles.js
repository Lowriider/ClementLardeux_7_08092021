'use strict';

export default class ArticleTemplate {
    
     static displayRecipes(recipesArray) {
        recipesArray.forEach((item, index) => {
            let template = `
                        <div class="recipes__image">
                        </div>
                        <div class="recipes__text">
                        <div class="recipes__title">
                        <h2 class="recipes__name">${item.name}</h2>
                        <i class="far fa-clock"></i>
                        <span class="recipes__duration">${item.time} min</span>
                        </div>
                        <div class='recipes__infos'>
                        <div class="recipes__ingredients"></div>
                        <div class="recipes__instructions">
                        <span>${item.description}</span>
                        </div>
                        </div>
                        </div>`;
            let recipesArticle = document.createElement('article');
            recipesArticle.className = 'recipes__article';
            document.querySelector('.recipes').appendChild(recipesArticle);
            recipesArticle.innerHTML = template;
            let divIngredients = Array.from(document.querySelectorAll('.recipes__ingredients'));
            item.ingredients.forEach(ingredients => {
                if(ingredients.quantity === undefined) {
                    let newEl = `<p>${ingredients.ingredient}</p>`
                    divIngredients[index].innerHTML += newEl;
                }
                else if(ingredients.unit === undefined) {
                    let newEl = `<p>${ingredients.ingredient} :${ingredients.quantity}</p>`;
                    divIngredients[index].innerHTML += newEl;
                }
                else {
                    let newEl = `<p>${ingredients.ingredient} :${ingredients.quantity} ${ingredients.unit} </p>`
                    divIngredients[index].innerHTML += newEl;
                }
            });
        });
    }
}
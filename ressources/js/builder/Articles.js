'use strict';

export default class ArticleTemplate {
    
     static displayRecipes(recipesArray) {
        recipesArray.forEach((item, index) => {
            let template = `
                        <svg class="recipes__image" width="380" height="178" viewBox="0 0 380 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5C0 2.23858 2.23858 0 5 0H375C377.761 0 380 2.23858 380 5V178H0V5Z" fill="#C7BEBE"/>
                        </svg>
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
                console.log(ingredients.quantity)
                if(ingredients.quantity || ingredients.unit === undefined) {
                    let newEl = `<p>${ingredients.ingredient}</p>`
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
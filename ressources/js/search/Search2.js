'use strict';
import ArticleTemplate from "../builder/Articles.js";

export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchInput = document.querySelector(".search__bar");
        this.searchInput.addEventListener('keyup', this.checkIfExists.bind(this))

    }
    searchRender(result) {
        if (result.length > 0) {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result__text').innerText = `${result.length} recette(s) correspond(ent) à votre recherche`;
            document.querySelector('.recipes').innerHTML = "";
            new ArticleTemplate().displayRecipes(result);
        } else {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result').style.backgroundColor = 'rgb(255, 233, 165)';
            document.querySelector('.search-result__text').innerText = `Aucune recette ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
        }
    }

    checkIfExists() {
        let input = this.searchInput.value.toLowerCase();
        let result = [];
        
        if (this.searchInput.value.length > 2) {
            this.recipes.forEach(recipes => {
                recipes.ingredients.forEach(ingredients => {
                    if (ingredients.ingredient.includes(input)) {
                        if (!result.includes(recipes)) {
                            result.push(recipes)
                        }
                    }
                });
                if (recipes.name.includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
                if (recipes.description.includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
            });
        }
        this.searchRender(result);
    }
}
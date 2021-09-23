'use strict';
import ArticleTemplate from "../builder/Articles.js";

export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchInput = document.querySelector(".search__bar");
        this.searchInput.addEventListener('keyup', this.checkIfInputExists.bind(this))

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

    checkIfInputExists() {
        let input = this.searchInput.value.toLowerCase();
        let result = [];
        
        if (input.value.length > 2) {
            this.recipes.forEach(recipes => {
                recipes.ingredients.forEach(ingredients => {
                    if (ingredients.ingredient.toLowerCase().includes(input)) {
                        if (!result.includes(recipes)) {
                            result.push(recipes)
                        }
                    }
                });
                if (recipes.name.toLowerCase().includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
                if (recipes.description.toLowerCase().includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
            });
        }
        this.searchRender(result);
    }
    checkIfTagExists(tag) {

        let result = [];
        if (tag.length > 0) {
            this.recipes.forEach(recipes => {
                recipes.ingredients.forEach(ingredients => {
                    if (ingredients.ingredient.toLowerCase().includes(tag)) {
                        if (!result.includes(recipes)) {
                            result.push(recipes)
                        }
                    }
                });
                if (recipes.appliance.toLowerCase().includes(tag)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
                recipes.ustensils.forEach(ustensils => {
                if (ustensils.toLowerCase().includes(tag)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
            });
            this.searchRender(result);
        }
    }
}
'use strict';
import ArticleTemplate from "../builder/Articles.js";

export default class Search {
    constructor(recipes, ingredients) {
        this.recipes = recipes;
        this.recipesIngredients = ingredients;
        this.recipesName = [];
        this.recipesDesc = [];
        this.recipes.forEach(item => {
            this.recipesName.push(item.name)
            this.recipesDesc.push(item.description)
        });
        this.searchInput = document.querySelector(".search__bar");

        this.searchInput.addEventListener('keyup',this.algo.bind(this))
       
    }
    algo() {
        if(this.searchInput.value.length > 2) {
            let input = this.searchInput.value.toLowerCase();
            let recipesFound = this.recipesName.filter(x => x.toLowerCase().includes(input));
            let ingredientsFound = this.recipesIngredients.filter(y => y.toLowerCase().includes(input))
            let descFound = this.recipesDesc.filter(z => z.toLowerCase().includes(input))

            this.searchRender(this.checkIfExists(recipesFound, ingredientsFound, descFound));
        }
        else {
            console.log('need more char');
        }
    }
    searchRender(result) {
    
        if(result.length > 0) {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result__text').innerText = `${result.length} recette(s) correspond(ent) à votre recherche`;
            document.querySelector('.recipes').innerHTML = "";
            new ArticleTemplate().displayRecipes(result);
        }
        else {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result').style.backgroundColor = 'rgb(255, 233, 165)';
            document.querySelector('.search-result__text').innerText = `Aucune recette ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
        }
    }
    checkIfExists(recipesFound, ingredientsFound, descFound) {
        let result = [];
        this.recipes.forEach(recipes => {
            recipes.ingredients.forEach(ingredients => {
                 ingredientsFound.forEach(ingreFound => {
                     if(ingredients.ingredient.includes(ingreFound)) {
                         if(!result.includes(recipes)) {
                             result.push(recipes)
                         }
                     }
                 });
             });
             recipesFound.forEach(foundOne => {
                 if(recipes.name.includes(foundOne)) {
                     if(!result.includes(recipes)) {
                         result.push(recipes)
                     }
                 }
             });
             descFound.forEach(descFound => {
                 if(recipes.description.includes(descFound)) {
                     if(!result.includes(recipes)) {
                         result.push(recipes)
                     }
                 }
             });
         });
         console.log(result.length)
         return result;
    }
}
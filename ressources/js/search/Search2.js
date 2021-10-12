'use strict';
import ArticleTemplate from "../builder/Articles.js";
import Buttons from "../builder/Buttons.js";
import Tags from "../builder/Tags.js";

export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchInput = document.querySelector(".search__bar");
        this.searchInput.addEventListener('keyup', this.checkIfInputExists.bind(this))
    }
    searchRender(result, ingredientsArray, ustensilsArray, devicesArray) {
        if (result.length > 0) {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result__text').innerText = `${result.length} recette(s) correspond(ent) à votre recherche`;
            document.querySelector('.recipes').innerHTML = "";
            ArticleTemplate.displayRecipes(result);
            Buttons.closeList(ingredientsArray, ustensilsArray, devicesArray);
            Buttons.displayButtons(ingredientsArray, ustensilsArray, devicesArray);
            new Tags(this.recipes);
            console.timeEnd('test');
        } else {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result').style.backgroundColor = 'rgb(255, 233, 165)';
            document.querySelector('.search-result__text').innerText = `Aucune recette ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
        }
    }

    checkIfInputExists() {
        let input = this.searchInput.value.toLowerCase();
        let result = [];

        if (input.length > 2) {
            console.time('test');
            for (let i = 0; i < this.recipes.length; i++) {
                for (let j = 0; j < this.recipes[i].ingredients.length; j++) {

                    if (this.recipes[i].ingredients[j].ingredient.toLowerCase().includes(input)) {
                        if (!result.includes(this.recipes[i])) {
                            result.push(this.recipes[i]);
                        }
                    }
                }
                if (this.recipes[i].name.toLowerCase().includes(input)) {
                    if (!result.includes(this.recipes[i])) {
                        result.push(this.recipes[i]);
                    }
                }
                if (this.recipes[i].description.toLowerCase().includes(input)) {
                    if (!result.includes(this.recipes[i])) {
                        result.push(this.recipes[i]);
                    }
                }
            }
            this.newArray(result);
        }
        if(input.length === 0 ) {
            document.querySelector('.recipes').innerHTML = "";
            ArticleTemplate.displayRecipes(recipes);
        }
    }
    checkIfTagExists(tag) {

        let result = [];
        if (tag.length > 0) {
            console.time('test');
            for (let i = 0; i < this.recipes.length; i++) {
                for (let j = 0; j < this.recipes[i].ingredients.length; j++) {
                    if (this.recipes[i].ingredients[j].ingredient.toLowerCase().includes(tag)) {
                        if (!result.includes(this.recipes[i])) {
                            result.push(this.recipes[i])
                        }
                    }
                }
                if (this.recipes[i].appliance.toLowerCase().includes(tag)) {
                    if (!result.includes(this.recipes[i])) {
                        result.push(this.recipes[i])
                    }
                }
                for (let h = 0; h < this.recipes[i].ustensils.length; h++) {
                    if (this.recipes[i].ustensils.toLowerCase().includes(tag)) {
                        if (!result.includes(this.recipes[i])) {
                            result.push(this.recipes[i])
                        }
                    }
                }
                this.newArray(result);
            }
        }
    }
    newArray(result) {
       let newIngredientsArray = [];
       let newUstensilsArray = [];
       let newDevicesArray = [];

       result.forEach(item => {
           item.ingredients.forEach(ingredients => {
               if (!newIngredientsArray.includes(ingredients.ingredient.toLowerCase())) {
                    newIngredientsArray.push(ingredients.ingredient.toLowerCase());
               }
           });
           item.ustensils.forEach(ustensils => {
               if (!newUstensilsArray.includes(ustensils.toLowerCase())) {
                   newUstensilsArray.push(ustensils.toLowerCase());
               }
           })
           if (!newDevicesArray.includes(item.appliance.toLowerCase())) {
               newDevicesArray.push(item.appliance.toLowerCase());
           }
       });
       this.searchRender(result, newIngredientsArray, newUstensilsArray, newDevicesArray); 
   }

}
'use strict';
import ArticleTemplate from "../builder/Articles.js";
import Buttons from "../builder/Buttons.js";
import Tags from "../builder/Tags.js";

export default class Search {
    constructor(recipes, ingredientsArray, devicesArray, ustensilsArray) {
        this.ingredientsArray = ingredientsArray;
        this.devicesArray =devicesArray;
        this.ustensilsArray = ustensilsArray;
        this.recipes = recipes;
        this.searchInput = document.querySelector(".search__bar");
        this.searchInput.addEventListener('keyup', this.checkInput.bind(this))
    }
    searchRender(result, newIngredientsArray, newUstensilsArray, newDevicesArray) {
        if (result.length > 0) {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result__text').innerText = `${result.length} recette(s) correspond(ent) à votre recherche`;
            document.querySelector('.recipes').innerHTML = "";
            ArticleTemplate.displayRecipes(result);
            Buttons.closeList(result, newIngredientsArray, newUstensilsArray, newDevicesArray);
            Buttons.fillLists( newIngredientsArray, newUstensilsArray, newDevicesArray);
            new Tags(this.recipes, this.ingredientsArray, this.devicesArray, this.ustensilsArray);

        } else {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result').style.backgroundColor = 'rgb(255, 233, 165)';
            document.querySelector('.search-result__text').innerText = `Aucune recette ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
        }
    }

    checkInput() {
        let input = this.searchInput.value.toLowerCase();
        let result = [];

        if (input.length > 2) {
           
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
    }
    checkIfRecipeExists(tag) {
        let input = this.searchInput.value.toLowerCase();
        let result = [];
        if (tag.length > 0) {

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

                    if (this.recipes[i].ustensils[h].toLowerCase().includes(tag)) {
                        if (!result.includes(this.recipes[i])) {
                            result.push(this.recipes[i])
                        }
                    }
                }
                this.newArray(result);
            }
        } else {
            this.CheckInput();
            if (input.length === input.length - 1 && input.length > 2) {
                this.CheckInput();
            }   
            else if(input.length === 0) {
                document.querySelector('.recipes').innerHTML = "";
                ArticleTemplate.displayRecipes(recipes);
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
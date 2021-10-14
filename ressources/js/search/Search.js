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
        this.searchInput.addEventListener('keyup', this.checkIfInputExists.bind(this))
    }

   searchRender(result, newIngredientsArray, newUstensilsArray, newDevicesArray) {
        if (result.length > 0) {
            document.querySelector('.search-result').style.display = 'flex';
            document.querySelector('.search-result__text').innerText = `${result.length} recette(s) correspond(ent) à votre recherche`;
            document.querySelector('.recipes').innerHTML = "";
            ArticleTemplate.displayRecipes(result);
            Buttons.closeList(result ,newIngredientsArray, newUstensilsArray, newDevicesArray);
            Buttons.displayButtons(newIngredientsArray, newUstensilsArray, newDevicesArray);
            new Tags(this.recipes, this.ingredientsArray, this.devicesArray, this.ustensilsArray);
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
            
            this.recipes.forEach(recipes => {
                recipes.ingredients.filter(function (y) {
                    if (y.ingredient.toLowerCase().includes(input)) {
                        if (!result.includes(recipes)) {
                            result.push(recipes)
                        }
                    }
                })
            });
            recipes.filter(function (y) {
                if (y.name.toLowerCase().includes(input)) {
                    if (!result.includes(y)) {
                        result.push(y)
                    }
                }

            });
            recipes.filter(function (y) {
                if (y.description.toLowerCase().includes(input)) {
                    if (!result.includes(y)) {
                        result.push(y)
                    }
                }
            });
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
            this.recipes.forEach(recipes => {
                recipes.ingredients.filter(function (y) {
                    if (y.ingredient.toLowerCase().includes(tag)) {
                        if (!result.includes(recipes)) {
                            result.push(recipes)
                        }
                    }
                });
                recipes.ustensils.filter(function (y) {
                    if (y.toLowerCase().includes(tag)) {
                        if (!result.includes(recipes)) {
                            result.push(recipes)
                        }
                    }
                })
                if (recipes.appliance.toLowerCase().includes(tag)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes)
                    }
                }
            });
            this.newArray(result);
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

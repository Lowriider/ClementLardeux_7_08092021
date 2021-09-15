'use strict';

export default class GetData {

    async getData(recipes) {
        let ingredientsArray = [];
        let ustensilsArray = [];
        let devicesArray = [];
        let recipesArray = [];

        recipes.forEach(item => {
            recipesArray.push(item);
            item.ingredients.forEach(ingredients => {
                if (!ingredientsArray.includes(ingredients.ingredient.toLowerCase())) {
                    ingredientsArray.push(ingredients.ingredient.toLowerCase());
                }
                return ingredientsArray;
            });
            item.ustensils.forEach(ustensils => {
                if (!ustensilsArray.includes(ustensils.toLowerCase())) {
                    ustensilsArray.push(ustensils.toLowerCase());
                }
                return ustensilsArray;
            })
            if (!devicesArray.includes(item.appliance.toLowerCase())) {
                devicesArray.push(item.appliance.toLowerCase());
            }
        });

        return {
            'recipesArray':recipesArray,
            'devicesArray':devicesArray,
            'ustensilsArray':ustensilsArray,
            'ingredientsArray':ingredientsArray
        };
    }
}
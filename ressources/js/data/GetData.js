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
                if (!ingredientsArray.includes(ingredients.ingredient)) {
                    ingredientsArray.push(ingredients.ingredient);
                }
                return ingredientsArray;
            });
            item.ustensils.forEach(ustensils => {
                if (!ustensilsArray.includes(ustensils)) {
                    ustensilsArray.push(ustensils);
                }
                return ustensilsArray;
            })
            if (!devicesArray.includes(item.appliance)) {
                devicesArray.push(item.appliance);
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
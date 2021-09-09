'use strict';

export default class Utils {
    constructor(ingredientsArray,devicesArray,ustensilsArray) {
        this.ingredientList = document.querySelectorAll('.list__ul');
        this.displayUtils(ingredientsArray,devicesArray,ustensilsArray);
    }
    displayUtils(ingredientsArray,devicesArray,ustensilsArray) {
        
        this.ingredientList.forEach((list, index) => {

            if(index === 0) {
                ingredientsArray.forEach(ingredients => {
                    let newLi = document.createElement('li');
                    list.appendChild(newLi)
                    newLi.innerHTML = ingredients;
                });
            }
            else if(index === 1) {
                devicesArray.forEach(devices => {
                    let newLi = document.createElement('li');
                    list.appendChild(newLi)
                    newLi.innerHTML = devices;
                });
            }
            else if(index === 2) {
                ustensilsArray.forEach(ustensils => {
                    let newLi = document.createElement('li');
                    list.appendChild(newLi)
                    newLi.innerHTML = ustensils;
                });
            }
            else {}
        })
    }
}
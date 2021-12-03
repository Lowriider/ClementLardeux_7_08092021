'use strict';
import Buttons from "../builder/Buttons.js";
export default class ListSearch {
    constructor(ingredientsArray, devicesArray, ustensilsArray) {
        this.inputList = document.querySelectorAll('.list__input input');
        this.inputList.forEach(input => {
            input.addEventListener('keyup', () => {
                if (input.value.length > 2) {
                    let ul =  Array.from(document.querySelectorAll('.list__ul.active'))[0];
                    this.filterList(input, ul);
                }
                if (input.value.length === input.value.length - 1 && input.value.length > 2) {
                    let ul =  Array.from(document.querySelectorAll('.list__ul.active'))[0];
                    this.filterList(input, ul);
                }   
                else if(input.value.length === 0) {
                    Buttons.fillLists(ingredientsArray, devicesArray, ustensilsArray);
                }
            });
        });
    }
    filterList(input, ul) {
        ul.childNodes.forEach(child => {
            if (!child.innerHTML.includes(input.value.toLowerCase())) {
                child.className = 'hide';
                child.style.display = 'none';
            }
            else {
                child.classList.remove('hide');
                child.style.display ='block';
            }
        });
    }
    
}
'use strict';

import Tags from "./Tags.js";
import ListSearch from "../search/ListSearch.js";

export default class Buttons {
    constructor(ingredientsArray, devicesArray, ustensilsArray, recipesArray) {

        document.querySelectorAll('.list__arrow').forEach(button => button.addEventListener('click', function(e) {
            Buttons.closeList(recipesArray, ingredientsArray, ustensilsArray, devicesArray);
            Buttons.fillLists(ingredientsArray, devicesArray, ustensilsArray);
            new Tags(recipesArray, ingredientsArray, devicesArray, ustensilsArray);

        }));

        Buttons.fillLists(ingredientsArray, devicesArray, ustensilsArray);
        Buttons.displayList(recipesArray, ingredientsArray, ustensilsArray, devicesArray);
        new ListSearch(ingredientsArray, devicesArray, ustensilsArray);
    }

    static fillLists(ingredientsArray, devicesArray, ustensilsArray) {
        document.querySelectorAll('.list__ul').forEach((list, index) => {
            if (index === 0) {
                ingredientsArray.forEach(ingredients => {
                    let newLi = document.createElement('li');
                    list.appendChild(newLi)
                    newLi.innerHTML = ingredients;
                });
            } else if (index === 1) {
                devicesArray.forEach(devices => {
                    let newLi = document.createElement('li');
                    list.appendChild(newLi)
                    newLi.innerHTML = devices;
                });
            } else if (index === 2) {
                ustensilsArray.forEach(ustensils => {
                    let newLi = document.createElement('li');
                    list.appendChild(newLi)
                    newLi.innerHTML = ustensils;
                });
            } else {}
        });
    }

    static displayList() {
        document.querySelectorAll('.list__text').forEach(button => button.addEventListener('click', function (e) {
                button.style.display = "none";
                button.parentElement.children[1].style.display = "none";
                button.parentElement.children[2].style.display = 'flex';
                e.target.parentElement.classList.add('active');
                e.target.parentElement.lastElementChild.children[1].children[0].classList.add('active');
        }));

    }
    static closeList(recipesArray, ingredientsArray, ustensilsArray, devicesArray) {

        document.querySelectorAll('.list__hidden').forEach(hidden => hidden.style.display = 'none')
        Array.from(document.querySelectorAll('.list')[0].children).forEach(button => {
            button.style.width = null;
            button.classList.remove('active')
        });
        document.querySelectorAll('.list__arrow--down').forEach(arrow => arrow.style.display = 'block');
        document.querySelectorAll('.list__text').forEach(input => input.style.display = 'block');
        document.querySelectorAll('.list__ul').forEach(list => list.innerHTML = '');
        document.querySelectorAll('.list__ul').forEach(list => list.classList.remove('active'));
        document.querySelectorAll('.list__input input').forEach(input => {
            input.value = '';
        })
        new Tags(recipesArray, ingredientsArray, devicesArray, ustensilsArray);
    }

}
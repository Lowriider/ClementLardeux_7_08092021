'use strict';

import Tags from "./Tags.js";
import ListSearch from "../search/ListSearch.js";

export default class Buttons {
    constructor(ingredientsArray, devicesArray, ustensilsArray, recipesArray) {
        this.ingredientsArray = ingredientsArray;
        this.devicesArray = devicesArray;
        this.ustensilsArray = ustensilsArray;
        this.recipesArray = recipesArray;
        this.ingredientList = document.querySelectorAll('.list__ul');
        this.buttons = document.querySelectorAll('.list__text');
        this.hidden = document.querySelectorAll('.list__hidden');
        this.closeButton = document.querySelectorAll('.list__arrow');

        document.querySelectorAll('.list__arrow').forEach(button => button.addEventListener('click', function(e) {
            button.offsetParent.style.display = "none";
            e.path[3].style.width = "170px";
            e.path[3].children[0].style.display = "block";
            e.path[3].children[1].style.display = "block";
            e.target.parentElement.nextElementSibling.children[0].classList.remove('active');
            e.target.parentElement.children[0].value = '';
            document.querySelectorAll('.list__ul').forEach(list => list.innerHTML = '')
            Buttons.displayButtons(ingredientsArray, devicesArray, ustensilsArray);
            Buttons.displayList();
            new Tags(recipesArray, ingredientsArray, devicesArray, ustensilsArray);
        }.bind(this)));

        Buttons.displayButtons(ingredientsArray, devicesArray, ustensilsArray);
        Buttons.displayList(recipesArray, ingredientsArray, ustensilsArray, devicesArray);
        new ListSearch();
    }
    static closeButton = document.querySelectorAll('.list__arrow');

    static displayButtons(ingredientsArray, devicesArray, ustensilsArray) {
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
            if (button.parentElement.className === "list__buttons--blue") {
                button.parentElement.style.width = '45rem';
                button.style.display = "none";
                button.parentElement.children[1].style.display = "none";
                button.parentElement.children[2].style.display = 'block';
                e.target.parentElement.lastElementChild.children[1].children[0].classList.add('active');

            } else {
                button.parentElement.style.width = '15rem';
                button.style.display = "none";
                button.parentElement.children[1].style.display = "none";
                button.parentElement.children[2].style.display = 'block';
                e.target.parentElement.lastElementChild.children[1].children[0].classList.add('active');
            }
        }));

    }
    static closeList(recipesArray, ingredientsArray, ustensilsArray, devicesArray) {
        document.querySelectorAll('.list__hidden').forEach(hidden => hidden.style.display = 'none')
        Array.from(document.querySelectorAll('.list')[0].children).forEach(buttons => buttons.style.width = '170px');
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
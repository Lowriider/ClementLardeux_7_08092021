import ListSearch from "../search/ListSearch.js";
'use strict';

export default class Buttons {
    constructor(ingredientsArray, devicesArray, ustensilsArray) {
        this.ingredientList = document.querySelectorAll('.list__ul');
        this.buttons = document.querySelectorAll('.list__text')
        this.hidden = document.querySelectorAll('.list__hidden');
        this.closeButton = document.querySelectorAll('.list__arrow');

        this.closeButton.forEach(button => button.addEventListener('click', function() {
            button.offsetParent.style.display = "none";
            e.path[3].style.width = "170px";
            e.path[3].children[0].style.display = "block";
            e.path[3].children[1].style.display = "block";
        }.bind(this)));
        this.buttons.forEach(button => button.addEventListener('click', function(e) {
            if (button.parentElement.className === "list__buttons--blue") {
                button.parentElement.style.width = '45rem';
                button.style.display = "none";
                button.parentElement.children[1].style.display = "none";
                button.parentElement.children[2].style.display = 'block';
                console.log(e.target.parentElement.lastElementChild.children[1].children[0].classList.add('.active'))
                e.target.parentElement.lastElementChild.children[1].children[0].classList.add('.active')
            } else {
                button.parentElement.style.width = '15rem';
                button.style.display = "none";
                button.parentElement.children[1].style.display = "none";
                button.parentElement.children[2].style.display = 'block'

            }
        }.bind(this)));

    }
    displayUtils(ingredientsArray, devicesArray, ustensilsArray) {
        this.ingredientList.forEach((list, index) => {
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
        })
        new ListSearch();
    }
    displayHidden() {
        document.querySelector('.list__text').style.display = "none";
        document.querySelector('.list__arrow--down').style.display = "none";
    }

}
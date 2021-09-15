'use strict';

export default class Buttons {
    constructor(ingredientsArray,devicesArray,ustensilsArray) {
        this.ingredientList = document.querySelectorAll('.list__ul');
        this.blueButton = document.querySelector('.list__buttons--blue');
        this.greenButton = document.querySelector('.list__buttons--green');
        this.redButton =  document.querySelector('.list__buttons--red');
        this.hidden = document.querySelectorAll('.list__hidden');
        this.blueButton.addEventListener('click', () => {
            this.blueButton.style.width = '35rem';
            document.querySelector('.list__buttons--blue .list__text').style.display = "none";
            document.querySelector('.list__buttons--blue .list__arrow--down').style.display = "none";
           this.hidden[0].style.display = "block";
        })
        this.greenButton.addEventListener('click', () => {
            this.greenButton.style.width = '15rem';
            document.querySelector('.list__buttons--green .list__text').style.display = "none";
            document.querySelector('.list__buttons--green .list__arrow--down').style.display = "none";
           this.hidden[1].style.display = "block";
        })
        this.redButton.addEventListener('click', () => {
            this.redButton.style.width = '15rem';
            document.querySelector('.list__buttons--red .list__text').style.display = "none";
            document.querySelector('.list__buttons--red .list__arrow--down').style.display = "none";
           this.hidden[2].style.display = "block";
        })
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
    displayHidden() {
        document.querySelector('.list__text').style.display = "none";
        document.querySelector('.list__arrow--down').style.display = "none";
    }

}
'use strict';
import Search from "../search/search.js";
import ArticleTemplate from "./Articles.js";
import Buttons from "./Buttons.js";

export default class Tags {
    constructor(recipesArray, ingredientsArray, devicesArray, ustensilsArray) {
        this.tagsList = document.querySelector('.tags')
        this.tags = document.querySelectorAll('.tags li');
        this.li = document.querySelectorAll('.list__ul li');
        this.activeTag;

        // SELECT ITEM IN LIST EVENT //
        this.li.forEach(list => list.addEventListener('click', () => {
            this.tagsList.style.display = 'flex';
            console.log(list)
            if (list.offsetParent.lastElementChild.className === "list__list--ingredients") {
                this.tags[0].style.display = 'flex';
                this.tags[0].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[0].childNodes[0].innerHTML;
                console.log("SelectTag")
                new Search(recipes).checkIfTagExists(this.activeTag, recipesArray);
                // Buttons.closeList();

                // CALL STATIC FUNCTION CLOSE ALL BUTTONS AFTER ITEM SELECTED // 

            } 
            else if (list.offsetParent.lastElementChild.className === "list__list--devices") {
                this.tags[1].style.display = 'flex';
                this.tags[1].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[1].childNodes[0].innerHTML;
                new Search(recipes).checkIfTagExists(this.activeTag, recipesArray);
                console.log("SelectTag")
                // CALL STATIC FUNCTION CLOSE ALL BUTTONS AFTER ITEM SELECTED // 
                
                // Buttons.closeList();
            }
            else if (list.offsetParent.lastElementChild.className === "list__list--ustensils") {
                this.tags[2].style.display = 'flex';
                this.tags[2].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[2].childNodes[0].innerHTML;
                new Search(recipes).checkIfTagExists(this.activeTag, recipesArray);
                console.log("SelectTag")
                // CALL STATIC FUNCTION CLOSE ALL BUTTONS AFTER ITEM SELECTED // 
                
                // Buttons.closeList();
            }
            else {}

            let closeButton = document.querySelectorAll('.tags__close');

            //                  CLOSE TAG EVENT              //

            closeButton.forEach(button => button.addEventListener('click', () => {
                console.log('closebuttonTag')
                button.parentElement.style.display = 'none';
                document.querySelector('.search-result').style.display = 'none';
                document.querySelector('.recipes').innerHTML = "";
                ArticleTemplate.displayRecipes(recipesArray);
                Buttons.displayButtons(ingredientsArray, ustensilsArray, devicesArray);
                new Tags(recipesArray, ingredientsArray, devicesArray, ustensilsArray)
            }));
        }));
    }
}
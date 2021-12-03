'use strict';
import Search from "../search/Search2.js";
import ArticleTemplate from "./Articles.js";
import Buttons from "./Buttons.js";

export default class Tags {
    constructor(recipesArray, ingredientsArray, devicesArray, ustensilsArray) {
        this.tagsList = document.querySelector('.tags')
        this.tags = document.querySelectorAll('.tags li');
        this.li = document.querySelectorAll('.list__ul li');
        this.activeTag;

        // SELECT ITEM IN LIST EVENT //
        this.li.forEach(list => list.addEventListener('click', (e) => {
            console.log('ok')
            this.tagsList.style.display = 'flex';
            if (e.path[2].className === "list__list--ingredients") {
                this.tags[0].style.display = 'flex';
                this.tags[0].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[0].childNodes[0].innerHTML;
                new Search(recipes, ingredientsArray, devicesArray, ustensilsArray).checkIfRecipeExists(this.activeTag);
            } 
            else if (e.path[2].className === "list__list--devices") {
                this.tags[1].style.display = 'flex';
                this.tags[1].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[1].childNodes[0].innerHTML;
                new Search(recipes, ingredientsArray, devicesArray, ustensilsArray).checkIfRecipeExists(this.activeTag);
            }
            else if (e.path[2].className === "list__list--ustensils") {
                this.tags[2].style.display = 'flex';
                this.tags[2].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[2].childNodes[0].innerHTML;
                new Search(recipes, ingredientsArray, devicesArray, ustensilsArray).checkIfRecipeExists(this.activeTag);
            }
            else {}

            let closeButton = document.querySelectorAll('.tags__close');

            //                  CLOSE TAG EVENT              //

            closeButton.forEach(button => button.addEventListener('click', () => {
                button.parentElement.style.display = 'none';
                document.querySelector('.search-result').style.display = 'none';
                document.querySelector('.recipes').innerHTML = "";
                ArticleTemplate.displayRecipes(recipesArray);
                document.querySelectorAll('.list__ul').forEach(list => list.innerHTML = "")
                Buttons.fillLists(ingredientsArray, ustensilsArray, devicesArray);
                new Tags(recipesArray, ingredientsArray, devicesArray, ustensilsArray);
            }));
        }));
    }
}
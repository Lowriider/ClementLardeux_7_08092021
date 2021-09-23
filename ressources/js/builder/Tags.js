'use strict';
import Search from "../search/search.js";
import ArticleTemplate from "./Articles.js";

export default class Tags {
    constructor(recipesArray) {
        this.tagsList = document.querySelector('.tags')
        this.tags = document.querySelectorAll('.tags li');
        this.li = document.querySelectorAll('.list__ul li');
        this.activeTag;

        this.li.forEach(list => list.addEventListener('click', () => {
            this.tagsList.style.display = 'flex';
            if (list.offsetParent.lastElementChild.className === "list__list--ingredients") {
                this.tags[0].style.display = 'flex';
                this.tags[0].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[0].childNodes[0].innerHTML;
                new Search(recipes).checkIfTagExists(this.activeTag, recipesArray)
            } else if (list.offsetParent.lastElementChild.className === "list__list--devices") {
                this.tags[1].style.display = 'flex';
                this.tags[1].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[1].childNodes[0].innerHTML;
                new Search(recipes).checkIfTagExists(this.activeTag, recipesArray)

            } else if (list.offsetParent.lastElementChild.className === "list__list--ustensils") {
                this.tags[2].style.display = 'flex';
                this.tags[2].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
                this.activeTag = this.tags[2].childNodes[0].innerHTML;
                new Search(recipes).checkIfTagExists(this.activeTag,)
            } else {}

            let closeButton = document.querySelectorAll('.tags__close');

            closeButton.forEach(button => button.addEventListener('click', () => {
                button.parentElement.style.display = 'none';
                document.querySelector('.search-result').style.display = 'none';
                new ArticleTemplate().displayRecipes(recipesArray);
            }));
        }));
    }
}
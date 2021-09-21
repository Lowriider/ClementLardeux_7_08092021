'use strict';

export default class Tags {
    constructor() {
        this.tagsList = document.querySelector('.tags')
        this.tags = document.querySelectorAll('.tags li');
        this.li = document.querySelectorAll('.list__ul li');
        
        this.li.forEach(list => list.addEventListener('click', () => {
            this.tagsList.style.display = 'flex';
            if(list.offsetParent.lastElementChild.className === "list__list--ingredients") {
                this.tags[0].style.display = 'flex';
                this.tags[0].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
            }
            else if(list.offsetParent.lastElementChild.className === "list__list--devices"){
                this.tags[1].style.display = 'flex';
                this.tags[1].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
            }
            else if(list.offsetParent.lastElementChild.className === "list__list--ustensils"){
                this.tags[2].style.display = 'flex';
                this.tags[2].innerHTML = `<p>${list.innerHTML}</p><i class="far fa-times-circle tags__close"></i>`;
            }
            else {
                
            }
            let closeButton = document.querySelectorAll('.tags__close');
            closeButton.forEach(button => button.addEventListener('click', () => {
               button.parentElement.style.display = 'none';
            }))
        }));
    }
}
'use strict';

export default class ListSearch {
    constructor() {
        this.inputList = document.querySelectorAll('.list__input input');
        this.inputList.forEach(input => {
            input.addEventListener('keyup', () => {
                if (input.value.length > 2) {
                    let ul =  Array.from(document.querySelectorAll('.list__ul.active'))[0];
                    this.filterList(input, ul);
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
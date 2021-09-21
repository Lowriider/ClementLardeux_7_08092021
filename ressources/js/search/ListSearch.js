
'use strict';

export default class ListSearch {
    constructor() {
        this.buttons = document.querySelector('.list').children;
        this.inputList = document.querySelectorAll('.list__input input');
        this.getList();
        this.inputList.forEach(input => {
            input.addEventListener('keyup', () => {
                if (input.value.length > 2) {
                    this.filterList(input)
                }
            })
        })
    }
    getList() {
        this.buttons.forEach(button => button.addEventListener('click', (e) => {
            console.log(button)
        }))
    }
    filterList(input) {
        let result = [];
        let ul = document.querySelectorAll('.list__ul');
            Array.from(ul.children).forEach(child => {
                if (child.innerHTML.includes(input.value.toLowerCase())) {
                    result.push(child.innerHTML.toLowerCase());
                    console.log(result)
                }
            })
        this.renderList(el, result);
    }
    renderList(ul, result) {
       ul.innerHTML = '';
      result.forEach(item => ul.innerHTML = `<li>${item}</li>`)
    }
}
checkIfInputExists() {
    let input = this.searchInput.value.toLowerCase();
    let result = [];
    
    if (input.value.length > 2) {
        this.recipes.forEach(recipes => {
            recipes.ingredients.forEach(ingredients => {
                if (ingredients.ingredient.toLowerCase().includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes);
                    }
                }
            });
            if (recipes.name.toLowerCase().includes(input)) {
                if (!result.includes(recipes)) {
                    result.push(recipes);
                }
            }
            if (recipes.description.toLowerCase().includes(input)) {
                if (!result.includes(recipes)) {
                    result.push(recipes);
                }
            }
        });
    }
    this.searchRender(result);
}
checkIfInputExists() {
    let input = this.searchInput.value.toLowerCase();
    let result = [];
    
    if (input.value.length > 2) {
        for(let i = 0; i < this.recipes.length; i++) {
            for(let j = 0; j < this.recipes.ingredients.length; j++) {
                if (this.recipes[i].ingredients[j].ingredient.toLowerCase().includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes);
                    }
                }
            }
        }
        this.recipes.forEach(recipes => {
            recipes.ingredients.forEach(ingredients => {
                if (ingredients.ingredient.toLowerCase().includes(input)) {
                    if (!result.includes(recipes)) {
                        result.push(recipes);
                    }
                }
            });
            if (recipes.name.toLowerCase().includes(input)) {
                if (!result.includes(recipes)) {
                    result.push(recipes);
                }
            }
            if (recipes.description.toLowerCase().includes(input)) {
                if (!result.includes(recipes)) {
                    result.push(recipes);
                }
            }
        });
    }
    this.searchRender(result);
}
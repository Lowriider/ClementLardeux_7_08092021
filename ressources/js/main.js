
import GetData from "./data/GetData.js";
import ArticleTemplate from "./builder/Articles.js";
import Buttons from "./builder/Buttons.js";
import Search from "./search/Search.js";
// import Search from "./search/Search2.js";
import Tags from "./builder/Tags.js";
import ListSearch from "./search/ListSearch.js";


function launch() {
    new GetData().getData(recipes).then((data)=> {
        new ArticleTemplate().displayRecipes(data.recipesArray);
        new Buttons(data.ingredientsArray, data.devicesArray, data.ustensilsArray, data.recipesArray);
        new Tags(data.recipesArray);
        new Search(data.recipesArray);
        
       
    }).catch((err) => {
        console.log(err)
    })
}

// WAIT DOM IS LOADED TO LAUNCH FUNCTION
document.addEventListener('DOMContentLoaded', launch);
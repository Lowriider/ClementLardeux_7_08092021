
import GetData from "./data/GetData.js";
import ArticleTemplate from "./builder/Articles.js";
import Buttons from "./builder/Buttons.js";
import Search from "./search/Search.js";
// import Search from "./search/Search2.js";
import Tags from "./builder/Tags.js";


function launch() {
    new GetData().getData(recipes).then((data)=> {
        new ArticleTemplate().displayRecipes(data.recipesArray);
        new Buttons().displayUtils(data.ingredientsArray, data.devicesArray, data.ustensilsArray)
        new Search(data.recipesArray);
        new Tags();
       
    }).catch((err) => {
        console.log(err)
    })
}

// WAIT DOM IS LOADED TO LAUNCH FUNCTION
document.addEventListener('DOMContentLoaded', launch);
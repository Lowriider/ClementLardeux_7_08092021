
import GetData from "./data/GetData.js";
import ArticleTemplate from "./builder/Article.js";
import Utils from "./builder/Utils.js";

function launch() {
    new GetData().getData(recipes).then((data)=> {
        new ArticleTemplate(data.recipesArray);
        new Utils(data.ingredientsArray,data.devicesArray, data.ustensilsArray)
    }).catch((err) => {
        console.log(err)
    })
}

// WAIT DOM IS LOADED TO LAUNCH FUNCTION
document.addEventListener('DOMContentLoaded', launch);
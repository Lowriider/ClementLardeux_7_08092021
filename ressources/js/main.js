import ArticleTemplate from "./template/article.js";

function launch() {
  new ArticleTemplate(recipes);
}

// WAIT DOM IS LOADED TO LAUNCH FUNCTION
document.addEventListener('DOMContentLoaded', launch);
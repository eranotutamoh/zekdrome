function getIngredients(query, cb) {
    return fetch(`/api/ingredients?ing=${query}`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON)
        .then(cb);
}
function recipesBySearch(ings, cb) {
    const query = formatSearch(ings)
   fetch(`/api/ingredientsearch${query}`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON)
        .then(cb);
}
function loadRecipes(cb) {
    fetch('/api/recipes')
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}
function loadRecipe(id, cb) {
    fetch(`/api/recipe/${id}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}
function deleteRecipe(id, cb) {
    fetch(`/api/recipedelete/${id}`,{method: 'DELETE'})
        .then(checkStatus)
        .then(cb);
}
function addRecipe(recipe, cb) {
    fetch(`/api/recipeadd/`,{method: 'POST', body: JSON.stringify(recipe), headers: new Headers({'Content-Type': 'application/json'})})
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}
function updateRecipe(id, recipe, cb) {
    fetch(`/api/recipeedit/${id}`,{method: 'PUT', body: JSON.stringify(recipe), headers: new Headers({'Content-Type': 'application/json'})})
        .then(checkStatus)
        .then(cb);
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error); // eslint-disable-line no-console
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}
function formatSearch(ingredients) {
    let searchString = '';
    let j = 2;
    for(let i=0; i<ingredients.length; i++) {
        let par = (i === 0) ? '?ing1=' : '&ing'+j+++'='
        searchString += par+ingredients[i];
    }
    return searchString;
}
const API = { getIngredients, loadRecipes, deleteRecipe, addRecipe, updateRecipe, loadRecipe, recipesBySearch  };
export default API;
function search(query, cb) {
    return fetch(`/api/ingredients?ing=${query}`, {
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

const API = { search, loadRecipes, deleteRecipe, addRecipe, updateRecipe, loadRecipe  };
export default API;
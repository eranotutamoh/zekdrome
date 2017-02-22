import API from '../remote/apiCalls'

const requestRecipes = function() {
    return {
        type: 'REQUEST_RECIPES',
    }
}
const receiveRecipes = function(data) {
    return {
        type: 'RECEIVE_RECIPES',
        data
    }
}
const requestDelete = function() {
    return {
        type: 'REQUEST_DELETE',
    }
}
const successDelete = function(id) {
    return {
        type: 'DELETE_RECIPE',
        id
    }
}
const getRecipe = function(recipe, route='/recipe') {
    return {
        type: 'GET_RECIPE',
        recipe,
        route
    }
}
const getIngredients = function(ingredients) {
    return {
        type: 'GET_INGREDIENTS',
        ingredients
    }
}

export const  fetchRecipes = function () {
    return dispatch => {
        dispatch(requestRecipes())
        return API.loadRecipes(data => {
                dispatch(receiveRecipes(data))
            }
        );
    }
}
export const  addRecipe = function (recipe) {
    return dispatch => {
        API.addRecipe(recipe, (data) => {
            dispatch(fetchRecipes())
            dispatch(getRecipe(data) )
        })
    }
}
export const  editRecipe = function (recipe) {
    return dispatch => {
        API.updateRecipe(recipe._id, recipe, () => {
            dispatch(fetchRecipes())
            dispatch(getRecipe(recipe) )
        })
    }
}
export const  deleteRecipe = function (id) {
    return dispatch => {
       dispatch(requestDelete())
        return API.deleteRecipe(id, () => {
                dispatch(successDelete(id))
            }
        );
    }
}
export const loadIngredients = function (value) {
    return dispatch => {
        return API.search(value, data => {
                dispatch(getIngredients(data))
            }
        );
    }
}
export const loadRecipe = function (id, route) {
    return dispatch => {
        return API.loadRecipe(id, data => {
                dispatch(getRecipe(data, route))
            }
        );
    }
}
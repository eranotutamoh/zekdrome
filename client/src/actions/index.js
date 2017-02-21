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
const loadRecipe = function(data) {
    return {
        type: 'EDIT_LINK_RECIPE',
        data
    }
}
const updatedRecipe = function(recipe) {
    return {
        type: 'UPDATED_RECIPE',
        recipe
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
            dispatch(updatedRecipe(data) )
        })
    }
}
export const  editRecipe = function (recipe) {
    return dispatch => {
        API.updateRecipe(recipe._id, recipe, () => {
            dispatch(fetchRecipes())
            dispatch(updatedRecipe(recipe) )
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

export const editRecipeLink = function (id) {
    return dispatch => {
        return API.loadRecipe(id, data => {
                dispatch(loadRecipe(data))
            }
        );
    }
}
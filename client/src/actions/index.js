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

export const  fetchRecipes = function () {
    return dispatch => {
        dispatch(requestRecipes())
        return API.loadRecipes(data => {
                dispatch(receiveRecipes(data))
            }
        );
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
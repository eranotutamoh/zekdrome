import { browserHistory } from 'react-router'
//import { combineReducers } from 'redux'



const Reducer = function(state = {isFetching: false, isDeleting: false, recipes: [], recipe: {}}, action) {
    switch (action.type) {
        case 'REQUEST_RECIPES': {
            return {...state, isFetching: true}
        }
        case 'RECEIVE_RECIPES': {
            return {...state, isFetching: false, recipes: action.data}
        }
        case 'REQUEST_DELETE': {
            return {...state, isDeleting: true}
        }
        case 'DELETE_RECIPE': {
            const deletedIndex = state.recipes.findIndex((r) => r._id === action.id)
            const newRecipes = [...state.recipes.slice(0, deletedIndex), ...state.recipes.slice(deletedIndex + 1, state.recipes.length)]
            return {
                ...state,
                isDeleting: false,
                recipes: newRecipes
            }
        }
        case 'EDIT_LINK_RECIPE': {
            sessionStorage.setItem('recipe', JSON.stringify(action.data))
            window.setTimeout(() => browserHistory.push(`/update`) , 0)
            return {
                ...state,
                recipe: action.data
            }
        }
        case 'UPDATED_RECIPE': {
            window.setTimeout(() => browserHistory.push(`/recipe/${action.recipe._id}`) , 0)
            return {
                ...state,
                recipe: action.recipe
            }
        }
        default: {
            return state
        }
    }
}

/*const reduce = combineReducers({
    Reducer
})*/


export default Reducer
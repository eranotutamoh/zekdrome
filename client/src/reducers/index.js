import { browserHistory } from 'react-router'
//import { combineReducers } from 'redux'



const Reducer = function(state = {isFetching: false, isDeleting: false, recipes: [], recipe: {}, chooseIngredients: [], findByIngredient: []}, action) {
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
        case 'GET_RECIPE': {
            window.setTimeout(() => browserHistory.push(action.route) , 0)
            sessionStorage.setItem('recipe', JSON.stringify(action.recipe))
            return {
                ...state,
                recipe: action.recipe
            }
        }
        case 'GET_INGREDIENTS': {
            return {
                ...state,
                chooseIngredients: action.ingredients
            }
        }
        case 'CLEAR_INGREDIENTS': {
            return {
                ...state,
                chooseIngredients: []
            }
        }
        case 'FINDBY_INGREDIENT': {
            return {
                ...state,
                chooseIngredients: [],
                findByIngredient: state.findByIngredient.concat(action.ingredient)
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
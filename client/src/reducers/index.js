import { combineReducers } from 'redux'


const Reducer = function(state = {isFetching: false,recipes: []}, action) {
    switch (action.type) {
        case 'REQUEST_RECIPES': {
            return { isFetching: true, recipes: []}
        }
        case 'RECEIVE_RECIPES': {
            return { isFetching: false, recipes: action.data}
        }
        default: {
            return state
        }
    }
}

const reduce = combineReducers({
    Reducer
})


export default reduce
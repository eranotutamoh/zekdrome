import { connect  } from 'react-redux'
import SearchInput from '../components/search'
import {loadIngredients, findByIngredient} from '../actions/'

const mapStateToSearchProps = (state) => {

    return {ingredients : state.chooseIngredients }
}

const mapDispatchToSearchProps = (dispatch) => ( {
        onSearchChange : (value) => {
            if (!value.trim().length) return dispatch({type: 'CLEAR_INGREDIENTS'})
            return dispatch(loadIngredients(value.trim()))
        },
        addIngredient : (value) => {
            dispatch({type: 'CLEAR_INGREDIENTS'})
            return dispatch(findByIngredient(value))
        },
        clear : () => {
            dispatch({type: 'CLEAR_RESULTS'})
        }
    }
);

const Search = connect(
    mapStateToSearchProps,
    mapDispatchToSearchProps
)(SearchInput)

export default   Search;
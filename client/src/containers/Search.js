import { connect  } from 'react-redux'
import SearchInput from '../components/search'
import {loadIngredients} from '../actions/'

const mapStateToSearchProps = (state) => {

    return {ingredients : state.chooseIngredients }
}

const mapDispatchToSearchProps = (dispatch) => ( {
        onSearchChange : (value) => {
            console.log('SEARCH for:', value.trim().length)
            if (!value.trim().length) return dispatch({type: 'CLEAR_INGREDIENTS'})
            return dispatch(loadIngredients(value.trim()))
        },
        addIngredient : (value) => {
            console.log('Selected:', value)
            return dispatch({type: 'FINDBY_INGREDIENT', ingredient: value})
        }
    }
);

const Search = connect(
    mapStateToSearchProps,
    mapDispatchToSearchProps
)(SearchInput)

export default   Search;
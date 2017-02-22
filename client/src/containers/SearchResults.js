import { connect  } from 'react-redux'
import Results from '../components/search/Results'

const mapStateToSearchProps = (state) => {
    return {findByIngredient : state.findByIngredient, recipes: state.recipesBySearch }
}

const mapDispatchToSearchProps = (dispatch) => ( {

    }
);

const SearchResults = connect(
    mapStateToSearchProps,
    mapDispatchToSearchProps
)(Results)

export default   SearchResults;
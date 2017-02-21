import { connect  } from 'react-redux'
import RecipeList from '../components/recipes/RecipeList'
import {deleteRecipe} from '../actions/'

const mapStateToListProps = (state, ownProps) => {

 return   {recipes: state.recipes, isFetching: state.isFetching }
}

const mapDispatchToListProps = (dispatch) => ( {
        deleteRecipe : (name, id) => {
            if (!window.confirm('Delete ' + name + '? ')) return false
            return dispatch(deleteRecipe(id))
        }
    }
);

 const TheRecipes = connect(
 mapStateToListProps,
 mapDispatchToListProps
 )(RecipeList)

export default  TheRecipes;
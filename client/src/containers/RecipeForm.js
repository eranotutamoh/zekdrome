import { connect  } from 'react-redux'
import RecipeAddEdit from '../components/recipe/RecipeAddEdit'
import {addRecipe} from '../actions/'
import {editRecipe} from '../actions/'
import Ingredient from '../abstract/ingredient.js'
import Recipe from '../abstract/recipe.js'

const newRecipe = () => {
    let ing = [new Ingredient('', '','')]
    return new Recipe('New', ing, '');
}



const mapStateToFormProps = (state, ownProps) => {
    return {recipe: (ownProps.add) ? newRecipe() : state.recipe}
}

const mapDispatchToFormProps = (dispatch) => ( {
        saveRecipe : () => {
            return dispatch(addRecipe())
        },
        editRecipe : (id) => {
            return dispatch(editRecipe(id))
        }

    }
);

const RecipeForm = connect(
    mapStateToFormProps,
    mapDispatchToFormProps
)(RecipeAddEdit)

export default  RecipeForm;
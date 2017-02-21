import { connect  } from 'react-redux'
import  RecipeForm  from '../components/recipeForm/RecipeForm'
import {addRecipe} from '../actions/'
import {editRecipe} from '../actions/'
import Ingredient from '../abstract/ingredient.js'
import Recipe from '../abstract/recipe.js'

const newRecipe = () => {
    let ing = [new Ingredient('', '','')]
    return new Recipe('', ing, '');
}



const mapStateToFormProps = (state, ownProps) => {

    const recipe = (ownProps.add) ? newRecipe() : (state.recipe.name) ? state.recipe  : JSON.parse(sessionStorage.getItem('recipe'))
    return {recipe , add: ownProps.add}
}

const mapDispatchToFormProps = (dispatch) => ( {
        saveRecipe : () => {
            return dispatch(addRecipe())
        },
        editRecipe : (recipe) => {
            console.log('EDIT', recipe._id)
            return dispatch(editRecipe(recipe))
        },
        addRecipe : (recipe) => {
            console.log('ADD', recipe.name)
            return dispatch(addRecipe(recipe))
        }

    }
);

const RecipeAddUpdate = connect(
    mapStateToFormProps,
    mapDispatchToFormProps
)(RecipeForm)

export default  RecipeAddUpdate;
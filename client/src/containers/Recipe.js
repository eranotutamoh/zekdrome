import { connect  } from 'react-redux'
import Recipe from '../components/recipe/Recipe'

const mapStateToListProps = (state) => {
    const recipe = (state.recipe.name) ? state.recipe  : JSON.parse(sessionStorage.getItem('recipe'))
    return   {recipe: recipe }
}



const TheRecipe = connect(
    mapStateToListProps
)(Recipe)

export default  TheRecipe;
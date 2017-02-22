import { connect  } from 'react-redux'
import RecipeLinks from '../components/RecipeLink'
import {loadRecipe} from '../actions/'

const mapStateToEditProps = () => ({})

const mapDispatchToEditProps = (dispatch) => ( {
        onEdit : (id, route) => {
            return dispatch(loadRecipe(id, route))
        }
    }
);

const RecipeLink = connect(
    mapStateToEditProps,
    mapDispatchToEditProps
)(RecipeLinks)

export default   RecipeLink;
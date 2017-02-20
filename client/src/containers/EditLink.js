import { connect  } from 'react-redux'
import EditLinks from '../components/EditLink'
import {editRecipeLink} from '../actions/'

const mapStateToEditProps = () => ({})

const mapDispatchToEditProps = (dispatch) => ( {
        onEdit : (id) => {
            return dispatch(editRecipeLink(id))
        }
    }
);

const Editlink = connect(
    mapStateToEditProps,
    mapDispatchToEditProps
)(EditLinks)

export default  Editlink;
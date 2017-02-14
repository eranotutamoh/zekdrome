import RecipeLink from '../RecipeLink'

const Recipe = ({ onDelete, onEdit, name, id }) => (
    <li>
        <button onClick={onDelete}  className="delete">Delete</button>
        <button onClick={onEdit} className="edit">Edit</button>
        <RecipeLink
            name={name}
            id={id}
        />
    </li>
)


export default Recipe








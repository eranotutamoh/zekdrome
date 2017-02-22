import React from 'react'
import RecipeLink from '../../containers/RecipeLink'

const RecipeListing = (props) => {
        return (
            <li>
                <button  onClick={props.onDelete}  className="delete">Delete</button>
                <RecipeLink isButton={true} _id={props.id}  _redirect="/update">
                    Edit
                </RecipeLink>
                <RecipeLink  isButton={false}  _id={props.id} >
                    {props.name}
                </RecipeLink>
            </li>
        );
}

export default RecipeListing;
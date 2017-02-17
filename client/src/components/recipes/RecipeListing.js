import React from 'react'
import Link from '../Link'
console.log(Link)
const RecipeListing = (props) => {
    const link = `recipe/${props.id}`
        return (
            <li>
                <button  onClick={props.onDelete}  className="delete">Delete</button>
                <button  onClick={props.onEdit} className="edit">Edit</button>
                <Link link = {link} >
                    {props.name}
                </Link>
            </li>
        );
}

export default RecipeListing;
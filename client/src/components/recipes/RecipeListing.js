import React from 'react'
import Link from '../Link'
import EditLink from '../../containers/EditLink'

const RecipeListing = (props) => {
    const link = `recipe/${props.id}`
        return (
            <li>
                <button  onClick={props.onDelete}  className="delete">Delete</button>
                <EditLink isButton={true} _id={props.id}>
                    Edit
                </EditLink>
                <Link link={link} >
                    {props.name}
                </Link>
            </li>
        );
}

export default RecipeListing;
import React from 'react'

const EditLinks = (props) => {
    return     (
        <button onClick={() => props.onEdit(props._id)} className="edit">{props.children}</button>
    )

}
export default EditLinks

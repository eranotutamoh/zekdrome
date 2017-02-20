import React from 'react'

const EditLinks = (props) => {
    console.log('In EDITLINKS')
    return     (
        <button onClick={() => props.onEdit(props._id)} className="edit">{props.children}</button>
    )

}
export default EditLinks

import React from 'react'

const RecipeLinks = (props) => {
   if (props.isButton) return   ( <button onClick={() => props.onEdit(props._id, props._redirect)} className="edit">{props.children}</button> )
   else return   ( <a href="#" onClick={() => props.onEdit(props._id, props._redirect)} >{props.children}</a> )
}
export default RecipeLinks

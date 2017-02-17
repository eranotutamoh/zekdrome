import React from 'react'

const Link = (props) => {
    return     (
            <a href={props.link} >{props.children}</a>
        )

}
export default Link

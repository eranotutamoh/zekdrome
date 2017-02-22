import React from 'react'

const SearchInput = (props) => {
    let lala
//() => props.onSearchChange(lala.value)

    const hey = () => {
        lala.value = '';
    }

    return (

        <span style={{position:'relative'}}>
                <h1>Search</h1>
            <label>Enter ingredient</label>
            <input autoFocus type="text" ref={node => lala = node}  onBlur={() => hey()} onChange={() => props.onSearchChange(lala.value)} required />
            <ul className="basic-list" id="ingredients-ul" >
                {
                    props.ingredients.map((ing, ix) => (
                        <li key={ix} onClick={() => props.addIngredient(ing)} >{ing}</li>
                    ))
                }
            </ul>
            </span>
    )


}

export default SearchInput;

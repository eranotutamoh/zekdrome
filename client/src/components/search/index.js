import React from 'react'

let ingredientsToSearch = [];

const SearchInput = (props) => {
    let searchString

    const selectIngredient = (ingredient) => {
        ingredientsToSearch.push(ingredient)
        searchString.value=''
        searchString.focus()
        return props.addIngredient(ingredientsToSearch)
    }
    const selectOnEnter = (e) => {
        if(e.keyCode === 13)   selectIngredient(props.ingredients[0])
    }
    const clear = () => {
        ingredientsToSearch = [];
        props.clear();
        searchString.value=''
        searchString.focus()
    }

    return (

        <span className="search-field">
                <h1>Search</h1>
            <label>Enter ingredient</label>
            <div style={{position:'relative'}}>
            <input autoFocus type="text" ref={node => searchString = node}   onKeyDown={(e) => selectOnEnter(e)} onChange={() => props.onSearchChange(searchString.value)} required />

            <button onClick={() => clear()}>Clear</button>
            <ul className="basic-list" id="ingredients-ul" >
                {
                    props.ingredients.map((ing, ix) => (
                        <li key={ix} onClick={() => selectIngredient(ing)} >{ing}</li>
                    ))
                }
            </ul>
            </div>

            </span>

    )


}

export default SearchInput;

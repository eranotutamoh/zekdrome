import React from 'react'

let ingredientsToSearch = []; //todo clear button

const SearchInput = (props) => {
    let lala


    const selectIngredient = (ingredient) => {
        ingredientsToSearch.push(ingredient)
        return props.addIngredient(ingredientsToSearch)
    }

    const hey = () => {
        lala.value = '';
    }
    const clear = () => {
        ingredientsToSearch = [];
        props.clear();
    }

    return (

        <span className="search-field">
                <h1>Search</h1>
            <label>Enter ingredient</label>
            <div style={{position:'relative'}}>
            <input autoFocus type="text" ref={node => lala = node}  onBlur={() => hey()} onChange={() => props.onSearchChange(lala.value)} required />

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

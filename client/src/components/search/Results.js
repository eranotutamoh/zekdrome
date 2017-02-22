import React from 'react'



const Results = (props) => {
    console.log(props.recipes)

    const filtered =  props.recipes.filter((recipe) => recipe.name.startsWith('A'))

    let recipes =  filtered.map((ing, ix) => (<li key={ix}  >{ing.name}</li>))

    return (
            <div>
                <p>Recipes including: {props.findByIngredient.join(', ')}</p>
                <ul>
                    {
                       recipes
                    }
                </ul>
            </div>

    )


}

export default Results;


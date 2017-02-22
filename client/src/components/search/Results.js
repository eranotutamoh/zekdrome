import React from 'react'
import RecipeLink from '../../containers/RecipeLink'


const Results = (props) => {


    let recipes =  props.recipes.map((ing, ix) => (
            <li key={ix}  >
                <RecipeLink  isButton={false}  _id={ing._id} >
                    {ing.name}
                </RecipeLink>

            </li>)
    )

    return (
            <div>
                <p>Searched Recipes with: {props.findByIngredient.join(', ')}</p>
                <ul className='basic-list'>
                    {
                       recipes
                    }
                </ul>
            </div>
    )
}

export default Results;


import React from 'react'
import RecipeLink from '../../containers/RecipeLink'

const Recipe = (props) => {

    const ings = props.recipe.ingredients.map((ing, ix) =>
        (
            <dl key={ix} >
                <dt>{ing.name}</dt>
                <dd>{ing.quantity}</dd>
                <dd>{ing.method}</dd>
            </dl>
        )
    );
    return (

        <div>
            <h1>
                <RecipeLink isButton={false} _id={props.recipe._id} _redirect="/update">
                    {props.recipe.name}
                </RecipeLink>
            </h1>
            <p>{props.recipe.instructions}</p>
            {ings}

        </div>
    );

}

export default Recipe;






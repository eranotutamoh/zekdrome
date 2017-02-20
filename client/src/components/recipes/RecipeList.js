import React from 'react'
import RecipeListing from './RecipeListing';

const RecipeList = (props) => {
    const loading = props.isFetching && 'Loading ... ';

    return (
        <div>
            <h1>{loading}Recipes</h1>
            <ul className='basic-list'>
                {props.recipes.map((recipe) =>

                <RecipeListing
                    key={recipe._id}
                    name={recipe.name}
                    id={recipe._id}
                    onDelete={() => props.deleteRecipe(recipe.name,recipe._id)}
                />

            )}
            </ul>
        </div>
    );
}

export default RecipeList;

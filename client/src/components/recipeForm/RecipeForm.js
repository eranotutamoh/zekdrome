import React, { Component } from 'react';
import Ingredient from '../../abstract/ingredient.js'
import Recipe from '../../abstract/recipe.js'
class RecipeForm extends Component {




    render() {
        const title = (this.props.recipeID) ? 'Edit ' : 'Add Recipe';
        return (
            <form  action="/api/recipeadd" method="post"  autoComplete="off" >
                <h1>{title}</h1>
                <label>Recipe name</label>
                <input  type="text" name="name" className="wide"  required />

                <h4 >Ingredients</h4>
                <ul className="basic-list" id="ingredients-ul" style={{display:'none'}}>
                    <li></li>
                </ul>
                <div>

                </div>

                <button className="another" >+</button>
                <label className="beforeThis">Instructions</label>
                <textarea rows="7" cols="44" name="instructions" className="wide"  required></textarea>
                <button type="submit"  >Submit</button>
            </form>
            );
    }
}

export default RecipeForm;
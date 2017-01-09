import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Ingredient from '../../abstract/ingredient.js'
import Recipe from '../../abstract/recipe.js'
import API from '../../remote/apiCalls'
import Ingredients from './Ingredient'

class RecipeForm extends Component {
    addIngFocus: false;
    constructor(props) {
        super(props);
        this.state = {recipe: this.newRecipe()};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.updateIngInput = this.updateIngInput.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState({recipe: props.editRecipe});
    }

    render() {
        if(this.props.editRecipe && this.state.recipe.name === '') return null;
        const title = (this.props.editRecipe) ? `Edit ${this.props.editRecipe.name}` : 'Add Recipe';
        let ings = this.state.recipe.ingredients.map((ing, ix) => {
            return (
                <Ingredients
                    key={ix}
                    index={ix}
                    name={ing.name}
                    quantity={ing.quantity || ''}
                    method={ing.method || ''}
                    updateInput={this.updateIngInput}
                    remove={this.removeIngredient}
                    addIngFocus={this.addIngFocus}
                    //ingsLength={this.state.recipe.ingredients.length}

                />
            );
        });
        return (
            <form  action="/api/recipeadd" method="post"  autoComplete="off"  onSubmit={this.onFormSubmit}>
                <h1>{title}</h1>
                <label>Recipe name</label>
                <input autoFocus type="text" name="name"  value={this.state.recipe.name} onChange={this.updateInput} className="wide" required />

                <h4 >Ingredients</h4>
                {ings}
                <button className="another" onClick={this.addIngredient} >+</button>
                <label className="beforeThis">Instructions</label>
                <textarea rows="7" cols="44" name="instructions" value={this.state.recipe.instructions} onChange={this.updateInput} className="wide"  required></textarea>
                <button type="submit"  >Submit</button>
            </form>
            );
    }
    updateIngInput(val, name, ix) {
        let recipe =  this.state.recipe;
        recipe.ingredients[ix][name] = val;
        this.setState({recipe: recipe });
    }
    updateInput(evt) {
        let recipe =  this.state.recipe;
        recipe[evt.target.name] = evt.target.value;
        this.setState({recipe: recipe });

    }
    addIngredient(evt) {
        evt.preventDefault();
        let recipe =  this.state.recipe;
        recipe.ingredients.push(new Ingredient('','',''));
        this.addIngFocus= true;
        this.setState({recipe: recipe });
    }
    removeIngredient(evt, ix) {
        evt.preventDefault();
        let recipe =  this.state.recipe;
        recipe.ingredients.splice(ix, 1);
        this.setState({recipe: recipe });
    }
    newRecipe() {
        let ing = [new Ingredient('', '','')]
        return new Recipe('', ing, '');
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        if(this.props.editRecipe) API.updateRecipe(this.props.editRecipe._id,this.state.recipe, () => browserHistory.push(`/recipe/${this.props.editRecipe._id}`));
        else API.addRecipe(this.state.recipe,(data) => browserHistory.push(`/recipe/${data._id}`));

    }
}

export default RecipeForm;
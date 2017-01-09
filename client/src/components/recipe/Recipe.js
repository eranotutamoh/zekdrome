import React, { Component } from 'react';
import Ingredient from '../../abstract/ingredient.js'
import Recipe from '../../abstract/recipe.js'
import API from '../../remote/apiCalls'


class RecipeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {recipe: this.newRecipe()};
    }

    render() {
        const ings = this.state.recipe.ingredients.map((ing, ix) =>
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
                <h1><a  href={`/edit/${this.state.recipe._id}`} className="edit">{this.state.recipe.name}</a></h1>
                <p>{this.state.recipe.instructions}</p>
                {ings}

            </div>
        );
    }
    componentDidMount() {
        API.loadRecipe(this.props.params.id, data  => this.setState({recipe: data }) );
    }
    newRecipe() {
        let ing = [new Ingredient('', '','')]
        return new Recipe('', ing, '');
    }

}


export default RecipeDetail;
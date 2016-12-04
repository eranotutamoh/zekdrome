import React, { Component } from 'react';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {

    render() {
        return (
            <RecipeForm recipeID="{this.props.params.id}" />
        );
    }
}

export default RecipeEdit;
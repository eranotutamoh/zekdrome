import React, { Component } from 'react';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {recipe: {}};
    }

    render() {
        return (
           <RecipeForm editRecipe={this.state.recipe} />
        );
    }
    componentDidMount() {
        this.loadRecipe(this.props.params.id);
    }
    loadRecipe(id) {
        fetch(`/api/recipe/${id}`)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data  => this.setState({recipe: data }) );
    }
}

export default RecipeEdit;
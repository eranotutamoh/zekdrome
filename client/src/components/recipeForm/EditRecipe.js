import React, { Component } from 'react';
import RecipeForm from './RecipeForm';
import API from '../../remote/apiCalls'

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
        API.loadRecipe(this.props.params.id, data  => this.setState({recipe: data }) );
    }
}

export default RecipeEdit;
import React, { Component } from 'react';

class RecipeLink extends Component {


    render() {
        const link = `recipe/${this.props.id}`;
        return (
                <a href={link} >{this.props.name}</a>
        );
    }
}

export default RecipeLink;
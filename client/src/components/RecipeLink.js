import React, { Component } from 'react';

class RecipeLink extends Component {


    render() {
        return (
                <a href={this.props.id} >{this.props.name}</a>
        );
    }
}

export default RecipeLink;
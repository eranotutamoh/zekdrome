import React, { Component } from 'react';
import RecipeLink from './RecipeLink';

class RecipesLi extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        console.log('WHAT', this.props.ix);
        this.props.delete(this.props.ix, this.props.name, this.props.id)
    }

    render() {
        return (
            <li>
                <button onClick={this.delete}  className="delete">Delete</button>
                <button className="edit">Edit</button>
                <RecipeLink
                    name={this.props.name}
                    id={this.props.id}
                />
            </li>
        );
    }
}

export default RecipesLi;
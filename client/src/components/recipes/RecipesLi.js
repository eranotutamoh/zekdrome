import React, { Component } from 'react';
import RecipeLink from '../RecipeLink';

class RecipesLi extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }
    delete() {
        this.props.delete(this.props.id)
    }
    edit() {
        this.props.edit(this.props.id)
    }
    render() {
        return (
            <li>
                <button onClick={this.delete}  className="delete">Delete</button>
                <button onClick={this.edit} className="edit">Edit</button>
                <RecipeLink
                    name={this.props.name}
                    id={this.props.id}
                />
            </li>
        );
    }
}

export default RecipesLi;
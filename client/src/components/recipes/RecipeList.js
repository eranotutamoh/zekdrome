import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import RecipesLi from './RecipesLi';
import API from '../../remote/apiCalls'

class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.state = {recipes: []};
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
    }

    render() {
        const recs = this.state.recipes.map((recipe) => {
            return (
                <RecipesLi
                    key={recipe._id}
                    name={recipe.name}
                    id={recipe._id}
                    delete={this.deleteRecipe}
                    edit={this.editRecipe}
                />
            );
        });
        return (

            <div>
                <h1>Recipes</h1>
               <ul className='basic-list'>
                   {recs}
               </ul>
            </div>
        );
    }
    componentDidMount() {
        API.loadRecipes(data  => this.setState({recipes: data }));
    }
    deleteRecipe(name,id) {
        if(!window.confirm('Delete '+name+'? ')) return false;
        API.deleteRecipe(id,() => this.setState({ recipes: this.state.recipes.filter((recipe) =>  recipe._id !== id)}));
    }
    editRecipe(id) {
        browserHistory.push(`/edit/${id}`)
    }

}


export default RecipeList;
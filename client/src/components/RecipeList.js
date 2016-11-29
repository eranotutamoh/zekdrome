import React, { Component } from 'react';
import RecipesLi from './RecipesLi';

class RecipeList extends Component {



    constructor(props) {
        super(props);
        this.state = {recipes: []};
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }
    render() {
        const recs = this.state.recipes.map((recipe, ix) => {
            return (
                <RecipesLi
                    key={recipe._id}
                    ix={ix}
                    name={recipe.name}
                    id={recipe._id}
                    delete={this.deleteRecipe}
                />
            );
        });
        return (
            <div>
                <nav></nav>
                <section className="mid">
                    <h1>Recipes</h1>
                   <ul className='basic-list'>
                       {recs}
                   </ul>
                </section>
            </div>
        );
    }
    componentDidMount() {
        this.loadRecipes();
    }
    deleteRecipe(ix,name,id) {
        if(!window.confirm('Delete '+name+'? ')) return false;
        this.state.recipes.splice(ix,1)
        this.setState({
            recipes: this.state.recipes
        });
        fetch(`api/recipedelete/${id}`,{method: 'DELETE'})
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
            })
            .then(()  => console.log('Recipe Deleted'));
    }
    loadRecipes() {
        fetch('api/recipes')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data  => this.setState({recipes: data }) );
    }
}


export default RecipeList;
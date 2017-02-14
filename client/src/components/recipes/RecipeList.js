import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import RecipesLi from './RecipesLi'
import API from '../../remote/apiCalls'
import { fetchRecipes } from './actions'


class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.store = createStore(this.reducer, applyMiddleware(thunkMiddleware));
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
    }

    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
        this.store.dispatch(fetchRecipes());
    }

    reducer(state = {isFetching: false,recipes: []}, action) {
        switch (action.type) {
            case 'REQUEST_RECIPES': {
                return { isFetching: true, recipes: []}
            }
            case 'RECEIVE_RECIPES': {
                return { isFetching: false, recipes: action.data}
            }
            default: {
                return state
            }
        }
    }

    render() {
        const state = this.store.getState();
        const loading = state.isFetching && 'Loading ... ';

        const recs = state.recipes.map((recipe) => {
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
                <h1>{loading}Recipes</h1>
               <ul className='basic-list'>
                   {recs}
               </ul>
            </div>
        );
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
import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { connect } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import RecipeList from '../components/recipelist'
import API from '../remote/apiCalls'
import {fetchRecipes, deleteRecipe} from '../actions/'


class Recipes extends Component {

    constructor(props) {
        super(props);
        this.store = createStore(this.reducer, applyMiddleware(thunkMiddleware));
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        //this.findRecipeId = this.findRecipeId.bind(this);
    }

    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
        this.store.dispatch(fetchRecipes());
    }


    reducer(state = {isFetching: false, isDeleting: false, recipes: []}, action) {
        switch (action.type) {
            case 'REQUEST_RECIPES': {
                return {...state, isFetching: true}
            }
            case 'RECEIVE_RECIPES': {
                return {...state, isFetching: false, recipes: action.data}
            }
            case 'REQUEST_DELETE': {
                return {...state, isDeleting: true}
            }
            case 'DELETE_RECIPE': {
                const deletedIndex = state.recipes.findIndex((r) => r._id === action.id)
                console.log('DELETE:', state.recipes.findIndex((r) => r._id === action.id));
                const newRecipes = [...state.recipes.slice(0, deletedIndex), ...state.recipes.slice(deletedIndex + 1, state.recipes.length)]
                return {
                    ...state,
                    isDeleting: false,
                    recipes: newRecipes
                }
            }
            default: {
                return state
            }
        }
    }

    render() {
        const state = this.store.getState();

        return (
            <RecipeList
                recipes={state.recipes}
                deleteRecipe={(name, id) => {
                    if (!window.confirm('Delete ' + name + '? ')) return false
                    this.store.dispatch(deleteRecipe(id))
                }}
            />
        );
    }


    deleteRecipe(name, id) {
        if (!window.confirm('Delete ' + name + '? ')) return false;
        API.deleteRecipe(id, () => this.setState({recipes: this.state.recipes.filter((recipe) => recipe._id !== id)}));
    }

    editRecipe(id) {
        browserHistory.push(`/edit/${id}`)
    }
}

const mapStateToListProps = (state) => ({recipes: state.recipes})

const mapDispatchToListProps = (dispatch) => ( {
        deleteRecipe : (name, id) => {
        if (!window.confirm('Delete ' + name + '? ')) return false
        return dispatch(deleteRecipe(id))
        }
    }
);

/*
const TheRecipes = connect(
    mapStateToListProps,
    mapDispatchToListProps
)(TodoList)
*/


export default Recipes;
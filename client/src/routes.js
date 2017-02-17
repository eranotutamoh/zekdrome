import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reduce  from './reducers'
import Layout from './Layout'
import Recipes from './components/recipes/'
import RecipeForm from './components/recipeForm/RecipeForm'
import RecipeEdit from './components/recipeForm/EditRecipe'
import RecipeDetail from './components/recipe/Recipe'
import Search from './components/search/Search'
import {fetchRecipes} from './actions/'

const store = createStore(reduce, applyMiddleware(thunkMiddleware));
store.dispatch(fetchRecipes())

const Routes = (props) => (
    <Provider store={store}>
        <Router {...props}>
                <Route component={Layout}>
                <Route path="/" components={{ mid: Recipes, right: null }}/>
                <Route path="/recipes" components={{ mid: Recipes, right: null }}/>
                <Route path="/add" components={{ mid: RecipeForm, right: null }}/>
                <Route path="edit/:id" components={{ mid: RecipeEdit, right: null }}/>
                <Route path="recipe/:id" components={{ mid: RecipeDetail, right: null }}/>
                <Route path="/search" components={{ mid: Search, right: null }}/>
                <Route path="*" components={{ mid: null, right: null }}/>
            </Route>
        </Router>
    </Provider>
);

export default Routes;
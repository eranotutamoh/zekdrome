import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reduce  from './reducers'
import Layout from './Layout'
import Recipes from './components/recipes/'
import TheRecipe from './containers/Recipe'
import RecipeEdit from './components/recipe/RecipeEdit'
import RecipeAdd from './components/recipe/RecipeAdd'
import Search from './containers/Search'
import SearchResults from './containers/SearchResults'
import {fetchRecipes} from './actions/'

const store = createStore(reduce, applyMiddleware(thunkMiddleware));
store.dispatch(fetchRecipes())

const Routes = (props) => (
    <Provider store={store}>
        <Router {...props}>
                <Route component={Layout}>
                <Route path="/" components={{ mid: Recipes, right: null }}/>
                <Route path="/recipes" components={{ mid: Recipes, right: null }}/>
                <Route path="/add" components={{ mid: RecipeAdd, right: null }}/>
                <Route path="/update" components={{ mid: RecipeEdit, right: null }}/>
                <Route path="edit/:id" components={{ mid: RecipeEdit, right: null }}/>
                <Route path="recipe" components={{ mid: TheRecipe, right: SearchResults }}/>
                <Route path="/search" components={{ mid: Search, right: SearchResults }}/>
                <Route path="*" components={{ mid: Recipes, right: null }}/>
            </Route>
        </Router>
    </Provider>
);

export default Routes;
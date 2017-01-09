import React from 'react';
import { Router, Route } from 'react-router';
import Layout from './Layout'
import RecipeList from './components/recipes/RecipeList'
import RecipeForm from './components/recipeForm/RecipeForm'
import RecipeEdit from './components/recipeForm/EditRecipe'
import RecipeDetail from './components/recipe/Recipe'
import Search from './components/search/Search'

const Routes = (props) => (
    <Router {...props}>
        <Route component={Layout}>
            <Route path="/" components={{ mid: RecipeList, right: null }}/>
            <Route path="/recipes" components={{ mid: RecipeList, right: null }}/>
            <Route path="/add" components={{ mid: RecipeForm, right: null }}/>
            <Route path="edit/:id" components={{ mid: RecipeEdit, right: null }}/>
            <Route path="recipe/:id" components={{ mid: RecipeDetail, right: null }}/>
            <Route path="/search" components={{ mid: Search, right: null }}/>
            <Route path="*" components={{ mid: null, right: null }}/>
        </Route>
    </Router>
);

export default Routes;
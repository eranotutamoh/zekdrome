import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../remote/apiCalls'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {ingredients:[], searchValue: ''};
        this.onSearchChange = this.onSearchChange.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentWillUnmount() {
        const removeEvent = this.node.removeEventListener;
        removeEvent("keypress", this.handleKeyPress);
    }
    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this.refs.autocomplete);
        const addEvent = this.node.addEventListener;
        addEvent('keypress', this.handleKeyPress, false);
    }
    handleKeyPress(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            if(!this.state.ingredients.length) return false;
            this.addIngredient(e);
        }
    }
    addIngredient(e){
        let ingredient = (e.keyCode === 13) ? this.state.ingredients[0] : e.target.innerText;
        this.setState({ingredients: []});
    }
    onSearchChange(e){
        const value = e.target.value;

        this.setState({
            searchValue: value,
        });

        if (value === '') this.setState({ingredients: []});
        else API.search(value, (ings) => {this.setState({ingredients: ings});});
    }

    render() {

        return (

            <span style={{position:'relative'}}>
                <h1>Recipes</h1>
            <label>Enter ingredient</label>
            <input ref="autocomplete" autoFocus type="text" name='name' value={this.state.searchValue} onChange={this.onSearchChange} required />
            <ul className="basic-list" id="ingredients-ul" >
                {
                    this.state.ingredients.map((ing, ix) => (
                        <li key={ix} onClick={this.addIngredient} >{ing}</li>
                    ))
                }
            </ul>
            </span>
        );
    }


}

export default Search;

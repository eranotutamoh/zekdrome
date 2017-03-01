import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../remote/apiCalls';


class IngredientSearch extends Component {
    node;

    constructor(props) {
        super(props);
        this.state = {ingredients:[]};
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
        this.props.update( ingredient, 'name', this.props.index);
    }
    onSearchChange(e){
        const value = e.target.value;
        this.props.update(value, 'name', this.props.index);
        if (value === '') this.setState({ingredients: []});
        else API.getIngredients(value, (ings) => {this.setState({ingredients: ings});});
    }

    render() {
        return (
            <span style={{position:'relative'}}>
            <label>Name</label>
            <input ref="autocomplete" autoFocus={this.props.addIngFocus}  type="text" name='name' value={this.props.name} onChange={this.onSearchChange} required />
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
export default IngredientSearch;
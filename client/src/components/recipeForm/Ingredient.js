import React, { Component } from 'react';
import IngredientSearch from './IngredientSearch';

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this);
        this.remove = this.remove.bind(this);
    }
    remove(evt) {
        evt.preventDefault();
        this.props.remove(evt, this.props.index);
    }
    updateInput(evt) {
        this.props.updateInput(evt.target.value, evt.target.name, this.props.index);
    }
    render() {

        return (

            <div className="ingredients">

                <IngredientSearch
                    name={this.props.name}
                    index={this.props.index}
                    addIngFocus={this.props.addIngFocus}
                    update={this.props.updateInput}
                />
                <label>Quantity</label>
                <input type="text" name="quantity" value={this.props.quantity} onChange={this.updateInput}  className="small" /><br />
                <label>Method</label>
                <input type="text" name="method" value={this.props.method} onChange={this.updateInput} />
                <button className={this.props.index === 0 ? 'hide' : 'takeaway'} onClick={this.remove}  >-</button>
            </div>
        );
    }
}

export default Ingredients;
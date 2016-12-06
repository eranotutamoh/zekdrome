import React, { Component } from 'react';

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this);
        this.remove = this.remove.bind(this);
    }
    remove(evt) {
        this.props.remove(evt, this.props.index);
    }
    updateInput(evt) {
        this.props.updateInput(evt.target.value, evt.target.name, this.props.index)
    }
    render() {
        let ix = this.props.index;
        return (
            <div className="ingredients">
                <label>Name</label>
                <input autoFocus={ix > 0} type="text" name='name' value={this.props.name} onChange={this.updateInput}  required />
                <label>Quantity</label>
                <input type="text" name="quantity" value={this.props.quantity} onChange={this.updateInput} className="small" /><br />
                <label>Method</label>
                <input type="text" name="method" value={this.props.method} onChange={this.updateInput} />
                <button className={ix === 0 ? 'disabled takeaway' : 'takeaway'} onClick={this.remove}  >-</button>
            </div>
        );
    }
}

export default Ingredients;
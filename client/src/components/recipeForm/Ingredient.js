import React, { Component } from 'react';

class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        this.props.delete(this.props.name, this.props.id)
    }

    render() {
        return (
            <div className="ingredients">
                <label>Name</label>
                <input   type="text" name="iname"  required />
                <label>Quantity</label>
                <input type="text" name="quantity" className="small" /><br />
                <label>Method</label>
                <input type="text" name="method" />
                <button className="takeaway" >-</button>
            </div>
        );
    }
}

export default Ingredient;
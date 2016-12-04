import React, { Component } from 'react';
import { Link } from 'react-router'

class Layout extends Component {


    render() {
        const { mid, right } = this.props;
        return (

            <div>
                <nav>
                    <Link to="/" >Search</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/add">Add Recipe</Link>
                </nav>
                <section className="mid">
                    {mid}
                </section>
                <section className="right">
                    {right}
                </section>
            </div>
        );
    }
}

export default Layout;
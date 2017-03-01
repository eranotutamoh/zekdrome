import React, { Component } from 'react';
import { Link } from 'react-router'

class Layout extends Component {


    render() {
        const page = this.props.location.pathname;
        const { mid, right } = this.props;
        return (

            <div className="container">
                <nav>
                    <Link to="/search" >Search</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/add" className={page === '/add' ? 'disabled' : ''} >Add Recipe</Link>
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
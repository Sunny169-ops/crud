import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

 class Navbar extends Component {
    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-expand-xs navbar-light bg-light">
    <a className="navbar-brand">Navbar</a>
    <div className="navbar-nav">
      <Link className="btn btn-outline-primary" to="/users/add">Add Product </Link>
    </div>
    </nav>
    </div>
        )
    }
}


export default  Navbar;

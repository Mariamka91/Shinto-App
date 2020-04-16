import React, {Component} from ‘react’;
import logo from “./images/logo.jpg”;
import {NavLink, withRouter}  from ‘react-router-dom’;
class  Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? ‘active’ : ‘’;
    }
    render(){
    return (
        <nav className=“navbar navbar-expand-lg navbar-light bg-light”>
        <a className=“navbar-brand ml-5” href=“//localhost:3000/#“>
            <img src={logo} alt = “logo” style = {{width: “57px”, height: “49px”}}/>
        </a>
        <button className=“navbar-toggler” type=“button” data-toggle=“collapse” data-target=“#navbarSupportedContent” aria-controls=“navbarSupportedContent” aria-expanded=“false” aria-label=“Toggle navigation”>
          <span className=“navbar-toggler-icon”></span>
        </button>
       <div className=“collapse navbar-collapse” id=“navbarSupportedContent”>
          <ul className=“navbar-nav ml-auto”>
<li className=“nav-item”>
<a className={this.getNavLinkClass(“/login”)}><NavLink to=“/login” >Log In</NavLink></a>
</li>
<li className=“nav-item”>
<a className={this.getNavLinkClass(“/signup”)}><NavLink to=“/signup” >Sign Up</NavLink></a>
</li>
</ul>
</div>
</nav>
    )
}}
Navbar = withRouter(Navbar);
export default Navbar ;

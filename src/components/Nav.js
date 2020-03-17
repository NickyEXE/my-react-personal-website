import React from 'react'
import {NavLink} from 'react-router-dom'
import '../stylesheets/Nav.css'

const Nav = () => {
    return(
        <div className="nav"> 
            <NavLink exact to="/" activeClassName="selected">
                <span className="subway m-train">A</span>  About
            </NavLink>
            <NavLink to="/projects" activeClassName="selected">
            <span className="subway n-train">B</span>   Projects
            </NavLink>
        </div>
    )
}


export default Nav
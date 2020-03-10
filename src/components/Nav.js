import React from 'react'
import {NavLink} from 'react-router-dom'
import '../stylesheets/Nav.css'

const Nav = () => {
    return(
        <div className="nav-container">
            <div className="nav"> 
                <NavLink exact to="/" activeClassName="selected">
                    <span className="subway m-train">1</span>  About
                </NavLink>
                <NavLink to="/projects" activeClassName="selected">
                    Projects
                </NavLink>
        </div>
      </div>
    )
}


export default Nav
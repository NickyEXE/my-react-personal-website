import React from 'react'
import {NavLink} from 'react-router-dom'
import '../stylesheets/Nav.css'

const Nav = () => {
    return(
        <div className="nav"> 
            <NavLink exact to="/" activeClassName="selected">
                About
            </NavLink>
            <NavLink to="/projects" activeClassName="selected">
                Projects
            </NavLink>
      </div>
    )
}


export default Nav
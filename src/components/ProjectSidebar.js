import React from 'react'
import {NavLink} from 'react-router-dom'

const ProjectSidebar = () => {
    return (
    <div className="nav sidebar"> 
    <div id="intro">Select a project:</div>
    <NavLink exact to="/projects/SingWithNicky" activeClassName="chosen">
        Sing With Nicky
    </NavLink>
    <NavLink exact to="/projects/CentralParkExplorer" activeClassName="chosen">
        Central Park Explorer
    </NavLink>
    <NavLink to="/projects" id="view-all">
        Go back to all projects
    </NavLink>
</div>)
}


export default ProjectSidebar
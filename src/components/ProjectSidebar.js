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
    <NavLink exact to="/projects/XReader" activeClassName="chosen">
        XReader
    </NavLink>
    <NavLink exact to="/projects/LinkedInEndorser" activeClassName="chosen">
        LinkedIn Endorser
    </NavLink>
    <NavLink exact to="/projects/SlackShameHider" activeClassName="chosen">
        Slack Shame Hider
    </NavLink>
    <NavLink to="/projects" id="view-all">
        Go back to all projects
    </NavLink>
</div>)
}


export default ProjectSidebar
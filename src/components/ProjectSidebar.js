import React from 'react'
import {NavLink} from 'react-router-dom'

const ProjectSidebar = () => {
    return (
    <div className="nav sidebar"> 
    <div id="intro">Select a project:</div>
    <NavLink exact to="/projects/SingWithNicky" activeClassName="chosen">
        <span>Sing With Nicky</span>
    </NavLink>
    <NavLink exact to="/projects/CentralParkExplorer" activeClassName="chosen">
        <span>Central Park Explorer</span>
    </NavLink>
    <NavLink exact to="/projects/XReader" activeClassName="chosen">
        <span>XReader</span>
    </NavLink>
    <NavLink exact to="/projects/LinkedInEndorser" activeClassName="chosen">
        <span>LinkedIn Endorser</span>
    </NavLink>
    <NavLink exact to="/projects/SlackShameHider" activeClassName="chosen">
        <span>Slack Shame Hider</span>
    </NavLink>
    <NavLink to="/projects" id="view-all">
        <span>Go back to all projects</span>
    </NavLink>
</div>)
}


export default ProjectSidebar
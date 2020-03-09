import React from 'react';
import ProjectSidebar from '../components/ProjectSidebar'
import '../stylesheets/Projects.css'
import NoProjectSelected from '../components/projects/NoProjectSelected.js'

const Projects = (props) => {
    console.log(props)
    
    return(
        <div className="projects">
            <ProjectSidebar/>
            {props.componentToUse ? props.componentToUse() : <NoProjectSelected/>}
        </div>
    )
}

export default Projects
import React from 'react';
import screenshot from '../../assets/photos/LinkedInEndorser.jpg'
import '../../stylesheets/Projects.css'

const LinkedInEndorser = () => {
    return(
        <div className="project">
        <h1>LinkedIn Endorser</h1>
        <div className="flex">
            <div className="subway f-train">F</div>
            <div className="highlight">
                <h3>Human Resources Confounder</h3>
                <h5>Why endorse your coworkers for just one thing when you can endorse them for all the things?</h5>
            </div>
        </div>
        <a href="https://chrome.google.com/webstore/detail/linkedin-endorser/plpojgnkonpbkjhmlgaoehheeodhango?hl=en-US"><img src={screenshot} className="white-background" alt="LinkedIn Endorser's pop-up, offering to auto-endorse for you."/></a>
        <p className="header">Project Description:</p>
        <ul>
            <li>My students often endorse each other on LinkedIn at the end of the program.</li>
            <li>I thought demonstrating that you can write a script to do this automatically, and then publishing it in the app store, would be a great lesson.</li>
            <li>But now they keep passing it down to following classes as a "great tool." I truly didn't think anyone would use it.</li>
            <li>Mistakes were probably made. My apologies to HR professionals confused about why a potential applicant has 20 endorsements for "Swing Dancing."</li>
        </ul>
        <p className="technologies">Technologies used: JavaScript, Chrome Extensions API</p>
        
        </div>
    )
}



export default LinkedInEndorser
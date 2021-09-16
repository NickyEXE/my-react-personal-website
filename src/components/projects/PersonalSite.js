import React from 'react';

const PersonalSite = () => {
    return(
        <div className="project">
        <h1>This Site</h1>
        <div className="flex">
            <div className="subway west-side-line">3</div>
            <div className="highlight">
                <h3>The Site You're Currently On</h3>
                <h5>Should be kind of self-explanatory, to be honest! It's about Nicky Dover and more specifically, Nicky Dover's web development chops!</h5>
            </div>
        </div>
        <iframe title="YouTube Demo" width="560" height="500" frameBorder="2" allowFullScreen src="https://www.nickydover.com" style={{border: "2px solid black"}}></iframe>
        <p className="header">Project Description:</p>
        <ul>
            <li>Resumes are drab! Nicky built this website to highlight his greatest coding hits.</li>
            <li>The website is built in React.</li>
            <li>All CSS is custom!</li>
            <li>The website is currently deployed on Amazon Web Services' Amplify platform with a Google Domain.</li>
        </ul>
        <p className="technologies">Technologies used: React, AWS<br/>
        <span className="github-links"><a href="https://www.nickydover.com/">The Homepage</a> | <a href="https://github.com/NickyEXE/my-react-personal-website">Github</a></span></p>
        </div>
    )
}



export default PersonalSite

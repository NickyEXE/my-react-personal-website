import React from 'react';
import screenshot from '../../assets/photos/SlackShameHider.jpg'

const SlackShameHider = () => {
    return(
        <div className="project">
        <h1>Slack Shame Hider</h1>
        <div className="flex">
            <div className="subway g-train">G</div>
            <div className="highlight">
                <h3>Slack User Anonymizer</h3>
                <h5>For when that thing that was written on Slack was too funny not to screenshot and share.</h5>
            </div>
        </div>
        <a href="https://chrome.google.com/webstore/detail/slack-shame-hider/alampgflbmggbbmdedahelekciobibki"><img src={screenshot} className="white-background" alt="Example of Slack conversation with names and pictures covered."/></a>
        <p className="header">Project Description:</p>
        <ul>
            <li>If your Slack colleagues are too funny to not occassionally screenshot, but you don't want to publish their names, this app will help.</li>
            <li>When running Slack in a Chrome browser, it will give you the option to "Hide your Shame."</li>
            <li>When you do, it begins assigning each user a color, and covering their names and photos with it.</li>
            <li>That way, you can screenshot anonymously while keeping the same conversational cadence implied by multiple users.</li>
        </ul>
        <p className="technologies">Technologies used: JavaScript, Chrome Extensions API<br/>
        <span className="github-links"><a href="https://chrome.google.com/webstore/detail/slack-shame-hider/alampgflbmggbbmdedahelekciobibki">Google Store Page</a> | <a href="https://github.com/NickyEXE/slack-shame-hider">Github</a></span></p>
        </div>
    )
}



export default SlackShameHider

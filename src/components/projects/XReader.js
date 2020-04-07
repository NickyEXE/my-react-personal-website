import React from 'react'
import screenshot from '../../assets/photos/xreader.png'

const XReader = () => {
    return(
    <div className="project">
    <h1>XReader</h1>
    <div className="flex">
        <div className="subway east-side-line">4</div>
        <div className="highlight">
            <h3>An Extreme Reader for Gamers.</h3>
            <h5>Exports article links from the internet into a bullet hell JavaScript game and reads it out to you.</h5>
        </div>
    </div>
    <a href="https://nickyexe.github.io/XReader/"><img src={screenshot} alt="A game of XReader in progress."/></a>
    <p className="header">Project Description:</p>
    <ul>
        <li>A partner project between myself and my cohortmate at Flatiron School, Tony Chang, this side-scroller bullet-hell was built in our third week of classes on JavaScript.</li>
        <li>The user gives it an article URL from the internet, and its Rails backend scrapes all of the words in that article's {"<p>"} tags, then renders them out as enemies to be shot or dodged.</li>
        <li>As you fight through the sentences, it renders walls to fly through and reads the text in a british accent.</li>
    </ul>
    <p className="technologies">Technologies used: Vanilla JS, HTML5 text-to-speech API<br/>
        <span className="github-links"><a href="https://nickyexe.github.io/XReader/">Deployed Page</a> | <a href="https://github.com/NickyEXE/XReader">Github</a></span></p>
    </div>)
}


export default XReader
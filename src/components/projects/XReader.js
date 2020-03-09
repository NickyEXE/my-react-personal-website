import React from 'react'
import screenshot from '../../assets/photos/xreader.png'

const XReader = () => {
    return(
    <div className="project">
    <h1>XReader</h1>
    <h3>An Extreme Reader for Gamers.</h3>
    <a href="https://nickyexe.github.io/XReader/"><img src={screenshot} alt="A game of XReader in progress."/></a>
    <p>A partner project between myself and my cohortmate at Flatiron School, Tony Chang, this side-scroller bullet-hell was built in our third week of classes on JavaScript.</p>
    <p>The user gives it an article URL from the internet, and its Rails backend scrapes all of the words in that article's {"<p>"} tags, then renders them out as enemies to be shot or dodged.</p>
    <p>As you fight through the sentences, it renders walls to fly through and reads the text in a british accent.</p>
    <p className="technologies">Technologies used: Vanilla JS, HTML5 text-to-speech API</p>
    </div>)
}


export default XReader
import React from "react";
import Twitter from '../assets/icons/twitter.png'
import LinkedIn from '../assets/icons/linkedin.png'
import GitHub from '../assets/icons/github.png'

const ContactInfo = () => {
    return(
        <div className="contact-info">
            <div className="contact-line"><a href="mailto:dovern@gmail.com?Subject=Wow!%20I%20want%20to%20give%20you%20a%20job!">dovern42@gmail.com</a></div>
            <div className="contact-line">(646) 409-9693</div>
            <div className="contact-line"> New York City</div>
            <a href="https://www.linkedin.com/in/ndover/"><img className="icon" src={LinkedIn} alt="LinkedIn"/></a>
            <a href="https://twitter.com/Nicky_Dover"><img className="icon" src={Twitter} alt="Twitter"/></a>
            <a href="https://github.com/NickyEXE"><img className="icon" src={GitHub} alt="GitHub"/></a>
        </div>
    )
}

export default ContactInfo
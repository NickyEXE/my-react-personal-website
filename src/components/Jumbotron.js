import React from "react";
import profileJumbotron from '../assets/photos/profileJumbotron2.png'

const Jumbotron = () => {
    return(
        <div className="jumbotron">
            <img id="profileJumbotron" src={profileJumbotron} alt="Nicky Dover"/>
            <h1><span className="subway m-train">M</span>eet <span className="subway n-train">N</span>icky <span className="subway m-train">D</span>over</h1>
            <h3>Nicky is from New York City. He likes to build cool things.</h3>
        </div>
    )
}

export default Jumbotron
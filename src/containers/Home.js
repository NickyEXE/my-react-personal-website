import React, { Component } from "react";
import profileJumbotron from '../assets/profileJumbotron.png'

class Home extends Component {


    render(){
        return (
            <div className="jumbotron">
                <img id="profileJumbotron" src={profileJumbotron} alt="Picture of Nicky"/>
                <h1><span className="subway m-train">M</span>eet <span className="subway n-train">N</span>icky</h1>
                <h3>Nicky is from New York City. He likes to build cool things.</h3>
            </div>
        )
    }

}

export default Home
import React from "react";
import Jumbotron from '../components/Jumbotron.js'
import ContactInfo from '../components/ContactInfo.js'
import Bio from '../components/Bio.js'
import Profile from '../assets/photos/profile.png'
import '../stylesheets/Home.css'

const Home = () => {
        return (
            <React.Fragment>
                <Jumbotron/>
                <div className="bio-container">
                    <img src={Profile} id="grad" alt="Nicky giving a graduation speech while holding his dog"/>
                    <Bio/>
                    <ContactInfo/>
                </div>
            </React.Fragment>
        )
}

export default Home
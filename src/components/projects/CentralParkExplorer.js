import React from 'react';
import '../../stylesheets/Projects.css'

const CentralParkExplorer = () => {

    return(
        <div className="project">
        <h1>Central Park Explorer</h1>
        <div className="flex">
            <div className="subway west-side-line">2</div>
            <div className="highlight">
                <h3>A walking tour of Central Park</h3>
                <h5>Using geolocation to recommend places within Central Park to visit.</h5>
            </div>
        </div>
        <iframe title="YouTube Demo" width="560" height="315" src="https://www.youtube.com/embed/ifG5abztRGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="header">Project Description:</p>
        <ul>
        <li>Central Park Explorer was built as Nicky's final project as a student at Flatiron School.</li>
        <li>It uses geolocation to position users within one of many Central Park areas, and provide things to do. It could also recommend places to stroll based on user interests, and accepted user reviews.</li>
        <li>To build the app, Nicky configured a PostGIS database, built the shapefiles outlining Central Park's areas using Google Earth for Developers, and did nearest-location analytics with the RGeo gem.</li>
        </ul>
        <p className="technologies">Technologies used: PostGIS, Geolocation API</p>
        </div>
    )
}



export default CentralParkExplorer
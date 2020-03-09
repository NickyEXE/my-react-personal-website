import React from 'react';
import '../../stylesheets/Projects.css'

const CentralParkExplorer = () => {

    return(
        <div className="project">
        <h1>Central Park Explorer</h1>
        <h3>A walking tour of Central Park</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ifG5abztRGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Central Park Explorer was built as Nicky's final project as a student at Flatiron School.</p>
        <p>It uses geolocation to position users within one of many Central Park areas, and provide things to do. It could also recommend places to stroll based on user interests, and accepted user reviews.</p>
        <p>To build the app, Nicky configured a PostGIS database, built the shapefiles outlining Central Park's areas using Google Earth for Developers, and did nearest-location analytics with the RGeo gem.</p>
        <p className="technologies">Technologies used: PostGIS, Geolocation API</p>
        </div>
    )
}



export default CentralParkExplorer
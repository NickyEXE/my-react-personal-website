import React from 'react'
import WIP from '../../assets/icons/WIP.gif'

const NoProjectSelected = () => {
    return(<div className="project">
        <h1>Nicky makes a lot of projects!</h1>
        <img src={WIP} alt="This website under construction!"/>
        <h3>This portion under construction! Gotta get all the screenshots together and optimize the sidebar for mobile!</h3>
        </div>
        )
}

export default NoProjectSelected
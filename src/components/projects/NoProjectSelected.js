import React from 'react'
import WIP from '../../assets/icons/WIP.gif'

const NoProjectSelected = () => {
    return(<div className="project">
        <h1>Nicky makes a lot of projects!</h1>
        <img src={WIP} alt="This website under construction!"/>
        </div>
        )
}

export default NoProjectSelected

import React, { Component } from 'react'
import call

export class LoadCities extends Component {

    loadCities = () => {
        
    }

    render() {
        return (
            <button type="button" onClick={this.loadCities}>Load Cities list</button>
        )
    }
}

export default LoadCities

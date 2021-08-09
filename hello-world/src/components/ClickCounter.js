import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    
    render() {
        const {name, count, incrementCount} = this.props
        console.log(name)
        return (
            <div>
                <button onClick={incrementCount}>{name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)

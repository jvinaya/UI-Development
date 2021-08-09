import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserConsumer } from './userContext'

class ComponentE extends Component {
    static contextType = UserConsumer

    render() {
        return (
        <div>Component E context {this.context}
            <ComponentF></ComponentF>

        </div>
        )
    }
}

export default ComponentE

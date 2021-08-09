import React, { Component } from 'react'
import ForwardInputRef from './ForwardInputRef'

class ForwardInputParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardInputRef ref={this.inputRef}></ForwardInputRef>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardInputParent

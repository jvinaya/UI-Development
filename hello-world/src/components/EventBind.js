import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        // this.clickHandller = this.clickHandller.bind(this)
        this.state = {
             message: 'Hello'
        }
    }
    
    // clickHandller() {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this)
    // }

    clickHandller = () => {
        this.setState({
            message: 'Good Bye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandller.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandller()}>Click</button> */}
                <button onClick={this.clickHandller}>Click</button>

            </div>
        )
    }
}

export default EventBind

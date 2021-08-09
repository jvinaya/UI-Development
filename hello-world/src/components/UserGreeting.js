import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
    render() {

        // Method-1
        // let message

        // if(this.state.isLoggedin){
        //     message = <div>Welcome Vinaya</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return message

        // Method-2
        // if(this.state.isLoggedin) {
        //     return <div>Welcome Vinaya</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Vinaya</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )

        //Method-3
        return (
            // this.state.isLoggedin ? <div>Welcome Vinaya</div> : <div>Welcome Guest</div>

            // Method-4
            this.state.isLoggedin && <div>Welcome Vinaya</div>

        )
    }
}

export default UserGreeting

import React, { Component } from 'react'
import Memocomp from './Memocomp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vinayaa'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vinaya'
            })
        }, 2000)
    }
    render() {
        console.log('****************************Parent comp render****************************')
        return (
            <div>
                Parent Component
                {/* <RegComp name = {this.state.name}></RegComp>
                <PureComp name = {this.state.name}></PureComp> */}
                <Memocomp name={this.state.name}></Memocomp>
            </div>
        )
    }
}

export default ParentComp

import React, {Component}  from 'react';

class Welcome extends Component {
    render() {
        const {name, place} = this.props
        return (
        <div>
            <h1>Welcome {name} from {place}</h1>
            {this.props.children}
        </div>
        )
    }
}

export default Welcome
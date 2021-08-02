import React from 'react';

// function Greet() {
//     return <h1>Hello Vinaya</h1>
// }

const Greet = props => {
    const {name, place} = props
    return (
    <div>
        <h1>Hello {name} from {place}</h1>
    {/* {   props.children} */}
    </div>
    )
}
export default Greet
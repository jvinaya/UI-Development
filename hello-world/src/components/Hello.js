import React from 'react';

// function Greet() {
//     return <h1>Hello Vinaya</h1>
// }

const Hello = () => {
// with JSX
    // return(
    // <div className='DummyClass'>
    //     <h1>Hello Vinaya</h1>
    // </div>
    // )

// without JSX
    return React.createElement('div', {id: 'hello', className: 'DummyClass'}, React.createElement('h1', null, 'Hello Vinaya'))

}
export default Hello
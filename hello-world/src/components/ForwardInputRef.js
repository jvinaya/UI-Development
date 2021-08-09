import React from 'react'

// function ForwardInputRef() {
//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }
const ForwardInputRef = React.forwardRef((props, ref) => {
    return (
    <div>
        <input type='text' ref={ref}></input>
    </div>
)
}) 

export default ForwardInputRef

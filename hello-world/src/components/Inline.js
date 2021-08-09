import React from 'react'

function Inline() {
    const heading = {
        fontSize: '74px',
        color: 'blue'
    }
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h2 style={heading}>Inline</h2>
        </div>
    )
}

export default Inline

import React from 'react'

function Memocomp({name}) {
    console.log('Rendering Memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memocomp)

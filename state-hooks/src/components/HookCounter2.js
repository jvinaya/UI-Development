import React, {useState} from 'react'

function HookCounter2() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)

    const increment5 = () => {
        for(let i=0; i<5; i++) {
            setCount(prevState => prevState+1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState+1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState-1)}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    )
}

export default HookCounter2

import React from "react";
import { useState } from "react";

const Counter = function() {
    const [count, setCount] = useState(5)

    const increment = () => {
        setCount(count + 1)
    }

    const dicrement = () => {
        setCount(count - 1)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={dicrement}>-</button>
        </>
    )
}

export default Counter
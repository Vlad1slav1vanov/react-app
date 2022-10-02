import React, { useState } from "react";

const Textinput = () => {
    const [value, setValue] = useState('ANY TEXT')
    return (
        <div className="Textinput">
            <h1>{value}</h1>
            <input 
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            >

            </input>
        </div>
    )
}

export default Textinput
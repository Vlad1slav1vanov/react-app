import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState('any text')

  function increment() {
    setLikes(likes + 1)
  }

  function dicrement() {
    setLikes(likes -1)
  }
  return (
    <>
    <h1>{likes}</h1>
    <h1>{value}</h1>
    <input 
      type="text" 
      value={value}
      onChange={event => setValue(event.target.value)}>
    </input>
    <button onClick={increment}>+</button>
    <button onClick={dicrement}>-</button>
    </>
  );
}

export default App;

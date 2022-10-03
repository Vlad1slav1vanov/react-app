import Counter from "./components/Counter";
import Textinput from "./components/Textinput";
import Postslist from "./components/Postslist";
import "./styles/App.css";
import { useState } from "react";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import { useRef } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript1", body: "description" },
    { id: 2, title: "JavaScript2", body: "description" },
    { id: 3, title: "JavaScript3", body: "description" }
  ])

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <Counter />
      <Textinput />
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          type="text" 
          placeholder="Заголовок поста"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        {/* Неуправляемый компонент */}
        <MyInput 
          type="text" 
          placeholder="Текст поста"
          value={body}
          onChange={event => setBody(event.target.value)}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <Postslist posts={posts} title="Список постов про JS"/>
    </div>
  );
}

export default App;

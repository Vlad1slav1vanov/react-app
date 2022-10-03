import Counter from "./components/Counter";
import Textinput from "./components/Textinput";
import Postslist from "./components/Postslist";
import "./styles/App.css";
import { useState } from "react";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript1", body: "description" },
    { id: 2, title: "JavaScript2", body: "description" },
    { id: 3, title: "JavaScript3", body: "description" }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <Counter />
      <Textinput />
      <PostForm create={createPost}/>
      <Postslist posts={posts} title="Список постов про JS"/>
    </div>
  );
}

export default App;

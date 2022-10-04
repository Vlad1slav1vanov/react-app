import Postslist from "./components/Postslist";
import "./styles/App.css";
import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "ddd" },
    { id: 2, title: "JavaScript2", body: "description" },
    { id: 3, title: "bb", body: "ff" }
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    console.log('отработала функция getsortedposts')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <MyButton style={{margin: "25px, 0"}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
        <Postslist remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
    </div>
  );
}

export default App;

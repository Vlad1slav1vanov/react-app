import Postslist from "./components/Postslist";
import "./styles/App.css";
import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "ddd" },
    { id: 2, title: "JavaScript2", body: "description" },
    { id: 3, title: "bb", body: "ff" }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('отработала функция getsortedposts')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }

    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <MyInput 
      placehoder="Поиск"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      />
      <MySelect 
      value={selectedSort}
      onChange={sortPosts}
      defaultValue="Сортировка"
      options={[
        {value: "title", name: "По названию"},
        {value: "body", name: "По описанию"} 
      ]}
      />
      {sortedAndSearchedPosts.length !== 0
        ? 
        <Postslist remove={removePost} posts={sortedAndSearchedPosts} title="Список постов про JS"/>
        : 
        <h1 style={{textAlign: "center"}}>Посты не найдены;(</h1>
      }
    </div>
  );
}

export default App;

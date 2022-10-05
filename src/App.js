import Postslist from "./components/Postslist";
import "./styles/App.css";
import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PosService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PosService.getAll();
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [filter])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
      {postError && 
        <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <Postslist remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
      }
    </div>
  );
}

export default App;

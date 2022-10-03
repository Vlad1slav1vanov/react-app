import React from "react";
import MyInput from "./UI/Input/MyInput";
import { useState } from "react";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <form>
        {/* Управляемый компонент */}
        <MyInput 
          type="text" 
          placeholder="Заголовок поста"
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
        />
        {/* Неуправляемый компонент */}
        <MyInput 
          type="text" 
          placeholder="Текст поста"
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;
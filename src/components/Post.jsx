import React from "react";
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = (props) => {
    const navigate = useNavigate();
    
    const handleClick = () => navigate(`/posts/${props.post.id}`)

    return (
        <div className="post">
            <div className="post__description-wrapper">
                <h2>{props.post.id}. {props.post.title}</h2>
                <p>
                    {props.post.body}
                </p>
            </div>
            <div className="post__buttons-wrapper">
                <MyButton onClick={handleClick}>Open Post</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default Post;


import React from "react";
import MyButton from "./UI/Button/MyButton";

const Post = (props) => {
    return (
        <div className="post">
            <div>
                <h2>{props.number}. {props.post.title}</h2>
                <p>
                    {props.post.body}
                </p>
            </div>
            <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
    )
}

export default Post;


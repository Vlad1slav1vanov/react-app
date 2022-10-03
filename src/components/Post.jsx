import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <div>
                <h2>{props.number}. {props.post.title}</h2>
                <p>
                    {props.post.body}
                </p>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default Post;


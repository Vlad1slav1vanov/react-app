import React, { useEffect, useState } from "react";
import MyButton from "../components/UI/Button/MyButton";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const Fullpost = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>Cтраница поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader></Loader>
                : <div><h2>{post.id}.{post.title}</h2><p>{post.body}</p></div>
            }
            <h2>Комментарии к посту</h2>
            {
                isComLoading
                    ? <Loader></Loader>
                    : <div>
                        {comments.map(comm => 
                            <div>
                                <h3>{comm.name}</h3>
                                <h4>{comm.email}</h4>
                                <p>{comm.body}</p>
                            </div>
                            )}
                    </div>
            }
        </div>
    )
}

export default Fullpost;
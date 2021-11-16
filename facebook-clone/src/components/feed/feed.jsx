import React, { useEffect,useState } from 'react'
import './feed.scss'
import MessageSender from './messageSender/messageSender'
import Stories from './stories/stories'
import Post from './post/post';
import db from "../../jses/Firebase"

const Feed = () => {
    const [posts, setPosts]=useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    },[]);

    return (
        <div className="feed">
            <div className="feed__stories">
                <Stories/>
            </div>
            <MessageSender/>
            
            {posts.map(post => (
                <Post
                key={post.data.id}
                profilePic = {post.data.profilePic}
                message= {post.data.message}
                timestamp = {post.data.timestamp}
                username = {post.data.username}
                image = {post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed

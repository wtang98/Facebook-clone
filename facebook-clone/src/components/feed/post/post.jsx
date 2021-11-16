import { Avatar } from '@material-ui/core'
import { AccountCircle, ExpandMoreOutlined, ChatBubbleOutline, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './post.scss'

const Post = (props) => {
    const {profilePic, image, username, timestamp, message} = props

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__top-avatar"/>
                <div className="post__top-info">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt={image} />
            </div>

            <div className="post__options">
                <div className="post__options-option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post__options-option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post__options-option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post__options-option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Post

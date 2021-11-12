import React from 'react'
import './feed.scss'
import MessageSender from './messageSender/messageSender'
import Stories from './stories/stories'
import Post from './post/post';

const Feed = () => {
    return (
        <div className="feed">
            <Stories/>
            <MessageSender/>
            
            <Post 
            profilePic="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/122394197_3751838574839914_2571262255044551134_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lf-v-Ha8aB8AX-XxRMG&_nc_ht=scontent-lhr8-2.xx&oh=f9f3a0ef332b8243ede167ab6be0e89f&oe=61AF5B1D"
            message="this works"
            timestamp="time"
            username="Wei-Tong Tang"
            image= "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            />
            <Post 
            profilePic="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            message="this works"
            timestamp="time"
            username="Anon"
            />
        </div>
    )
}

export default Feed

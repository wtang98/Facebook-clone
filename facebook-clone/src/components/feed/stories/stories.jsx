import React from 'react'
import './stories.scss'
import Story from './story/story'

const Stories = () => {
    return (
        <div className="stories">
            <Story image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            profileSrc="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/122394197_3751838574839914_2571262255044551134_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lf-v-Ha8aB8AX-XxRMG&_nc_ht=scontent-lhr8-2.xx&oh=f9f3a0ef332b8243ede167ab6be0e89f&oe=61AF5B1D"
            title="Wei-Tong"
            />
            <Story image = "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
            profileSrc="https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/14/asset/buzzfeed-prod-web-01/sub-buzz-29565-1548270460-1.png?output-format=auto&output-quality=auto"
            title="Harold"
            />
            <Story image = "data:image/jpeg;base64,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"
            profileSrc="https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-31148-1548266852-1.jpg?output-format=auto&output-quality=auto"
            title="Roll Safe"
            />
            <Story image = "https://miro.medium.com/max/1400/1*7-f2JsSOV6YKtuxMjgSkbg.jpeg"
            profileSrc="https://www.highlandernews.org/wp-content/uploads/2016/02/ops.meme_.nba_-768x576.jpg"
            title="huh??"
            />
            <Story image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDOksrwN7pDuGkNIgqdqVU4okmutHU4P9DA&usqp=CAU"
            profileSrc="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
            title="Pepe"
            />
            <Story image = "http://pm1.narvii.com/6722/1224d143b8d165025dc539dd3b3e92bb865d5ba6_00.jpg"
            profileSrc="https://cdn.vox-cdn.com/thumbor/2FlvnDEQTp68P8IJSKOwjwPGHEY=/0x0:2040x1360/625x625/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61875021/npcmeme.0.jpg"
            title="Anon"
            />
        </div>
    )
}

export default Stories
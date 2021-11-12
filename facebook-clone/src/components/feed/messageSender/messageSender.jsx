import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, {useState} from 'react'
import './messageSender.scss'

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
        setImageUrl('');
    };

    return (
        <div className="message">
            <div className="message__top">
                <Avatar/>
                <form>
                    <input type="text" 
                    value = {input}
                    onChange={(e)=> setInput(e.target.value)}
                    className="message__top-input"
                    placeholder={`What's on your mind?`}/>
                    <input type="text" 
                    value={imageUrl}
                    onChange={(e)=> setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden
                    </button>
                </form>
            </div>
            
            <div className="message__bottom">
                <div className="message__bottom-option">
                    <Videocam style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="message__bottom-option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="message__bottom-option">
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

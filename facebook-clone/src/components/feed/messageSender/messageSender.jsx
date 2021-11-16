import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, {useState} from 'react'
import './messageSender.scss'
import { useStateValue } from '../../../jses/StateProvider';
import db from '../../../jses/Firebase';
import firebase from 'firebase/compat/app';

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch ]= useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput('');
        setImageUrl('');
    };

    return (
        <div className="message">
            <div className="message__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input type="text" 
                    value = {input}
                    onChange={(e)=> setInput(e.target.value)}
                    className="message__top-input"
                    placeholder={`What's on your mind ${user.displayName}?`}/>
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

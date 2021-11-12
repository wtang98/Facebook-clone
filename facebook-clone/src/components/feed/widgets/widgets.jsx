import { ArrowDropDown, MoreHoriz, Search, VideoCall } from '@material-ui/icons'
import React from 'react'
import './widgets.scss'

const Widgets = () => {


    return (
        <div className="widgets">
            <div className="widgets__contacts">
                <div className="widgets__contacts-top">
                    <h2>Contacts</h2>
                    <div className="widgets__contacts-top-items">
                        <VideoCall/>
                        <Search/>
                        <MoreHoriz/>
                    </div>
                </div>
                <div className="widgets__contacts-bottom">
                    <p>See all (27) </p><ArrowDropDown/>
                </div>
            </div>
        </div>
    )
}

export default Widgets

import React from 'react'
import './sidebar.scss'
import SidebarRow from './sidebar-row/sidebar-row'

import { EmojiFlags, LocalHospital, VideoLibrary, People, Chat, Storefront,ExpandMoreOutlined } from '@material-ui/icons'

const Sidebar = () => {

    // const sidebarstuff = 

    return (
        <div className='sidebar'>
            <SidebarRow src="" title="Wei-Tong Tang"/>
            
            <SidebarRow Icon = {LocalHospital} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlags} title = "Pages"/>
            <SidebarRow Icon={People} title = "Freinds"/>
            <SidebarRow Icon={Chat} title = "Messenger"/>
            <SidebarRow Icon={Storefront} title = "Marketplace"/>
            <SidebarRow Icon={VideoLibrary} title = "Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title = "More"/>
        </div>
    )
}

export default Sidebar

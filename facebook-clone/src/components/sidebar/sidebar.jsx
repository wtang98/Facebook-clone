import React from 'react'
import './sidebar.scss'
import SidebarRow from './sidebar-row/sidebar-row'

import { EmojiFlags, LocalHospital, VideoLibrary, People, Chat, Storefront,ExpandMoreOutlined } from '@material-ui/icons'

const Sidebar = () => {

    // const sidebarstuff = 

    return (
        <div className='sidebar'>
            <SidebarRow src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/122394197_3751838574839914_2571262255044551134_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lf-v-Ha8aB8AX-XxRMG&_nc_ht=scontent-lhr8-2.xx&oh=f9f3a0ef332b8243ede167ab6be0e89f&oe=61AF5B1D" title="Wei-Tong Tang"/>
            
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

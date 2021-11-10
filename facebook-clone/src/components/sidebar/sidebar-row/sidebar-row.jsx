import { Avatar } from '@material-ui/core';
import React from 'react'
import './sidebar-row.scss';

const SidebarRow = (props) => {
    const {title, src, Icon}=props
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow

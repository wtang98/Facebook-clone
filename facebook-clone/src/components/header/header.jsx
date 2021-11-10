import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home';
import Flag from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    return ( 
        <div className="header">

            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png" alt="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png" />
                <div className="header__left-input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__center">
                <div className="header__center-option active">
                    <HomeIcon/>
                </div>
                <div className="header__center-option active">
                    <Flag/>
                </div>
                <div className="header__center-option active">
                    <SubscriptionsOutlined/>
                </div>
                <div className="header__center-option active">
                    <StorefrontOutlined/>
                </div>
                <div className="header__center-option active">
                    <SupervisedUserCircle/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__right-info">
                    <Avatar/>
                    <h4>Wei-Tong Tang</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default Header
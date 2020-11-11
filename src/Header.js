import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useStateValue } from "./StateProvider";

function Header() {
   const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
      
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>      
      
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PeopleOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <div className="header__info">
          <Avatar src={user.photoURL}/>
          {/* <h4>{user.displayName}</h4> */}
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
      <SidebarRow Icon={PeopleOutlinedIcon} title="Friends" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
    </div>
  )
}

export default Sidebar

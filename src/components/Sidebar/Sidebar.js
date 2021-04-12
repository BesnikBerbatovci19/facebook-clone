import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fprn1-1.fna.fbcdn.net/v/t1.0-9/123197150_1680387612140157_8726273296675173383_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3cC0ti1QWCMAX_bjWrv&_nc_ht=scontent.fprn1-1.fna&oh=ebf8ec505275c65ee09c615b71355991&oe=60884B2B" 
            title="Besnik Berbatovci"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Marketpalce"/>

        </div>
    )
}

export default Sidebar

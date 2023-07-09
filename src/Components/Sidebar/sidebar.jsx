import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyLogo from '../../assets/images/spotifyLogo.svg'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"For you",
        },
        {
            path:"/top",
            name:"Top Tracks",
        },
        {
            path:"/favorites",
            name:"Favorites",
        },
        {
            path:"/profile/history",
            name:"Recently Played",
        }
       
    ]
    return (
        <div className="container">
           <div className="sidebar">
               <div className="top_section">
                   <div style={{display: isOpen ? "block" : "none"}} className="logo">
                        <img src={SpotifyLogo} alt="logo"/>
                   </div>
        
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           {/* <div className="icon">{item.icon}</div> */}
                           <div style={{display: isOpen ? "block" : "none"}} activeclassName="active" className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
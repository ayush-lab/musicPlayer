import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyLogo from '../../assets/images/spotifyLogo.svg'
import {redirectRoute} from "../../redux/action/action"
import { connect, useDispatch } from "react-redux";
import './sidebar.css'

const Sidebar = (props) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const dispatch = useDispatch();

    const menuItem=[
        {
            path:"/",
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
            path:"/history",
            name:"Recently Played",
        }
       
    ]

    const redirectionHandler=(data)=>{
        dispatch(redirectRoute(data))
    }


    const currentPath = props?.data?.filter?.path
    
    return (
        <div className="container">
           <div className="sidebar">
               <div className="top_section">
               
               <div className="collapseMenu">
                    <div className={"hamburger"} onClick={()=>setIsOpen((prev)=>!prev)}>
                        <i className="fa-solid fa-bars on" id="on"></i>
                    </div>

                    <div className={isOpen ? "menu" : "menuOpen" }>
                        <div className="navigation">
                            <div onClick={()=>setIsOpen((prev)=>!prev)}>
                                <i class="fa fa-window-close" aria-hidden="true"></i>
                            </div>
                            {
                                menuItem.map((item, index)=>{
                                var activeClass = currentPath === item.path ? "link_text active link" : "link_text link"

                            return(

                                    <div key={index}
                                            onClick={()=>redirectionHandler(item.path)}
                                            className={activeClass}>{item.name}
                                        </div>
                                )})
                            }
                        </div>
                    </div>
                </div>


                   <div className="logo">
                        <img src={SpotifyLogo} alt="logo"/>
                   </div>
        
               </div>
               <div className="sidebarMenu">
                    {
                        menuItem.map((item, index)=>{
                            var activeClass = currentPath === item.path ? "link_text active link" : "link_text link"

                        return(

                                <div key={index}
                                        style={{display: isOpen ? "block" : "none"}} 
                                        onClick={()=>redirectionHandler(item.path)}
                                        className={activeClass}>{item.name}
                                    </div>
                        )})
                    }
               </div>
           </div>
           <main>{props.children}</main>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(Sidebar)
  );


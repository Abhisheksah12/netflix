import { useEffect, useState } from "react";
import React from 'react'
import "./Navbar.css"
function Navbar() {
    const [show , handleShow] = useState(false);

    const transitionNavbar =()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=> window.removeEventListener("scroll",transitionNavbar);
    },[]);
  return (
    
    <div className={`nav ${show &&`nav__black`}`}>
        <div className='nav__contents'>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
        </div>

        
    </div>
  )
}

export default Navbar
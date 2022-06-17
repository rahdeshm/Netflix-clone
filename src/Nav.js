import React, {useState,useEffect} from 'react';
import "./Nav.css"


function Nav() {
    const[show,handleShow]=useState(false);
  
    const transitionNavBar=()=>{
         if(window.scrollY>100){
             handleShow(true)
         }
         else{
             handleShow(false)
         }
    }
    
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => {
            window.removeEventListener('scroll',transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}> 
          <div className="nav_contents">
          <img 
           className="nav__logo"
           src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png" 
           alt="netfilx logo" 
        />
        <img className="nav__avatar"
           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
           alt="netfilx logo" 
           />
        
       
          </div>
       
        </div>
    )
}

export default Nav

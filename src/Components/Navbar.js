import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import {IconContext, icons} from 'react-icons/lib';


function Navbar() {
    const [click, setClick]=useState(false);
    const [button , setButton]=useState(true);

    const handClick=()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton();
    },[]);
    

    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className='navbar'>
           <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
               Logo  
            </Link> 
            <div className='menu-icon' onClick={handClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                   <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       Home
                   </Link>
                </li>
                <li className="nav-item">
                   <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}> 
                      Blogs
                   </Link>
                </li>
                <li className="nav-item">
                   <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                       Portfolio
                   </Link>
                </li> 
                <li className="nav-item">
                   <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                       Contact Us
                   </Link>
                </li> 
            </ul>
            </div>    
           </div> 
           </IconContext.Provider>
        </>
    )
}

export default Navbar
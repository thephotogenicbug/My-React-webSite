import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = ()=>{

    return(
        <nav>
            <ul>
            <li><Link  to="/" className="pagelink">Home</Link></li>
            <li><Link  to="" className="pagelink">Blogs</Link></li>
            </ul>
        </nav>
    )
}
export default Header;
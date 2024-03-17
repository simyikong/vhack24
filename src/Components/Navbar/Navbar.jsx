// import React from'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({theme,setTheme}) => {
    const toggle_mode = () => {
        theme=='light'?setTheme('dark'):setTheme('light');
    }
    return (
        <div className='navbar'>
            <img src={theme ==='light' ? logo_light : logo_dark} alt="" className='logo'/>
            <ul>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/AI">AI</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Community">Community</NavLink>
                </li>
                <li>
                    <NavLink to="/Budget">Budget</NavLink>
                </li>
            </ul>

            <div className='profile-icon' >
                <FontAwesomeIcon icon={faUser} />
                <div className='dropdown-menu'>
                <NavLink to="/RegistrationForm">RegistrationForm</NavLink>
                <br></br>
                <NavLink to="/SignInForm">SignInForm</NavLink>
                <br></br>
                <NavLink to="/Profile">Profile</NavLink>
                </div>
            </div>
                  

            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={theme ==='light' ? search_icon_light : search_icon_dark} alt=""/>
            </div>

            <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>
        </div>
    )
}

export default Navbar;
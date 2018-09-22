import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const navbar = (props) => (
    <div id='Nav'>
        <div id='NavBar' className='ui pointing secondary menu'>
        <h3 className='item'>NYT Scraper</h3>
            <Link to='/'>
                <div className='active item'>Home</div>
            </Link>
            <Link to='/saved'>
                <div className='item'>Saved</div>
            </Link>
        
        </div>
    </div>
)


export default navbar;
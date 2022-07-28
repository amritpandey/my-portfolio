import React from 'react';
import Portfolio from '../images/portfolio.png';

export const Header = () => {
    return (
        
            <nav className='navBar'>
                <div className='logo'>
                    <img src={Portfolio} alt='logo-portfolio'/>
                </div>
                <div className='navigation'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>Portfolio</a></li>
                    <li><a href='#home'>Resume</a></li>
                    <li><a href='#home'>Contact</a></li>
                </ul>
                </div>
            </nav>
       
    )
}

import React from 'react'
import './style.css'
import logoGitHub from '../../assets/logoGitHub.png'

const Header = () => {
    return (
        <header className='backgroundHeader'>
            <img src={logoGitHub} alt="GitHub" className='logoImg' />
            <input type="text" className='searchInput' placeholder='Search or jump to...'/>
            <ul className='navList'>
                <li className='listItem'>Pull requests</li>
                <li className='listItem'>Issues</li>
                <li className='listItem'>Marketplace</li>
                <li className='listItem'>Explore</li>
            </ul>
        </header>
    )
}

export default Header
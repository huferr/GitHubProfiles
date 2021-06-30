import React, {useState, useEffect} from 'react'
import { useNavigate } from "@reach/router"
import { useHistory } from "react-router-dom";

import './style.css'
import logoGitHub from '../../assets/logoGitHub.png'

const Header = () => {
    const [search, setSearch] = useState('')

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        
        const armazenar = (username='string', valor='string') => {
            localStorage.setItem(username, valor)
        }

        armazenar('username', search)
    }

    return (
        <header className='backgroundHeader'>
            <img src={logoGitHub} alt="GitHub" className='logoImg' />
            <form onSubmit={handleSubmit}>
                <input type="text" className='searchInput' value={search} placeholder='Search or jump to...' onChange={e => setSearch(e.currentTarget.value)} />
            </form>
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
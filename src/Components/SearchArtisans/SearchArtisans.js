import React from 'react'
import { MenuIcon, SearchIcon } from '@heroicons/react/solid'
import './SearchArtisans.css'

function SearchArtisans() {
    return (
        <div className='sa-container'>
            <header>
                <MenuIcon width='30px' color='#800080FF'/>
                <h2>Skish</h2>
                <h3>Login</h3>
            </header>
            
            <div className="search-section">
                <form action="">
                    <div className="search-box">
                        <SearchIcon width='30px' color='rgba(200,200,200)'/>
                        <input type="text" name="search" id="search" placeholder='Search for artisan' />
                    </div>
                    <button type="submit">Search</button>
                    <p className='base-text'>Are you a skilled worker? <span>Sign Up</span></p>
                </form>
            </div>
        </div>
    )
}

export default SearchArtisans

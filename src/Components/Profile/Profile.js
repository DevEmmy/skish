import React from 'react'
import { UserCircleIcon } from '@heroicons/react/solid'
import './Profile.css'

function Profile() {
    return (
        <div className='profile-container'>
            <div className="user-details">
                <UserCircleIcon width='35px'/>
                <div className="text">
                    <h3> John Doe</h3>
                    <p>johndoe@gmail.com</p>
                </div>    
            </div> 

            <div className='dark-space' />

            <div className="subsection">
                <ul>
                    <li>My Account</li>
                    <li>My Adverts</li>
                    <li>Settings</li>
                    <li>About</li>
                    <li>Suport</li>
                    <li>Logout</li>
                </ul>
            </div>           
        </div>
    )
}

export default Profile

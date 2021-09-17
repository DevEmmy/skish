import React from 'react'
import { BeakerIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import './Auth.css'

function SignIn() {
    return (
        <div className='auth_page'>
            <header>
                <ArrowLeftIcon width='25px'/>
                <h3>Login</h3>
            </header>

            <form>
                <input type="email" name="email" id="email" placeholder='Email'/>
                <input type="password" name='password' placeholder='Password'/>

                <button type="submit">Login</button>
                <div className="forgot__password">
                <a href="#">Forgotten Password</a>
            </div>
            </form>
            

            <div className="login__options">
                <div className="option">
                    Sign In with Google
                </div>

                <div className="option">
                    Sign In with Facebook
                </div>
            </div>
        </div>
    )
}

export default SignIn

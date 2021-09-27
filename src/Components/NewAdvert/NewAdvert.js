import React from 'react'
import {ArrowLeftIcon}  from '@heroicons/react/solid'
import './NewAdvert.css'

function NewAdvert() {
    return (
        <div>
            <header>
                    <ArrowLeftIcon width='24px' color='#800080FF'/>

                    <h3>New Advert</h3>
            </header>

            <form action="">
                <input type="text" name="title" placeholder='Title' />
                <input type="text" name='type' placeholder='Type'/>
                <input type="text" name="traffic" placeholder="Traffic" />
                <input type="number" name="days" placeholder='Days' />
                <p>This advert would run for 5 days and costs #000</p>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default NewAdvert

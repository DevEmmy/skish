import { ArrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import './EditProfile.css'

function EditProfile() {
    return (
        <div>
            <header>
                <ArrowLeftIcon width='25px' />
                <h4> Save </h4>
            </header>

            <form action="">
          
                <input type="text" name="first-name" placeholder="First Name" />

                <input type="text" name="title" placeholder="Location" />

                <textarea name="description" placeholder="Description" id='description' />

                <textarea type="text" name="price-info" placeholder="Price Info" id='price-info'/>

                <input type="number" name="whatsapp" placeholder="WhatsApp Info" />

                <input type="text" name="contact" placeholder="Placeholder" />
            </form>
        </div>
    )
}

export default EditProfile

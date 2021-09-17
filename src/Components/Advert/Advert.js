import React from 'react'
import './Advert.css'
import { DotsVerticalIcon , UploadIcon} from '@heroicons/react/solid'


function Advert() {
    return (
        <div>
            <div className="heading">
                <h1>Adverts</h1>

                <div className="hamburger">
                    <DotsVerticalIcon width='25px' color='white'/>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <UploadIcon width='100px'/> 
                   <div className="advert">
                        
                    <div className="top">
                        <h3>3 Days Search</h3>
                        <p>WhatsApp Click</p>
                    </div>
                            
                    <div className="bottom">

                    </div>
                        
                </div>
                </div>
                
                <div className="content">
                    <UploadIcon width='100px'/> 
                   <div className="advert">
                        
                    <div className="top">
                        <h3>3 Days Search</h3>
                        <p>WhatsApp Click</p>
                    </div>
                            
                    <div className="bottom">

                    </div>
                        
                </div>
                </div>

                <div className="content">
                    <UploadIcon width='100px'/> 
                   <div className="advert">
                        
                    <div className="top">
                        <h3>3 Days Search</h3>
                        <p>WhatsApp Click</p>
                    </div>
                            
                    <div className="bottom">

                    </div>
                        
                </div>
                </div>
            </div>

            

        </div>
    )
}

export default Advert

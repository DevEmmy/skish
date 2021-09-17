import React from 'react'
import './SkillList.css'
import {TrashIcon, StarIcon, LocationMarkerIcon}  from '@heroicons/react/solid'

function SkillList() {
    return (
        <div className='container-skill'>
            <div className="head">
                Skills
            </div>

            <div className="skills-container">
                <div className="skill">
                    <img src="https://cdn.nohat.cc/thumb/f/720/comvecteezy546107.jpg" alt="" />
                    <p>Fashion Designing</p>
                </div>

                <div className="skill">
                    <img src="https://cdn.nohat.cc/thumb/f/720/comvecteezy546107.jpg" alt="" />
                    <p>Fashion Designing</p>
                </div>

                <div className="skill">
                    <img src="https://cdn.nohat.cc/thumb/f/720/comvecteezy546107.jpg" alt="" />
                    <p>Fashion Designing</p>
                </div>

                <div className="skill">
                    <img src="https://cdn.nohat.cc/thumb/f/720/comvecteezy546107.jpg" alt="" />
                    <p>Fashion Designing</p>
                </div>
            </div>

            <div className="articians">
                <h3>Articians Around</h3>

                <div className="articians-content">
                    <img src="https://bellroy-product-images.imgix.net//bellroy_dot_com_gallery_image/USD/WNSC-BLK-301/0" alt="" />

                    <div className="details">
                        <div className="sub-details">
                            <div className="sub-details-left">
                                <h4>Temitac</h4>
                                <p> <LocationMarkerIcon width='12px'/> Room 2, Asero ...</p>
                            </div>
                            
                            <div className="sub-details-right">
                                <TrashIcon width='20px' color='red'/>
                            </div>
                        </div>

                        <div className="rank">
                            <StarIcon  width='20px' color='rgb(250,250,100)' /> 3.5
                        </div>
                        
                        
                    </div>
                </div>

                <div className="articians-content">
                    <img src="https://bellroy-product-images.imgix.net//bellroy_dot_com_gallery_image/USD/WNSC-BLK-301/0" alt="" />

                    <div className="details">
                        <div className="sub-details">
                            <div className="sub-details-left">
                                <h4>Temitac</h4>
                                <p> <LocationMarkerIcon width='12px'/> Room 2, Asero ...</p>
                            </div>
                            
                            <div className="sub-details-right">
                                <TrashIcon width='20px' color='red'/>
                            </div>
                        </div>

                        <div className="rank">
                            <StarIcon  width='20px' color='rgb(250,250,100)'/> 3.5
                        </div>
                        
                        
                    </div>
                </div>

                <div className="articians-content">
                    <img src="https://bellroy-product-images.imgix.net//bellroy_dot_com_gallery_image/USD/WNSC-BLK-301/0" alt="" />

                    <div className="details">
                        <div className="sub-details">
                            <div className="sub-details-left">
                                <h4>Temitac</h4>
                                <p> <LocationMarkerIcon width='12px'/> Room 2, Asero ...</p>
                            </div>
                            
                            <div className="sub-details-right">
                                <TrashIcon width='20px' color='red'/>
                            </div>
                        </div>

                        <div className="rank">
                            <StarIcon  width='20px' color='rgb(250,250,100)' /> 3.5
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillList

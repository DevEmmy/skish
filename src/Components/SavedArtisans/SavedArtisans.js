import React from 'react'
import './SavedArtisans.css'
import {DotsVerticalIcon, SearchIcon, TrashIcon, StarIcon, LocationMarkerIcon}  from '@heroicons/react/solid'

function SavedArtisans() {
    return (
        <div>
            <div className="heading">
                <h1>Saved Artisans</h1>

                <div className="hamburger">
                    <DotsVerticalIcon width='25px' color='white'/>
                </div>
            </div>

            <div className="search_container">
                <SearchIcon width='20px' />
                <input type="text" placeholder='Search artisans...'/>
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
                            <StarIcon  width='20px' color='rgb(250,250,100)' /> 3.5
                        </div>
                        
                        
                    </div>
                </div>

        </div>
    )
}

export default SavedArtisans

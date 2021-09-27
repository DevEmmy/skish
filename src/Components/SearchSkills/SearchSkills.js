import React from 'react'
import { MenuIcon, SearchIcon, TrashIcon, StarIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import './SearchSkills.css'

function SearchSkills() {
    return (
        <div>
            <div className="search-section">
                <form action="">
                    <div className="search-box">
                        <SearchIcon width='30px' color='rgba(200,200,200)'/>
                        <input type="text" name="search" id="search" placeholder='Search for skills' />
                    </div>
                </form>
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
    )
}

export default SearchSkills

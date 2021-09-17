import React from 'react'
import './Message.css'
import {ArrowNarrowLeftIcon, UserCircleIcon}  from '@heroicons/react/solid'

function Message() {
    return (
        <div>
            <div className="header">
                <div className="icon">
                    <ArrowNarrowLeftIcon width='20px' />
                </div>
                
                <h2>Messages</h2>
            </div>

            <div className="message_container">
                <div className="message">
                    <UserCircleIcon width='50px' />

                    <div className="text">

                        <div className="left">
                            <h4>John Doe</h4>
                            <p>Yo Bro!</p>
                        </div>

                        <div className="right">
                            <h6>5</h6>
                            <p>20mins ago</p>
                        </div>
                    </div>
                </div>

                <div className="message">
                    <UserCircleIcon width='50px' />

                    <div className="text">

                        <div className="left">
                            <h4>John Doe</h4>
                            <p>Yo Bro!</p>
                        </div>

                        <div className="right">
                            <h6>5</h6>
                            <p>20mins ago</p>
                        </div>
                    </div>
                </div>

                <div className="message">
                    <UserCircleIcon width='50px' />

                    <div className="text">

                        <div className="left">
                            <h4>John Doe</h4>
                            <p>Yo Bro!</p>
                        </div>

                        <div className="right">
                            <h6>5</h6>
                            <p>20mins ago</p>
                        </div>
                    </div>
                </div>

                <div className="message">
                    <UserCircleIcon width='50px' />

                    <div className="text">

                        <div className="left">
                            <h4>John Doe</h4>
                            <p>Yo Bro!</p>
                        </div>

                        <div className="right">
                            <h6>5</h6>
                            <p>20mins ago</p>
                        </div>
                    </div>
                </div>

                <div className="message">
                    <UserCircleIcon width='50px' />

                    <div className="text">

                        <div className="left">
                            <h4>John Doe</h4>
                            <p>Yo Bro!</p>
                        </div>

                        <div className="right">
                            <h6>5</h6>
                            <p>20mins ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message

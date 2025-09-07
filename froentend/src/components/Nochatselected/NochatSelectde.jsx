import React from 'react'
import {MessageSquare}from "lucide-react"
import "./Nochat.css"

const NochatSelectde = () => {
  return (
    <div className='no-chat-selected'>
        <div className="content">
            <div className="icon-wrapper">
                <div className="icon-container">
                <MessageSquare className='icon'/>
                </div>
            </div>
            <h2 className='welcome-title'>welcome to chat</h2>
            <p className="welcome-text">select a concersation from the sidebar to start chatting</p>
        </div>
      
    </div>
  )
}

export default NochatSelectde

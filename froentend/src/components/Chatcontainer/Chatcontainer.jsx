import React, { useEffect } from 'react'
import UseChatStore from '../../Authstore/usechatStore'
import Chatheader from '../chatheader/Chatheader';
import Messagesinput from '../messagesinput/Messagesinput';
import Formatmessagetime from '../../api/utils.js';
import UseAuthStore from '../../Authstore/useAuthStore';
import "./Chatcontainer.css"
const Chatcontainer = () => {
  const {messages,ismessageloading,selectUsers,getmessages}=UseChatStore();
  const {authUser} = UseAuthStore();

  useEffect(()=>{
    getmessages(selectUsers._id)
  },[selectUsers._id,getmessages]);

  if(ismessageloading){
    <div>loading....</div>
  }
  return (
    <div style={{ display:"flex",flexDirection:"column",flex:"1",overflow:"auto"}}>
      <Chatheader/>
        <div className="chat-messages">
          {messages.map((message)=>(
            <div key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}>
                 <div className="chat-image avatar">
                   <div className="avatar-img">
                    <img src={message.senderId === authUser._id ? authUser.profilepic || "./avtar.png" : 
                    selectUsers.profilepic || "./avtar.png"}  alt="profilepic" />
                   </div>
                 </div>
                 <div className="chat-header">
                  <time>
                    {Formatmessagetime(message.createdAt)}
                  </time>
                 </div>
                 <div className="chat-bubble">
                  {message.image && (
                    <img src={message.image} alt="aa" />
                  )}
                  {message.text && <p>{message.text}</p>}
                 </div>
            </div>
          ))}

        </div>
      <Messagesinput/>
    </div>
  )
}

export default Chatcontainer

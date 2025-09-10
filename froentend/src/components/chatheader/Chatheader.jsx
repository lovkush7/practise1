import React from 'react'
import "./Chatheader.css"
import UseAuthStore from '../../Authstore/useAuthStore';
import UseChatStore from '../../Authstore/usechatStore';
import { X } from 'lucide-react';


const Chatheader = () => {
  const {selectUsers, setselecteduser} = UseChatStore();
  const {onlineUser} =UseAuthStore();
  return (
    <div className='chat-header'>
      <div className="chat-header-inner">
        <div className="chat-user">
          <div className="avatar">
            <img src={selectUsers.profilepic || "./avtar.png"} alt={selectUsers.name} />
          </div>
          <div>
            <h3 className='user-name'>{selectUsers.name} </h3>
            <p className="user-status">
              {onlineUser.includes(selectUsers._id) ?"online":"offline" }
            </p>
          </div>
        </div>
        <button style={{padding:"3px", outline:"none",border:"none"}} onClick={()=>setselecteduser(null)}>
         <X/>
        </button>
      </div>
      
    </div>
  )
}

export default Chatheader;

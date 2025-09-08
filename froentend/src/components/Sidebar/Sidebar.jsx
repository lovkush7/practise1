import React, { useEffect } from 'react'
import UseChatStore from '../../Authstore/usechatStore'
import { Users2 } from 'lucide-react';
import "./Sidebar.css"

const Sidebar = () => {
const {Users, selectUsers,   getUser,isuserloading,setselecteduser} =UseChatStore();

const onlineUser =[];

useEffect(()=>{
    getUser()
},[getUser])

if(isuserloading){
    return  <div>loading....</div>
}

  return (
   <aside>
    <div className="sidebar-header">
        <div className="header-content">
            <Users2 className='user-icons'/>
            <span className="header-title">
                contacts
            </span>
        </div>
        {/* todo:onlenefilter  */}
    </div>
    <div className="sidebar-body">
        {Users.map((user)=>(
       <button key={user._id} 
       onClick={()=>setselecteduser(user)}
       className={`user-button ${selectUsers?._id ===user._id ? "active" : ""}` }
       >
        <div className="user-profile">
            <img src={user.profilepic || "./avtar.png"} alt={user.name} className='profile-img' />
            {onlineUser.includes(user._id) && (
                <span className="online-indicator">

                </span>
            )}
        </div>
          <div className="user-info-container">
            <div className="user-full-name">
                {user.name}
            </div>
            <div className="user-status">
                {onlineUser.includes(user._id)?"active":"offline"}
            </div>
          </div>

       </button>
        ))}

    </div>
   </aside>
  )
}

export default Sidebar

import React, { useEffect } from 'react'
import UseChatStore from '../../Authstore/usechatStore'
import Chatheader from '../chatheader/Chatheader';
import Messagesinput from '../messagesinput/Messagesinput';

const Chatcontainer = () => {
  const {messages,ismessageloading,selectUsers,getmessages}=UseChatStore();

  useEffect(()=>{
    getmessages(selectUsers._id)
  },[selectUsers._id,getmessages]);

  if(ismessageloading){
    <div>loading....</div>
  }
  return (
    <div style={{ display:"flex",flexDirection:"column",flex:"1",overflow:"auto"}}>
      <Chatheader/>
      <p>messages...</p>
      <Messagesinput/>
    </div>
  )
}

export default Chatcontainer

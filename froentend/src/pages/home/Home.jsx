import React from 'react'
import "./home.css"
import UseChatStore from '../../Authstore/usechatStore';
import NochatSelectde from '../../components/Nochatselected/NochatSelectde';
import Chatcontainer from '../../components/Chatcontainer/Chatcontainer';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  const {selectUsers} = UseChatStore();
  return (
    <div className='page-container'>
      <div className="page-content">
        <div className="chat-card">
          <div className="chat-container">
            <Sidebar/>

            {!selectUsers ? <NochatSelectde/> : <Chatcontainer/>}
          </div>
        </div>
      </div>
        
      
    </div>

    
    
  )
}

export default Home

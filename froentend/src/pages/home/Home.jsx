import React from 'react'
import "./home.css"
import UseChatStore from '../../Authstore/usechatStore';
import NochatSelectde from '../../components/Nochatselected/NochatSelectde';
import Chatcontainer from '../../components/Chatcontainer/Chatcontainer';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  const {selectUsers} = UseChatStore();
  return (
    <div className='home'>
      <div className="home-container">
        <div className="chat-box">
          <div className="chat-wrapper">
            <Sidebar/>

            {!selectUsers ? <NochatSelectde/> : <Chatcontainer/>}
          </div>
        </div>
      </div>
        
      
    </div>
  )
}

export default Home

import React from 'react'
import "./profile.css";
import UseAuthStore from '../../Authstore/useAuthStore';
import { FaCamera } from "react-icons/fa";

const Profilepic = () => {
  const {authUser,profile,isupdatingProfile} = UseAuthStore();

 const handleimageupdate = async(e)=>{};

  return (
    <div className='container'>
      <div className="form" style={{}}>
        <div className="upper-part">
          <div className="pr">
            <h2>profile</h2>
          </div>
          <div>
            <p>Your profile information</p>
          </div>
        </div>
          <div className="main-part">
           <div className="image">
            <img src={authUser.Profilepic || "./avtar.png"} alt="profilepics" />
            <label htmlFor="avtar-upload">
            <input type="file" accept='image/*' onChange={handleimageupdate} disabled={isupdatingProfile} style={{display:"none"}} />
            <FaCamera className='camera' style={{}} />
            </label>
           </div>
          </div>
      </div>

      
    </div>
  )
}

export default Profilepic

import React, { useState } from 'react'
import "./profile.css";
import UseAuthStore from '../../Authstore/useAuthStore';
import { FaCamera } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profilepic = () => {
  const {authUser,profile,isupdatingProfile} = UseAuthStore();
  const [selectimage,setSelectedimage] = useState(null);

 const handleimageupdate = async(e)=>{
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async ()=>{
    const base64Image = reader.result;
    setSelectedimage(base64Image);
    await profile({profilepic:base64Image})
  };
  }
 };

  return (
    <div className='container'>
      <div className="formm" style={{background:""}}>
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
            <img src={ selectimage|| authUser.Profilepic || "./avtar.png"} alt="profilepics" />
            <label htmlFor="avtar-upload">
            <input type="file" accept='image/*' onChange={handleimageupdate} disabled={isupdatingProfile} style={{display:""}} />
            <FaCamera className='camera' style={{}} />
            </label>
            {/* <p >click the camera to update the profile</p> */}
           </div>
          </div>
          <div className="mid-part">
            <div className="name-info">
              <div className="avtar-name">
              <FaRegUser style={{width:"12px",height:""}} />
              username
              </div>
              <p style={{border:"2px solid black",width:"90%",maxWidth:"500px",height:"30px",display:"flex",alignItems:"center",
              padding:"5px",borderRadius:"15px",color:"#A3A3A3"}} >{authUser?.name}</p>
            </div>
            <div className="name-info">
              <div className="avtar-name">
              <MdEmail style={{width:"12px",height:""}} />
              Email-Address
              </div>
              <p style={{border:"2px solid black",width:"90%",height:"30px",display:"flex",alignItems:"center",padding:"5px",
              borderRadius:"15px",color:"#A3A3A3"}}>{authUser?.email}</p>
            </div>
            <div className="account-imfo">
              <div className="information">
                <h2>Account-information</h2>
                <div style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"}}>
                  <span>Account-Since</span>
                  <span style={{color:"black"}}>{authUser.createdAt?.toISOString().split("T")[0]} </span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"25px"}}>
                  <span>Account status</span>
                  <span style={{color:"green"}}>active</span>
                </div>
              </div>
            </div>
          </div>
      </div>

      
    </div>
  )
}

export default Profilepic

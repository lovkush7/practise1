import React, { useState } from 'react'
import "./signup.css"
import { LuMessageSquareDiff } from "react-icons/lu";

const Signup = () => {
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handlesubmit = (e) => {
    e.preventDefault();
  }

  const handleform = (e)=>{
   console.log(e.target.value);
   SetFormData({...FormData, [e.target.name]:e.target.value})
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div className='left-side' style={{ display: "flex", flexDirection: "column",width:"50%",maxWidth:"500px", justifyContent: "center", alignItems: "center", padding: "6px" }}>
        {/* <div className="left-mid"  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}> */}
          <div className="logo">
            <LuMessageSquareDiff className='logo-mess' />
          </div>
          <div className="logo-dis">
            <h3>Create Account</h3>
            <p>get started with your account</p>
          </div>

        {/* </div> */}
        <form className='form' action="">
          <div className="input">
            <label >Name</label>
            <input type="text" 
            name='name'
            placeholder='Enter your name'
            onChange={handleform}
            />
          </div>
          <div className="input">
            <label >email</label>
            <input type="email" 
            name='email'
            placeholder='Enter your email'
            onChange={handleform}
            />
          </div>
          <div className="input">
            <label >password</label>
            <input type="password" 
            name='password'
            placeholder='Enter your password'
            onChange={handleform}
            />
          </div>
          <div className="input" style={{}}>
            <input type="submit" value={"Signup"} />
          </div>
      
        </form>

      </div>
      <div className="right-side" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "6px" }}>

      </div>

    </div>
  )
}

export default Signup;

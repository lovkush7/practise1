import React from 'react'
import UseAuthStore from '../../Authstore/useAuthStore'
import { Link } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import "./Navbar.css"

const Navbar = () => {

  const {logout,authUser} = UseAuthStore();
  return (
    <div className='navbar'>
      <div className="left">
          <h1>TECHCHALFAL</h1>
      </div>
      <div className="right">
         <Link  to={"/signup"} className='link'>
         <IoSettings />
         <span>Setting</span>
         </Link>

         {authUser  && 
         (
          <>
            <Link to={"/profile"}className='link'>
            <FaUserCircle />
              <span>profile</span>
            </Link>

          <button onClick={logout} className='link-btn'>
          <CiLogout />
             <span> logout</span>
          </button>
          </>
         )
         }
      </div>
    </div>
  )
}

export default Navbar

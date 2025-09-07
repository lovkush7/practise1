import React, { useEffect } from 'react'
import { Navigate, Route,Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
// import Home from './pages/Home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Setting from './pages/setting'
// import Profilepic from './pages/Profilepic'
import Profilepic from './pages/profile/Profilepic'
import UseAuthStore from './Authstore/useAuthStore'
import {Loader} from "lucide-react";
import Home from './pages/home/Home'



const App = () => {
  const {authUser,checkauth,ischeckingAuth} = UseAuthStore();
  

  useEffect(()=>{
    checkauth();
  },
  [checkauth]);

  console.log("the user is"+ authUser);

  if(ischeckingAuth && !authUser){
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Loader style={{fontSize:"10px",animation:"spin"}} />
    </div>
  }

  return (
    <div>

      <Navbar/>


      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to="/signup" /> } />
        <Route path='/login' element={!authUser ? <Login/> : <Navigate to="/" />}  />
        <Route path='/signup' element={!authUser ? <Signup/> : <Navigate to="/" />} />
        <Route path='/setting' element={<Setting/>} />
        <Route path='/profile' element={authUser ? <Profilepic/> : <Navigate to="/login"/>} />

      </Routes>
     
      
    </div>
  )
}

export default App

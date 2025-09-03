import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Setting from './pages/setting'
import Profilepic from './pages/Profilepic'
import UseAuthStore from './Authstore/useAuthStore'
import {Loader} from "lucide-react";



const App = () => {
  const {authUser,checkauth,ischeckingAuth} = UseAuthStore();

  useEffect(()=>{
    checkauth()
  },
  [checkauth]);

  console.log(authUser);

  if(ischeckingAuth && !authUser){
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Loader />
    </div>
  }

  return (
    <div>

      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/setting' element={<Setting/>} />
        <Route path='/profilepic' element={<Profilepic/>} />

      </Routes>
     
      
    </div>
  )
}

export default App

import { create } from "zustand";
import api from "../api/axios";

const UseAuthStore = create((set,get)=>({
authUser:null,
isSigningup:false,
isloggingup:false,
isupdatingProfile:false,
ischeckingAuth: true,
onlineUser:[],
socket:null,

checkauth: async()=>{
    try{
        const response = await api.get("/auth/check");

        set({authUser:response.data});

    }catch(err){
        set({authUser:null});
        console.error("the error is "+err)

    }finally{
        set({ischeckingAuth:false})
    }
},

signup: async (data)=>{
    set({isSigningup:true});
    try{
        const res = await api.post("/auth/signup",data);
        set({authUser:res.data})

    }catch(err){
        console.error("the error is"+err)
    }finally{
        set({isSigningup:false})
    }
},

logout:async ()=>{
    try{
        const response = await api.post("/auth/logout");
        set({authUser:null})
        console.log("logout successfully");
        console.log(response)

    }catch(err){
      console.error('the error is '+err);
    }
},

login:async(data)=>{
    set({isloggingup:true})
    try{
        const response = await api.post("/auth/login",data);
        set({authUser:response.data});
        get().connectsocket();

    }catch(err){
        console.error("the error is"+err)
    }
    finally{
        set({isloggingup:false})
    }

},

profile: async(data)=>{
    set({isupdatingProfile:true})
    try{
        const res = await api.put("/auth/profilepic",data);
        set({authUser:res.data});

    }catch(err){
       console.error("the error is"+err)
    }finally{
        set({isupdatingProfile:false})
    }

},
connectsocket:()=>{}


}));

export default UseAuthStore;
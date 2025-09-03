import { create } from "zustand";
import api from "../api/axios";

const UseAuthStore = create((set)=>({
authUser:null,
isSigningup:false,
isloggingup:false,
isupdatingProfile:false,

ischeckingAuth: true,

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
}


}));

export default UseAuthStore;
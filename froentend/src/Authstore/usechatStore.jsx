import   { create } from "zustand";
import api from "../api/axios";
// import { Users } from "lucide-react";


const UseChatStore = create((set,get)=>({
    messages:[],
    Users:[],
    selectUsers:null,
    ismessageloading:false,
    isuserloading:false,



    getUser:async()=>{
        set({isuserloading:true})
        try{
            const res = await api.get("/messages/user");
            set({Users:res.data.filteruser});

        }catch(err){
            console.error("the error is "+err);
        }finally{
            set({isuserloading:false})
        }
    },

    getmessages:async(userid)=>{
       set({ismessageloading:true})
       try{
        const res = await api.get(`/messages/${userid}`);
        set({messages:res.data});

       }catch(err){
        console.error("the error is"+err);

       }finally{
        set({ismessageloading:false})
       }
    },
    sendmessage:async(messagedata)=>{
      const {messages,selectUsers} = get();
        try{
           const res = await api.post(`/messages/send/${selectUsers._id}`,messagedata)
           set({messages:[...messages,res.data]})
        }catch(err){
            console.error("the error is"+err)
        }
    },

    setselecteduser:async(selectUsers)=>set({selectUsers}),


}));

export default UseChatStore;
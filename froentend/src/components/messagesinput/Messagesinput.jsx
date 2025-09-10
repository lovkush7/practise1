import React, { useRef, useState } from 'react'
import UseChatStore from '../../Authstore/usechatStore';
import "./Message.css"
import { Image } from 'lucide-react';

const Messagesinput = () => {
  const {text,setText} = useState("");
  const {imagePreview,setImagePrewiew} = useState(null);
  const {fileInputRef} = useRef(null);

  const {sendmessage}=UseChatStore();

  const handleImagechange = (e)=>{};

  const removeImage = (e)=>{};

  const handlesendmessage = ()=>{}


  return (
    <div className='message-input'>
      {imagePreview && (
        <div className="preview-wrapper">
          <div className="preview-box">
            <img src={imagePreview} alt="preview" className='preview-image' />
            <button onClick={removeImage} type='button' className='remove-btn'> <span className="remove-icon">
              X</span></button>
          </div>
        </div>
      ) } 
      <form onSubmit={handlesendmessage} className='form-row'>
        <div className="grow">
          <input type="text" 
          className='input-text'
          placeholder='type a message...'
          value={text} 
          onChange={(e)=>setText(e.target.value)}/>

          <input type="file"
          accept='image/*'
          className='hidden'
          ref={fileInputRef}
          onChange={handleImagechange} />

          <button type='button'
          className={`btn btn-circle btnn-sm-hidden ${imagePreview ? 'text-emerald-500' : 'text-zinc-400'}`}
          onClick={()=>fileInputRef.current?.click()}>
           <Image size={20}/>
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default Messagesinput

import React from 'react'
import "./CodeInput.css"

const CodeInput = () => {
  return (
    <div className='wrap-less'>
      <form>
        <input className='less-input'
         type="text"
          maxlenght="1"
         
          />
        <input className='less-input' 
       
        type="text" 
        maxlenght="1"/>
        <input 
        className='less-input'
         type="text"
          maxlenght="1"
         
          />
        <input 
        className='less-input'
         type="text" 
         maxlenght="1"
         
         />
        <input 
        className='less-input' 
        type="text" 
        maxlenght="1"
        
        />
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <div>
        <button>Proceed</button>
        </div>
        </form>
        </div>
  )
}

export default CodeInput

import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
function Register() {
  const handleSubmit=(event)=>
  {
    event.preventDefault();
    alert("form")
  }

const handleChange=(event)=>{

}

  return (
    <>
     <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand"> 
                <img src="" alt=""/>
                <h1>snappy</h1>
            </div>

           <input 
           type="text" 
           placeholder="UserName" 
           name="username" 
           onChange={(e)=>handleChange(e)}
           />
        
        <input 
        type="email" 
           placeholder="Email" 
           name="email" 
           onChange={(e)=>handleChange(e)}
           />
        
        <input 
        type="password" 
           placeholder="Password" 
           name="Password" 
           onChange={(e)=>handleChange(e)}
           />

            <input 
        type="password" 
           placeholder="Confirm Password" 
           name="confirmPassword" 
           onChange={(e)=>handleChange(e)}
           />

          <button type="submit">Create User</button>
           <span>Already have an Account ?<Link to ="/login" >LOGIN</Link></span>

        </form>

    </FormContainer>
  </>)
}


const FormContainer =styled.div``;



export default Register

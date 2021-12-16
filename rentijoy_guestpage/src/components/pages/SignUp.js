import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./signlog.css";
import Navbar from '../Navbar';
 function Signup(){
      
    function handleSubmit(e){  
      e.preventDefault();
      const password=document.getElementById("password");
      const confirmpassword=document.getElementById("confirmpassword");
         
         if(password.value===confirmpassword.value){
           
            console.log("function executed");
           axios.post("http://localhost:4000/user/addUser",{
            userName:document.getElementById("username").value,
             userEmail:document.getElementById("user_mail").value,
             userPassword:document.getElementById("password").value,
             userPhone:document.getElementById("phone_no").value 
            } )
        .then(resp=>{
         alert(resp.data.message);
          console.log("data Stored",resp.data)
          document.getElementById("username").value="";
          document.getElementById("user_mail").value="";
          document.getElementById("password").value="";
          document.getElementById("confirmpassword").value="";
          document.getElementById("phone_no").value="";
        })
        .catch(function(err){
            console.log(err);
            console.log("show error");
        })
      }
        if( password.value!==confirmpassword.value){
          confirmpassword.nextElementSibling.innerHTML="Password mismatch"
        }
        
      }
      

   function onchange(p){
    document.getElementById(p.target.id).nextElementSibling.innerHTML=""
   } 

    return(
       
   <div className="signup">
      
      <Navbar/>
       <div>
          <h2>Sign up</h2>
       </div>
       <form onSubmit={handleSubmit}>
       <div className="main">
       <div className="formElements">
          User Name 
          <input type="text" name="username" id="username" required pattern= '^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$'></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements"> 
          User Email 
          <input type="email" name="user_mail" id="user_mail" required pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
        <div className="formElements">  
          Password 
          <input type="password" name="password" id="password" required pattern="[A-Z]{1}[a-z]{5,}[0-9]{2}" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Confirm password 
          <input type="password" name="confirmpassword" id="confirmpassword"  onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Phone No 
          <input type="tel" id="phone_no" name= "phone_no" required pattern="[5-9]{1}[0-9]{9}" />
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          <button className="btn1"  type="submit">submit</button>
      <div> Already have an account?<Link id="link" to="/login">Login</Link></div>
      </div>
       </div>
       </form>
   </div>
    )}
 
 export default Signup;

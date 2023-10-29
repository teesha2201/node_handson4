import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register()
{ 
    const [userInput,setUserInput] = useState({
        name:"",
        email:"",
        password:"",
        phoneNo:""
    })
    // const [store,setStore] = useState([]);
    const navigate = useNavigate();

   const handleUpdate = (e)=>{
        setUserInput({...userInput,[e.target.name]:e.target.value});
   }
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        console.log(userInput);
      
        axios.post("http://localhost:5001/api/register",userInput)
        .then(res=>{
            console.log(res.data);
            alert(`${res.data.msg}`);
            setUserInput(res.data.msg)
            console.log(store);
            localStorage.setItem("token",res.data.token);
            if(userInput.name.length>=1 && userInput.email.length>=1 && userInput.password.length>=1 && userInput.phoneNo.length>=10)
             {
                navigate('/');
             }
            else{
                alert('please fill all the field properly')
                navigate('/register');
            // navigate('/login')
        })
        .catch(err=>console.log(err));
        console.log(userInput);
        setUserInput({
            name:"",
            email:"",
            password:"",
            phoneNo:""
        })

    }
    return(
        <>
            
           <div className='registerparent'>
                <div className='registerchild'>
                    <form>
                        <h2> Welcome To Registration page </h2>
                        <label htmlFor="fname"> Name:  </label>
                        <input type="text" id="fname" name='name' value={userInput.name} placeholder='enter your name' onChange={handleUpdate} required/>
                        <br/>
                        <label htmlFor="useremail">Email:     </label>
                        <input type="email" id="useremail" name="email" value={userInput.email}  placeholder='enter your email' onChange={handleUpdate} required/>
                        <br/>
                        <label htmlFor="password"> Password:  </label>
                        <input type="text" id="password" name="password"   value={userInput.password} placeholder='enter your password' onChange={handleUpdate} required />
                        <br/>
                        <label htmlFor="phoneNo">Phone No.:   </label>
                        <input type="number" id="phoneNo" name="phoneNo" value={userInput.phoneNo} placeholder='enter your Phone No.' onChange={handleUpdate} required  minLength="10" maxLength="10"></input>
                        <br/>
                        <br/>
                        <button onClick={handleSubmit}>Submit</button>
                        <br/>
                        
                        <h4 style={{color:"blue"}}>OR</h4>
                        
                        <h4 style={{color:"blue"}}>If  User already Registered then login </h4>
                        <button onClick={()=>navigate('/login')}>Login</button>
                    </form >
                </div>
           </div>
        </>
    )
}
export default Register

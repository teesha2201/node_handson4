import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Register()
{ 
    const [userInput,setUserInput] = useState({
        name:"",
        email:"",
        password:"",
        phoneNo:""
    })
    const [store,setStore] = useState([]);
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
            setStore(res.data.msg)
            console.log(store);
            localStorage.setItem("token",res.data.token);
            navigate('/')
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
            <h1>Registration page</h1>
           <form>
                <label htmlFor="fname">Enter your Name:</label>
                <input type="text" id="fname" name='name' value={userInput.name}  onChange={handleUpdate} required/>
                <br/>
                <label htmlFor="useremail">Enter your Email:</label>
                <input type="email" id="useremail" name="email" value={userInput.email} onChange={handleUpdate} required/>
                <br/>
                <label htmlFor="password">Create your password:</label>
                <input type="text" id="password" name="password"   value={userInput.password}  onChange={handleUpdate} required />
                <br/>
                <label htmlFor="phoneNo">Enter your Phone No.:</label>
                <input type="number" id="phoneNo" name="phoneNo" value={userInput.phoneNo} onChange={handleUpdate} required  minlength="10" maxlength="10"></input>
                <button onClick={handleSubmit}>Submit</button>
            </form >
        </>
    )
}
export default Register
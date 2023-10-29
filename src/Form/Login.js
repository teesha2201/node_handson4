import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Login.css"

function Login()
{
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();

    const handleUpdate =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5001/api/login",data)
        .then(res=>{alert(`${res.data.msg}`)
        localStorage.getItem("token",res.data.token) 
        navigate('/home')})
        .catch(err=>console.log(err));
        // navigate('/');
    }
    const handleSignUp =()=>{
        navigate('/register')
    }
    return(
        <>
            
       
            <div className='loginForm'>
            <div className='child'>
                <h2 > Welcome to Login page</h2>
                <form>
            
                    <label htmlFor="useremail"> Email: </label>
                    <input type="email" id="useremail" name="email" value={data.email} onChange={handleUpdate} placeholder='enter your name' required/>
                    <br/>
                    <br/>
                    <label htmlFor="password">Password:  </label>
                    <input type="text" id="password" name="password"  value={data.password}  onChange={handleUpdate} placeholder='create your password' required />
                    <br/>
                    <br/>
                    <button onClick={handleSubmit}>Sign In</button>
                    <br/>
                    <h4 style={{color:"blue"}}>OR</h4>
                    <h4 style={{color:"blue"}}>If not Register then signUp First then Login to page 
                    </h4>
                    <div>
                        <button onClick={handleSignUp}>SignUp</button>
                    </div>
                </form >
            </div>
        </div>
            
        </>
    )
}
export default Login

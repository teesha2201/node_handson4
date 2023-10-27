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
        .then(res=>(alert(`${res.data.msg}`),localStorage.getItem("token",res,data.token),navigate('/')))
        .catch(err=>console.log(err));
        navigate('/');
    }
    const handleSignUp =()=>{
        navigate('/register')
    }
    return(
        <>
            <h1 >Login page</h1>
            <div className='loginForm'>
            <form>
                <label htmlFor="useremail">Enter your Email:</label>
                <input type="email" id="useremail" name="email" value={data.email} onChange={handleUpdate} required/>
                <br/>
                <label htmlFor="password">Create your password:</label>
                <input type="text" id="password" name="password"  value={data.password}  onChange={handleUpdate} required />
                <br/>
                <button onClick={handleSubmit}>Sign In</button>
                <br/>
                <button onClick={handleSignUp}>SignUp</button>
            </form >
            </div>
        </>
    )
}
export default Login
import React ,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

function Home()
{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log(token);
    useEffect(()=>{
        if(token){
        axios.get("http://localhost:5001/api",{headers:{"authorization":`Bearer ${token}`}})
        .then(res=>console.log(res.data))
        }
        else{
            navigate("/login")
        }
    },[token,navigate]);

    const handleClick = ()=>{
        localStorage.removeItem("token");
        navigate('/login');
    }
    return(

        <>
            <div className="homechild">
                <img src='https://i.pinimg.com/736x/80/d5/5c/80d55c64fbf19af55944ba40392e650c.jpg' alt='not found'></img>
                <h1>LogOut your Account <button onClick={handleClick}>Logout</button></h1>
                
            </div>
        </>
    )
}
export default Home
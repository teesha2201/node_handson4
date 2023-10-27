import React from "react";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import "./Routing.css"
function Routing()
{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                <div className="parent">
                    <header className="Navbar">
                    <NavLink to="/" className={"link"} style={({isActive})=>({color: isActive ? "white":"gray"})}>Home</NavLink>
                    <NavLink to="/login" className={"link"} style={({isActive})=>({color: isActive ? "white":"gray"})}>Login</NavLink>
                    <NavLink to="/register" className={"link"} style={({isActive})=>({color: isActive ? "white":"gray"})}>Register</NavLink>
                    </header>
                </div>
            </BrowserRouter>
        </>
    )
}
export default Routing
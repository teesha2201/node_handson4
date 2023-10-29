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
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/"  element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                <div className="parent">
                    <header className="Navbar">
                    <NavLink to="/home" className={"link"} style={({isActive})=>({color: isActive ? "gray":"black"})}>Home</NavLink>
                    <NavLink to="/" className={"link"} style={({isActive})=>({color: isActive ? "gray":"black"})}>Login</NavLink>
                    <NavLink to="/register" className={"link"} style={({isActive})=>({color: isActive ? "gray":"black"})}>Register</NavLink>
                    </header>
                </div>
            </BrowserRouter>
        </>
    )
}
export default Routing

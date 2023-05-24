import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import Navbar1 from "../../../Navbar1.js";

import { useNavigate, NavLink} from "react-router-dom";
const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const recordFunction = () => {
        navigate("/users-record")
    }
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async ()=> {
        axios.post('http://localhost:5000/login',await user)
            .then(res => {
                alert(res.data.message)
                const result = res.data.user;
                setLoginUser(result);
               navigate("/");
                console.log(res.data.message) 
                console.log(result);
            })
            .catch(err => {
                console.log(err.response);
                alert("Something went wrong")
            })
        
       
        
        // axios.post('http://localhost:5000/login', async (user) => {
        //     try {
        //         alert(res.data.message)
        //         const result = await res.data.user;
        //         setLoginUser(result);
        //         navigate("/");
        //         console.log(res.data.message)       
        //     }
        //     catch (e) {
        //         console.log(err);
        //         alert("Something went wrong")
        //     }
        // })

    }
    
    return (
        <div className='head'>
            <div>
                <Navbar1 />
            </div>
            <div className='manishLogin'>
                <button onClick={recordFunction} className="sLogin">Manish Login</button>
            </div>
            <div className='main'>
                <div className='In'>
                    <h1> THIS IS Login PAGE</h1>
                    {/* {console.log(user)} */}
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input type="pasword" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
                    <button className='button' onClick={login}>Login</button>
                    <div className='or'>or</div>
                    <NavLink className="NavClass button" to="/register">Register</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Login;

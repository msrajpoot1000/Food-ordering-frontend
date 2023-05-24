import axios from 'axios';
import { useState } from 'react';
import './register.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate, NavLink } from 'react-router-dom';
import Navbar1 from "../../../Navbar1.js";
import { Button } from 'react-bootstrap';
import EmailSend from "./EmailSend";
// import emailExistence from "./email-existence";
// import axios from './axios';
const Register = () => {
    const navigate = useNavigate();

    const [pass, setPass] = useState("");
    let [random, setRan] = useState();
    let [valOtpBtn, setValOtpbtn] = useState("Send Otp");
    let [InputOtp, setInputOtp] = useState();
    const [sendOtp, verify] = useState(1);
    const [valEmail, NotValMail] = useState(true);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
            })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    const handleChange2 = e => {
        setInputOtp(parseInt(e.target.value));
    }
    function ValidateEmail(mail) {
        // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)* (\.\w{2,3})+$/.test(mail)) {
        //     return (true)
        // }
        // else {
        //     alert("You have entered an invalid email address!")
        //     return (false)
        // }
        return true;
    }




    function ValidatePassword(password) {
        // Initialize variables
        var strength = 0;
        var tips = "";
        // Check password length
        (password.length < 8) ? tips += "Make the password longer. " : strength += 1;
        // Check for mixed case
        (password.match(/[a-z]/)) ? strength += 1 : tips += "Use atlest one lowercase";
        (password.match(/[A-Z]/)) ? strength += 1 : tips += "Use atlest one uppercase letters. ";
        // Check for numbers
        (password.match(/\d/)) ? strength += 1 : tips += "Include at least one number. ";
        // Check for special characters
        (password.match(/[^a-zA-Z\d]/)) ? strength += 1 : tips += "Include at least one special character. ";



        // Return results
        if (strength < 2) {
            alert("Easy to guess. " + tips);
            return false;
        } else if (strength === 2) {
            alert("Medium difficulty. " + tips);
            return false;
        } else if (strength === 3) {
            alert("Difficult. " + tips);
            return false;
        } else if (strength === 4) {
            alert("Difficult. But " + tips);
            return false;
        }
        else {
            return true;
        }


    }


    const register = () => {
        if (InputOtp===random) {
            const { name, email, password, reEnterPassword } = user;
            setPass(password);
            console.log(ValidatePassword(password))
            if (name && email && ValidateEmail(email) && password && ValidatePassword(password) && reEnterPassword && (password === reEnterPassword)) {
                // alert("i complete verify");
                axios.post("http://localhost:5000/register", user)
                    .then(res => {
                        alert(res.data.message)
                        navigate("/login");

                    })
                    .catch(err => {
                        alert(err, "Something went wrong")
                    })
            }
            else {
                // alert("not posted user");
            }
        }
        else {
            alert("otp is not correct");
        }

    }

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

            emailjs.sendForm('msrajpoot1000', 'msrajpoot1001', form.current, 'UbRCrSU_1k2Vj559z')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    
    
    const generateOtp = () => { 
       
        if (sendOtp) {
            setRan(Math.trunc(Math.random() * 1000000));
            setValOtpbtn("Verify")
            verify(0);
        }
        else {
            
        }
        
    }



        return (
            <div className='main'>
                <div>
                    <Navbar1 />
                </div>
                <div className='headRegister'>
                    <div className='register'><h1> THIS IS Register PAGE</h1>
                        <form ref={form} onSubmit={sendEmail}>
                         <input type="text" name="name" placeholder="Enter your Name" onChange={handleChange} ></input> 
                            <input
                                autoComplete="off"
                                required
                                type="email" pattern="[^ @]*@[^ @]*" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"
                            />
                         <input class="otpMess" type="text" placeholder='Enter message' name="message" value={random} />
                            {/* {val ? <p>email not valid</p> : <p>email valid</p>}          */}
                            <div className='otp'>
                                <input className="InOtp" placeholder='otp' name='otp' onChange={handleChange2}></input>
                               
                                <input className='otpBtn' type="submit" value={valOtpBtn} onClick={generateOtp} />                               
                            </div>
                          
                        </form>
                        <input type="pasword" name="password" id="pass" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
                        <input type="pasword" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Enter your re-password"></input>
                        <button className='button' onClick={register}>Register</button>
                        <div className='or'>or</div>
                        <NavLink className="NavClass button loginBtn" to="/login">Login</NavLink>
                    </div>
                </div>
                {/* <EmailSend/> */}
                <div>{random}  random { typeof(random)}</div>
                <div>{InputOtp}   inputField {typeof (InputOtp)}</div>
                
                {/* <div> {Math.trunc(Math.random()*1000000)}</div> */}
                   
            </div>
        )
    }
export default Register;

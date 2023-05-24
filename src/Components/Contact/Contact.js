import { Button, Navbar } from "react-bootstrap";
import Navbar1 from "../Navbar/Navbar1";
import "./Contact.css";
import Contact1 from "./Contact_back.jpeg";
const Contact = () => {
    return (
        <div>
            <Navbar1 />

            <div className="hero-image">
                <div className="hero-text">
                    <h1>Get in Touch</h1>
                    <h5>Gmail : xyz9344@Gmail.com</h5>
                    <h5>Phone : 90034343434</h5>
                    <h6>Address : c-94 ,dev vihar, jaipur</h6>

                    <div>
                        <label className="item">Enter Your Name</label>
                        <input className="item" type="text" placeholder="Enter your name"></input>
                    </div>
                    <div>
                        <label className="item">Enter Your Email</label>
                        <input className="item" type="text" placeholder="Enter your Email"></input>
                    </div>
                    
                    <div>
                        <textarea className="item" >mnaish</textarea>
                    </div>
                    <Button>Send Message</Button>


                </div>
            </div>



        </div>
    )
}
export default Contact;
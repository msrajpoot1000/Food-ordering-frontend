import React from "react";
import "./About.css";
import Team1 from "./team1.jpg";
import Team2 from "./team2.jpg";
import Team3 from "./team3.jpg";
import Navbar1 from "../Navbar/Navbar1";
const About = () => {
    return (
        <div >
            <Navbar1/>
            <div className="about-section">
                <h1>About Us </h1>
                <p className="item">Some text about who we are and what we do.</p>
                <p className="item">Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 >Our Team</h2>
            <div className="main">
            <div className="row container">
                <div className="column">
                    <div className="card">
                        <img src={Team1} alt="Jane"/>
                            <div className="container">
                                <h2>Jane Doe</h2>
                                <p className="title">CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                </div> 
                               
                 <div className="column">
                    <div className="card">
                        <img src={Team2} alt="Mike" />
                            <div className="container">
                                <h2>Mike Ross</h2>
                                <p className="title">Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={Team3} alt="John"/>
                            <div className="container">
                                <h2>John Doe</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                </div>
            </div> 
           </div>
        </div>
            )
}
            export default About;
import './App.css';
import HomePage from './Components/Navbar/LoginAndLogout/component/homepage/homepage.js';
import Login from './Components/Navbar/LoginAndLogout/component/login/login.js';
import Register from './Components/Navbar/LoginAndLogout/component/register/register.js';
import Records from './Components/Navbar/LoginAndLogout/component/main_access/records.js';
import FrontPage from "./FrontPage/Frontpage.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Chefs from './Components/Chefs/Chefs';
import React, { useState } from 'react';
function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      {/* <HomePage/> */}
          <BrowserRouter>
        <Routes>    
          {/* <Route basename={process.env.PUBLIC_URL}></Route> */}
          {/* <Route basename={process.env.PUBLIC_URL} path="/" exact="true" element={user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />      }></Route> */}
          {/* <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route> */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users-record" element={<Records />}></Route>
          <Route path="/FrontPage" element={<FrontPage />}></Route>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/LoginedPage" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/chefs" element={<Chefs />}></Route>
          {/* <Route path="/" basename={process.env.PUBLIC_URL} element={<FrontPage/>}></Route> */}

          </Routes>
      </BrowserRouter>

        
    
    </div>
  );
}

export default App;

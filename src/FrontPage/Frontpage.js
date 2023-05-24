import React from 'react';
import Navbar1 from "../Components/Navbar/Navbar1.js"
import Section1_frontView from "../Components/Section1_frontView/Section1_frontView.js";
import Section2 from '../Components/Section2/Section2.js';
// import Section3_differentDish from "./Components/Section3/Section3_differnentDish.js";
import Section4_chefs from "../Components/Section4_chefs/Section4_chefs.js";
// import Section5_TableRes from "../Components/section5/Section5_TableRes.js";
import Section5_TableRes from "../Components/section5/Section5_TableRes.js"
import Section6 from "../Components/Section6_WeekSpecial/Section6.js";
import Section7_last from "../Components/Section7/Section7_last.js";
import Section3 from "../Components/Section3.1/Section3.js";

import "./Fontpage.css";

const FrontPage = () => {
  return (
    <div className='Front'>
      <Navbar1 />
      <Section1_frontView />
      <Section2 />
      <Section3 />
      <Section4_chefs />
      <Section5_TableRes />
      <Section6 />
      <Section7_last />
    </div>

  )
}
export default FrontPage;
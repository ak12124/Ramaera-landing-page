import React, { useState } from "react";
import Header from "./Header";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
let iconStyle={
  width: "25px",
  height: "25px",
  cursor: "pointer"
}

const HeroSection = () => {
  const [slideNo, setSlideNo] = useState("02");

  
  return (
    <div className="hero-section">
      <Header />
      <div className="hero-section-desc">
        <div className="social-icon">
          <BsTwitter style={iconStyle}/>
          <BsInstagram style={iconStyle}/>
          <BsFacebook style={iconStyle}/>
        </div>
        <div className="description">
          <h1>
            Ramaera <br /> Industries
          </h1>
          <p>
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </p>
          <div className="hero-btn">
            <button>Explore More</button>
          </div>
          
        </div>
        <div className="slide">
          <div className="slide-1 "  onClick={()=>setSlideNo("01")}></div>
          <div className="slide-2 " onClick={()=>setSlideNo("02")}></div>
          <div className="slide-3" onClick={()=>setSlideNo("03")}></div>
          <span className="slide-number">{slideNo}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

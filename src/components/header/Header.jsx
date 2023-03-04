import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";
import SplineChar from "./SplineChar";
import Typed from "react-typed";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          {/* <img src={ME} alt="me" /> */}
          <SplineChar />
        </div>
        <br />
        <h5>Hello I'm</h5>
        <h1 style={{color: "var(--color-primary)"}}>Anas Iqbal</h1>
        <h5 className="text-light">
          a <Typed
            strings={[
              "Full Stack Developer",
              "Software Developer",
              "Photographer",
              "Student",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h5>
        {/* <CTA /> */}
        <HeaderSocials />
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;

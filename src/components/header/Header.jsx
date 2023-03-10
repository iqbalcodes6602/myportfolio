import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import SplineChar from "./SplineChar";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <SplineChar />
        </div>
        <br />
        <h5>Hello I'm</h5>
        <h1 style={{ color: "var(--color-primary)" }}>Anas Iqbal</h1>
        <h5 className="text-light">
          a <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Software Developer',
              2000,
              'PhotoGragher',
              2000,
              'Student',
              2000,
              () => {
                console.log('Done typing!'); // Place optional callbacks anywhere in the array
              }
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h5>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;

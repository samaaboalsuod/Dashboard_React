import React from "react";
import "./LogoGlow.css";

import Logo from '../Assets/logo.svg'

const LogoGlow = () => {
  return (
    <div className="logoGlowWrap">
      <div className="logoGlowCircle">

        <img src={Logo} alt="" />
      </div>

      <h3 className="welcomeTxt">Welcome Back</h3>
    </div>
  );
};

export default LogoGlow;

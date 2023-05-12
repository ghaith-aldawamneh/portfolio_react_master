import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>take the full control over the front end with:</h5>
        <h1
        style={{margin : "16px"}}
        >GHAITH AL DAWAMNEH</h1>
        <h5 
        style={{ fontSize : "1.225rem",
      fontWeight:"900"
      }}
        className="text-light">Full-stack Developer</h5>
        <CTA />
        <div className="scroll__down__div"><a href="#contact" className="scroll__down">
          Scroll Down
        </a></div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;

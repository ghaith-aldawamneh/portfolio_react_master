import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">GHAITH AL DAWAMNEH</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/ghaith-al-dawamneh-58b41322a/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ghaith-aldawamneh" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://rexla.net/ceo" target="_blank" rel="noreferrer" ><FaAngellist /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; GH-DH {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
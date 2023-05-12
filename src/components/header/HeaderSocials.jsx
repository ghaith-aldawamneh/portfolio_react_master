import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist,FaFacebookF } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ghaith-al-dawamneh-58b41322a/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ghaith-aldawamneh" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://rexla.net/ceo" target="_blank" rel="noreferrer" ><FaFacebookF  /></a>
    </div>
  )
}

export default HeaderSocials
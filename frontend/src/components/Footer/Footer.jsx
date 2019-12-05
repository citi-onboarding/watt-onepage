import React, { Component } from 'react';
import heart from './heart.svg';
import code from './code.svg';
import CITi from './CITi.webp';
import './Footer.css';

function Footer() {
  return (
    <footer className="feito">
      <p>
        Made with
        <span>
          <img src={code} alt="Ícone de código" className="icon code" />
        </span>
        and
        <span>
          <img src={heart} className="icon" alt="Ícone de coração" />
        </span>
        by
        <span>
          <a href="https://citi.org.br" target="_blank" rel="noopener noreferrer">
            <img src={CITi} className="citi-logo" alt="Logo do CITi" />
          </a>
        </span>
      </p>
    </footer>
  )
}
export default Footer;

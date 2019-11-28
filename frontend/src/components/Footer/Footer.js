import React, { Component } from 'react';
import heart from './heart.svg'
import code from './code.svg'
import CITi from './CITi.png'
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <footer className="feito">
          <p>Made with <span><img src={heart} className="icon" alt="love" /></span>
            and<span><img src={code} alt="code" className="icon code" /></span>by
            <span><a href="http://citi.org.br" target="_blank"><img src={CITi} className="citi-logo" alt="CITi"/></a></span>
          </p>
        </footer>
      </>
    )
  }
}
export default Footer;

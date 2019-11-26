import React, { Component } from 'react';
import heart from './heart.svg'
import code from './code.svg'
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
          <p>Made with <span><img src={code} /></span>
            and <span><img src={heart} /></span> by
        <span><a href="http://citi.org.br" target="_blank"><img src="" /></a></span>
          </p>
        </footer>
      </>
    )
  }
}
export default Footer;

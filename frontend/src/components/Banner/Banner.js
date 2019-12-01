import React, { Component } from 'react';
import logo_watt from './Logo_watt.png'
import './Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  handleClickServicos() {

    let elmnt = document.querySelector('.boxServicos');
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="banner">
        <div className="banner-container">
          <img src={logo_watt} alt="Watt Consultoria" />
          <button onClick={() => { this.handleClickServicos() }} id="btn-banner" className="btn-banner">
            <div className="arrow-down"></div>
          </button>
        </div>
      </div>
    )
  }
}
export default Banner;

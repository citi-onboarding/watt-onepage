import React, { Component } from 'react';
import logo_watt from './Logo_watt.png'
import './Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="banner">
        <img src={logo_watt} alt="Watt Consultoria" />
        <button id="btn-banner" className="btn-banner"><div className="arrow-down"></div></button>
      </div>
    )
  }
}
export default Banner;

import React, { Component } from 'react';
import axios from 'axios'
import logo_watt from './Logo_watt.png'
import './Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props)
  }
  callApi = async () => {
    const response = await axios.get('http://localhost:3000/banner')
    return response;
  }

  handleClickScroll(nameOfClass){

    let elmnt = document.querySelector(nameOfClass);
    elmnt.scrollIntoView({  
      behavior: "smooth",
    });
  }
  render() {

    const mystyle = {
      backgroundImage: 'url(' + this.state.imagem_banner + ')'
    }

    return (
      <div style={mystyle} className="banner">
        <img src={logo_watt} alt="Watt Consultoria" />
        <button onClick={() => { this.handleClickScroll('.servicos') }} id="btn-banner" className="btn-banner">
          <div className="arrow-down"></div>
        </button>
      </div>
    )
  }
}
export default Banner;

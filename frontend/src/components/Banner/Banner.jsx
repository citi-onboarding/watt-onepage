import React, { Component } from 'react';
import logo_watt from './Logo_watt.png'
import './Banner.css'

class Banner extends Component {
  static handleClickScroll() {
    const elmnt = document.querySelector('.servicos');
    elmnt.scrollIntoView();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="banner">
        <img src={logo_watt} alt="Logo da Watt Consultoria" />
        <button aria-label="Botão de Ir para Serviços" onClick={ this.constructor.handleClickScroll } className="btn-banner">
          <div className="arrow-down"></div>
        </button>
      </div>
    )
  }
}

export default Banner;
import React from 'react';
import logo_watt from './Logo_watt.png'
import './Banner.css'

function Banner() {
  const handleClickScroll = () => {
    const elmnt = document.querySelector('.servicos');
    elmnt.scrollIntoView();
  }

  return (
    <section className="banner">
      <img src={logo_watt} alt="Logo da Watt Consultoria" />
      <button aria-label="Botão de Ir para Serviços" onClick={handleClickScroll} className="btn-banner">
        <div className="arrow-down"></div>
      </button>
    </section>
  )
}

export default Banner;
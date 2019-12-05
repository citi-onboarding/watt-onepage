import React, { Component } from 'react';
import './MyNavBar.css';
import face from '../../ícones/facebook.webp';
import linked from '../../ícones/linkedin-(1).webp';
import insta from '../../ícones/instagram-(2).webp';
import menuIcon from '../../ícones/menu-24px.svg';
import WATTLogo from '../../WATTBRANCO.webp';

function NavbarItem({ name, classe, escopo }) {
  return (
    <li>
      <button type="button" aria-label={`botão de ir para ${name}`} className="mediaDesk" onClick={() => escopo.handleClickScroll(classe)} >
        {name}
      </button>
    </li>
  );
}


function Media({ src, link, alt }) {
  return (
    <li>
      <a className="mediaDesk" target="_blank" href={link} rel="noopener noreferrer" >
        <img className="icons" src={src} alt={alt}></img>
      </a>
    </li>
  );
}
class MyNavBar extends Component {
  handleClickScroll(nameOfClass) {

    const elmnt = document.querySelector(nameOfClass);
    elmnt.scrollIntoView();
  }

  animate() {
    const toBeAnimated = document.getElementById('toBeAnimated');
    if (toBeAnimated.className === 'animation') {
      toBeAnimated.className = 'animationOut';
    } else {
      toBeAnimated.className = 'animation';
    }
  }

  render() {
    return (
      <nav id="navBar" className="navBar" >
        <div id="logo" className="firstLogo" >
          <img onClick={() => { window.scrollTo(0, 0) }} src={WATTLogo} alt="WATT Consusltoria" height="60" width="60" />
        </div>
        <ul>

          <NavbarItem name="SERVIÇOS" classe=".servicos" escopo={this} />
          <NavbarItem name="QUEM SOMOS" classe=".quemSomos" escopo={this} />
          <NavbarItem name="CONTATO" classe=".boxContato" escopo={this} />

          <li>
            <div className="littleMargin" >
              <button aria-label="Botão para abrir o menu" type="button" className="mediaMob" >
                <img onClick={() => this.animate()} color="#FFFFFF" src={menuIcon} alt="WATT Consusltoria" height="60" width="60" />
              </button>
            </div>
          </li>

          <Media src={insta} link="https://www.instagram.com/wattconsultoria/" alt="Instagram" />
          <Media src={linked} link="https://www.linkedin.com/company/watt-consultoria" alt="InstaLinkedIngram" />
          <Media src={face} link="https://www.facebook.com/WattConsultoria/" alt="Facebook" />

        </ul>
      </nav>
    )
  }

}

export default MyNavBar;
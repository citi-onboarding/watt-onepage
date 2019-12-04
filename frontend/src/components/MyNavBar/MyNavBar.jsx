import React, { Component } from 'react';
import './MyNavBar.css';
import face from '../../ícones/facebook.png';
import linked from '../../ícones/linkedin-(1).png';
import insta from '../../ícones/instagram-(2).png';
import menuIcon from '../../ícones/menu-24px.svg';
import WATTLogo from '../../WATTBRANCO.png';

class MyNavBar extends Component {
  constructor(props) {
    super(props);
  }


  handleClickScroll(nameOfClass) {

    const elmnt = document.querySelector(nameOfClass);
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }

  animate() {
    if (document.getElementById('toBeAnimated').className == 'animation') {
      document.getElementById('toBeAnimated').className = 'animationOut';
    } else {
      document.getElementById('toBeAnimated').className = 'animation';
    }
  }

  render() {
    return (
      <div id="navBar" className="navBar" >
        <div id="logo" className="firstLogo" >
          <img onClick={() => { window.scrollTo(0, 0) }} src={WATTLogo} alt="WATT Consusltoria" height="60" width="60" />
        </div>
        <ul>

          <li><a className="mediaDesk" onClick={() => this.handleClickScroll('.servicos')} >SERVIÇOS</a></li>
          <li><a className="mediaDesk" onClick={() => this.handleClickScroll('.quemSomos')} >QUEM SOMOS</a></li>
          <li><a className="mediaDesk" onClick={() => this.handleClickScroll('.boxContato')} >CONTATO</a></li>

          <li><div className="littleMargin" ><a className="mediaMob" ><img onClick={() => this.animate()} color="#FFFFFF" src={menuIcon} alt="WATT Consusltoria" height="60" width="60"></img></a></div></li>

          <li>
            <a className="mediaDesk" target="_blank" href="https://www.instagram.com/wattconsultoria/" >
              <img className="icons" src={insta} alt="Instagram"></img>
            </a>
          </li>

          <li>
            <a className="mediaDesk" target="_blank" href="https://www.linkedin.com/company/watt-consultoria" >
              <img className="icons" src={linked} alt="LinkedIn"></img>
            </a>
          </li>

          <li>
            <a className="mediaDesk" target="_blank" href="https://www.facebook.com/WattConsultoria/" >
              <img className="icons" src={face} alt="Facebook"></img>
            </a>
          </li>

        </ul>
      </div>
    )
  }

}

export default MyNavBar;
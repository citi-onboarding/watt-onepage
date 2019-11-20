import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import face from './ícones/facebook-logo.svg'
import linked from './ícones/linkedin (2).svg'
import insta from './ícones/instagram (1).svg'
import WATTLogo from './WATTBRANCO.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  handleClickServicos(){

    let elmnt = document.getElementById("Servicos");
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }
  handleClickSobre(){

    let elmnt = document.getElementById("Sobre");
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }
  handleClickContato(){

    let elmnt = document.getElementById("Contato");
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }




  render(){
    return (
      <div className="App">
        {/* <Navbar sticky="top" position="fixed" bg="dark" variant="dark">
          <img src={img} alt="WATT Consultoria" width="42" height="42"></img>
          <Nav className="mr-auto">
            <div className = "navItem">
              <div onClick={()=> this.handleClickServicos()} >SERVIÇOS</div>
              <div onClick={()=> this.handleClickSobre()} >SOBRE</div>
              <div onClick={()=> this.handleClickContato()} >CONTATO</div>
              <div href="http://wattconsultoria.com.br/blog/">BLOG</div>
            </div>
          </Nav>
        </Navbar> */}

        <div id="navBar" className="navBar" >
          <div id="logo" className="firstLogo" >
            <img src={WATTLogo} alt="WATT Consusltoria" height="60" width="60"></img>
          </div>
            <ul>
              {/* <div id = "spacingBox1" className = "spaceBox" ></div> */}
              <li><a onClick={()=> this.handleClickServicos()} >SERVIÇOS</a></li>
              <li><a onClick={()=> this.handleClickSobre()} >SOBRE</a></li>
              <li><a onClick={()=> this.handleClickContato()} >CONTATO</a></li>
              <li><a href="http://wattconsultoria.com.br/blog/">BLOG</a></li>
              
              <li>
                <div className="containerBox">
                  <a href="https://www.instagram.com/wattconsultoria/" >
                    <img className="icons" src={insta} alt="Instagram"></img>
                  </a>
                </div>
              </li>
                
              <li>
                <div className="containerBox">
                  <a href="https://www.linkedin.com/company/watt-consultoria" >
                    <img className="icons" src={linked} alt="LinkedIn"></img>
                  </a>
                </div>
              </li>
                  
              <li>
                <div className="containerBox">
                  <a href="https://www.facebook.com/WattConsultoria/" >
                    <img className="icons" src={face} alt="Facebook"></img>
                  </a>
                </div>
              </li>
              

            </ul>
        </div>
        <div className = "content">  
          <a id="Servicos">Servicos</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
          <a id="Sobre">Sobre</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
          <a id="Contato">Contato</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
      </div>
    );
  }
}
export default App;

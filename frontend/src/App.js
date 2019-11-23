import React, {Component} from 'react';
import face from './ícones/facebook.png'
import linked from './ícones/linkedin-(1).png'
import insta from './ícones/instagram-(2).png'
import WATTLogo from './WATTBRANCO.png'
import background from './imagens/hossein-soltanloo-2ounD6ulngI-unsplash.jpg'
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
      <div className="App" style={{
        width: "100%",
        height: "100%",
        backgroundSize:"100%",
        backgroundImage: "url(" + background + ")",
        backgroundRepeat: "no-repeat"
        }} >

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
                
                  <a href="https://www.instagram.com/wattconsultoria/" >
                    <img className="icons" src={insta} alt="Instagram"></img>
                  </a>
                
              </li>
                
              <li>
                
                  <a href="https://www.linkedin.com/company/watt-consultoria" >
                    <img className="icons" src={linked} alt="LinkedIn"></img>
                  </a>
                
              </li>
                  
              <li>
                
                  <a href="https://www.facebook.com/WattConsultoria/" >
                    <img className="icons" src={face} alt="Facebook"></img>
                  </a>
                
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

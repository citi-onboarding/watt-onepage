import React, {Component} from 'react';
import face from './ícones/facebook.png';
import linked from './ícones/linkedin-(1).png';
import insta from './ícones/instagram-(2).png';
import WATTLogo from './WATTBRANCO.png';
import MyNavBar from './components/MyNavBar/MyNavBar';
import background from './imagens/hossein-soltanloo-2ounD6ulngI-unsplash.jpg';
import './App.css';

class App extends Component {


  render(){
    return (
      <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundSize:"100%",
        backgroundRepeat: "no-repeat"
        }} >

        <MyNavBar />

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

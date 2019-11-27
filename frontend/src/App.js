import React, {Component} from 'react';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyMobMenu from './components/MyMobMenu/MyMobMenu';
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

        {/* <MyNavBar /> */}
        <MyMobMenu />

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

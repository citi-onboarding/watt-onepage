import React, {Component} from 'react';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyMobMenu from './components/MyMobMenu/MyMobMenu';
import background from './imagens/lemur-eKFsacaWzOg-unsplash (1).jpg';
import Contato from './components/Contato/Contato';
import Servicos from './components/Servicos/Servicos';
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }
  render(){
    return (
      <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundSize:"100%",
        backgroundRepeat: "no-repeat"
        }} >

        <MyNavBar />
        <div id="toBeAnimated" className="animationNone" >
          <MyMobMenu />
        </div>
        <div className = "content">  
          <Servicos />
          <Contato />
        </div>
        
      </div>
    );
  }
}
export default App;

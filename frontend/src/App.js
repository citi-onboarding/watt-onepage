import React, { Component } from 'react';
import './App.css';
import Contato from './components/Contato/Contato'
import Servicos from './components/Servicos/Servicos'
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Footer />
      // <Contato />
    )
  }
}
export default App;

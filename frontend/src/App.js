import React, { Component } from 'react';
import './App.css';
import Contato from './components/Contato/Contato'
import Servicos from './components/Servicos/Servicos'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
    return (
      <Servicos />
      // <Contato />
    )
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import Contato from './components/Contato/Contato'
import Servicos from './components/Servicos/Servicos'
import Banner from './components/Banner/Banner'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
      <Banner />
      <Servicos />
      <Contato />
    </>
    )
  }
}
export default App;

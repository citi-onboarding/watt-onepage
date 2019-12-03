import React, { Component } from 'react';
import './QuemSomos.css';
import axios from 'axios'
const config = require('../../config/config'); 
class QuemSomos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imagem: '',
      post: ''
    }
  }

  componentDidMount() {
    this.callApi()
      .then((response) => {
        this.setState({
          imagem: response.data[0].imagem[0].url,
          post: response.data[0]['Texto'],
        })

      })
  }

  callApi = async () => {
    const response = await axios.get(`${config.url}/quemsomos`)
    return response;
  }

  render() {
    return (
      <div className="somos-container">
        <div className="quemSomos">
          <h1>Quem Somos</h1>
          <div className='image'><img src={this.state.imagem} /></div>
          <p>
            {this.state.post}
          </p>
        </div>
      </div>
    )
  }
}
export default QuemSomos;

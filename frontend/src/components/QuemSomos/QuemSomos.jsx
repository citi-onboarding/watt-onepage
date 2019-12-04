import React, { Component } from 'react';
import './QuemSomos.css';
import axios from 'axios';
import config from '../../config/config';
class QuemSomos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: '',
      post: '',
    };
  }

  componentDidMount() {
    (async () => {
      const response = await axios.get(`${config.url}/quemsomos`);
      this.setState({
        imagem: response.data[0].imagem[0].url,
        post: response.data[0]['Texto'],
      });
    })();
  }

  render() {
    const { imagem, post } = this.state;
    return (
      <div className="somos-container">
        <div className="quemSomos">
          <h1>Quem Somos</h1>
          <div className="image">
            <img src={imagem && imagem} alt="Foto dos membros da Watt" />
          </div>
          <p>
            {post}
          </p>
        </div>
      </div>
    )
  }
}
export default QuemSomos;

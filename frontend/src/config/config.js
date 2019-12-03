const env = 'prod';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        url: 'http://localhost:3001'
      }
    case 'prod':
      return {
        url: 'https://watt-onepage.herokuapp.com'
      }
  }
}
console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);
module.exports = config();
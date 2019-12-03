const env = process.env.NODE_ENV;

const config = () => {
  switch (env) {
    case 'development':
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
# watt-onepage

Site para a Empresa Júnior WATT produzido no PS 2019.2
<p align="center">
  <img src="https://img.shields.io/badge/npm-v6.13.0-orange"/> <img src="https://img.shields.io/badge/node-v10.16.3-green"/>
<p/>

## Rodando o projeto localmente

1. Primeiro você deve ter o `git`, o `node` e o `npm` instalados;
2. Clone esse repositório e abra no terminal na pasta `frontend`;
3. Rode o comando:
    ##### No Linux
      `npm run go-l`

    ##### No Windows
      `npm run go-w`


4. Navegue até a pasta principal do projeto e rode o comando `npm start` para inicar o projeto;
5. Abra o browser, e navegue até esse link http://localhost:3000.

## Feito com

* [Node.js](https://nodejs.org) - Ambiente de execução para executar o JavaScript no lado do servidor;
* [React](https://reactjs.org) - A biblioteca usada para criar a interface;
* [Keystone.js](https://sass-lang.com/libsass) - O framework usado para o serviço de CMS;
* [MongoDB](https://www.mongodb.com/) - O Banco de dados NoSQL usado para manter os dados;
* [Heroku](https://www.heroku.com/platform) - A plataforma utilizada pra deploy.

## Estrutura de contribuição

### Adicionando funcionalidade nova

1. Crie uma branch com um nome que se refere a funcionalidade. Ex.: `banner`;
2. Faça os commits seguindo a seguinte estrutura, descrevendo sua contribuição:
   <br><br>`feature/<nome-da branch>: <descrição>`<br><br>
3. Envie um pull request para a branch `development`.

### Fazendo correções e otimizações
1. Crie uma branch com um nome que se refere a modificação. Ex.: `bugBanner`;
2. Faça os commits seguindo a seguinte estrutura, descrevendo sua contribuição:
   <br><br>`hotfix/<nome-da branch>: <descrição>`<br><br>
3. Envie um pull request para a branch `development`.

## Descrição geral do software

### Componentes

  #### 1. Contato


  <p align="justify">
  Faz requisição para /contato com o método POST a fim de enviar o email com os dados que usuário entra nos campos de input. Além disso, Faz requisição para /contato com o método GET e recebe o endereço, o email, a media social, o número e o background.
  <p/>

  #### 2. Servicos
  <p align="justify">
  Faz requisição para /servicos com o método GET e recebe o endereço, o email, a media social, o número e o background. os serviços que estão no carrousel.
  <p/>

  #### 3. Banner
  <p align="justify">
  Faz requisição para /banner com o método GET e recebe o endereço, o background do banner
  <p/>

  #### 4. QuemSomos
  <p align="justify">
  Faz requisição para /banner com o método GET e recebe o texto e a foto da aba "Quem Somos".
  <p/>

  #### 5. Footer
  <p align="justify">
  Não faz requisições, exibe no rodapé do site a autoria.
  <p/>

  #### 6. MyMobMenu
  <p align="justify">
  Não faz requisições, exibe o menu de navegação do site para dispositivos móveis.
  <p/>

  #### 7. MyNavBar
  <p align="justify">
  Não faz requisições, exibe o menu de navegação do site para Desktop.
  <p/>

### Endpoints

  #### 1. /contato - GET
  <p align="justify">
  Envia o endereço, o email, a media social, o número e o background que fica na parte de contato do site.
  <p/>

  #### 2. /contato - POST
  <p align="justify">
  Envia o email com os dados que recebe no front-end (email, nome, mensagem e número).
  <p/>

  #### 3. /servicos - GET
  <p align="justify">
  Envia os serviços que estão no carrousel.
  <p/>

  #### 4. /banner - GET
  <p align="justify">
  Envia o background do banner
  <p/>

  #### 5. /quemsomos - GET
  <p align="justify">
  Envia o texto e a foto da aba "Quem Somos".

## Autores

* **Edgar Marques** - [Jorrmungandr](https://github.com/Jorrmungandr)
* **Gabriel Kristian** - [gkqsj](https://github.com/gkqsj)
* **Luana Nagai** - [nagailuana](https://www.behance.net/user/?username=nagailuana)
* **Vituriano Xisto** - [Vituriano](https://github.com/Vituriano)


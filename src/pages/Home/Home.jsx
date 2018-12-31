import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/SkullyfoxPoly.png';
import './Home.sass';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="Home">
        <div class="left">

        </div>
        <div class="right">
          <img src={Logo} class="logo"/>
          <p class="title">Foxhub Community</p>
          <p class="subtitle">Site communautaire Foxhub</p>
          <div class="login">
            <p class="subtitle">Connexion</p>
            <input type="text" class="input" placeholder="Pseudo"/>
            <input type="password" class="input" placeholder="Mot de Passe"/>
            <div class="links">
              <a href="" class="sign-button">Se connecter</a>
              <a href="" class="sign-button">S'inscrire</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

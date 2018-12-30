import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Home.sass';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="Home">
        <div class="Home_title">
          <p class="title">Bienvenu sur le site</p>
          <p class="title">de la communautée Foxhub</p>
        </div>
        <div class="Home_button">
          <a href="" class="button">Visiter en tant qu'invité</a>
          <a href="" class="button">M'authentifier</a>
        </div>
      </div>
    );
  }
}

export default Home;

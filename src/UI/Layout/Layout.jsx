import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Layout.sass';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav>
        <i className="fas fa-microphone-alt nav_icon_title"></i>
      </nav>
    );
  }
}

export default Layout;

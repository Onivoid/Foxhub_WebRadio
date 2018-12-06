import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Layout.sass';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>Layout OK</p>
      </div>
    );
  }
}

export default Layout;

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Layout.sass';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="Layout">
        <p>Layout</p>
      </div>
    );
  }
}

export default Layout;

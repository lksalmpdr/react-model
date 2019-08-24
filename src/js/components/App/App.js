import React, { Component } from 'react';
import logo from './caixa.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  handleOpenSideMenu(e)
  {
      e.preventDefault();
      document.getElementById("navegacao").style.width = "250px";
      document.getElementsByClassName("closebtn")[0].style.visibility = "visible";
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Admissões - CAIXA</h2>
          <h3 className="pull-left">
            <button className="btn btn-info">
              <FontAwesomeIcon onClick={this.handleOpenSideMenu} icon={faBars} />
            </button>
          </h3>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="App-intro">
              Acompanhe a admissão de empregados na CAIXA
            </p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './Css/App.css';
import './Css/style.css';
import ListStudent from './Components/ListStudent';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-12">
                <Header />
                <ListStudent />

              </div>
              
          </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Containers/Main'
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout__container">
        <section>
          <Main/>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;

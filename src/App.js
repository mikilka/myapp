import './App.css';


import React, { Component } from 'react';
import Header from './component/header/header';
import Footer from './component/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;

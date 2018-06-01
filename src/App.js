import React, { Component } from 'react';
import './App.css';
import Routes from "./routes"
import Header from "./components/Header"

function App() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
}

export default App;

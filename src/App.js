import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiCall } from './ApiCall';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ApiCall />
        </header>
      </div>
    );
  }
}
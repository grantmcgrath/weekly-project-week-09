import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from "./NavBar";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <PlayListForm />
          <PlayList />
        </div>
      </div>

    );
  }
}

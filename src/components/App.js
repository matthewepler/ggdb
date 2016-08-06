import React, { Component } from 'react';

// components
import Reference from './Reference.js';
import Toolbar from './Toolbar.js';

// api
import { plugs } from '../api/dummyData';

// styles
import '../stylesheets/App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      formOpen: false,
    };
  }

  getDummyData() {
    return plugs.map( p => (
      <Reference key={p._id} reference={p} />
    ));
  }

  render() {
    const refs = this.getDummyData();

    return (
      <div className="app-container">
        <Toolbar />
        <ul>
          {refs}
        </ul>
      </div>
    );
  }
}

export default App;

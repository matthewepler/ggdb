import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

// components
import Reference from './Reference.js';
import Toolbar from './Toolbar.js';
import Season from './Season.js'

// api
import { plugs } from '../api/dummyData';

// styles
import '../stylesheets/App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      formOpen: false,
      selectorOpen: false,
      season: 1,
      episode: 1,
    };
  }

  getDummyData() {
    return plugs.map( p => (
      <Reference key={p.id} reference={p} />
    ));
  }

  render() {
    const refs = this.getDummyData();

    const selector = (<h1>S{this.state.season}E{this.state.episode}</h1>);

    return (
      <div className="app-container">
        <div className="app-left-col"></div>
        <div className="app-mid-col">
          <div className="nav-selectors">
            <Panel className="nav-panel" header={selector} collapsible expanded={this.state.selectorOpen}>
              <h1>hi</h1>
            </Panel>
          </div>
          <Toolbar />
          <ul>
            {refs}
          </ul>
        </div>
        <div className="app-right-col"></div>
      </div>
    );
  }
}

export default App;

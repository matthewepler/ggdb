import React, { Component } from 'react';

// components
import Reference from './Reference.js';
import Toolbar from './Toolbar.js';
import AddRefForm from './AddRefForm';

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

  openForm() {
    this.setState({
      formOpen: !this.state.formOpen,
    });
  }

  render() {
    const refs = this.getDummyData();

    return (
      <div className="app-container">
        <Toolbar formHandler={this.openForm.bind(this)}/>
        <AddRefForm formOpen={this.state.formOpen}/>
        <ul>
          {refs}
        </ul>
      </div>
    );
  }
}

export default App;

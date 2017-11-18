import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  handleNameChange(name) {
    this.setState({ name });
    // this.setState({ name: e.target.value});
  }

  handleBobClicked() {
    this.setState({ name: 'Bob' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <button onClick={() => this.handleBobClicked()}> I am Bob</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;

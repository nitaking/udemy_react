import React, { Component } from 'react';
// import axios from 'axios';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePlaceChange(place) {
    console.log(place);
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceChange(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

import { geocode } from '../domain/Geocoder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        // 東京タワーの緯度/経度
        lat: 35.6585805,
        lng: 139.7454329,
      },
      hotels: [
        { name: '品川プリンスホテル' },
        { name: 'アパホテル' },
      ],
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location });
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果がみつかりませんでした。');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました。');
            break;
          }
        }
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました。');
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div>
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <HotelsTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

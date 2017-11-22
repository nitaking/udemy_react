import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 35.6585805, lng: 139.7454329 }}
  >
  </GoogleMap>
));

const Map = props => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div className="map" />)}
  />
);

export default Map;

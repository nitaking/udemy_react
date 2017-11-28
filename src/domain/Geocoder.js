import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then((results) => {
      const { data } = results;
      const { status } = data;
      const result = data.results[0];
      if (typeof result === 'undefined') {
        return { status };
      }

      const address = result.formatted_address;
      const { location } = result.geometry;
      return { status, address, location };
    })
    // 異常系
    .catch(() => {
      this.setErrorMessage('通信に失敗しました。');
    });

export const reverseGeocode = () => null;

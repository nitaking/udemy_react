import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1097278199848190234';

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then((result) => {
      console.log(result);
    });
};

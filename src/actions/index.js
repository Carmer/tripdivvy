import * as types from './actionTypes';
import trips from '../services/trips';

export function createTrip(tripName) {
  return dispatch => {
    trips.addTrip(tripName)
      .then(dispatch(createTripSuccess(tripName)));
  }
}

function createTripSuccess(tripName) {
  return { type: types.CREATE_TRIP_SUCCESS, tripName };
}

export function getTrips() {
  return dispatch => {
    trips.getTrips()
      .then(trips => dispatch(getTripsSuccess(trips)));
  }
}

function getTripsSuccess(trips) {
  return { type: types.GET_TRIPS_SUCCESS, trips };
}
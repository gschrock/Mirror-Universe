import * as actionCreators from '../actions/exampleActionCreators.js';
import { TRIMET_KEY } from '../../../server/private.js';
const triMetUrl = `https://developer.trimet.org/ws/V1/arrivals/json/true/streetcar/true/locIDs/10776/appID/${TRIMET_KEY}`;

function fetchTriMetData() {
  return fetch(triMetUrl);
}

export function fetchApiData() {
  return async (dispatch, getState) => {
    let result = await fetch(triMetUrl);
    result = await result.json();
    dispatch(actionCreators.apiDataFetched(result))
  }
}

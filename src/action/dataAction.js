import {GET, api} from '../helper/apiConstants';
import {makeAPIRequest} from '../helper/Global';
import {USER_DATA} from './types';

export const userData = (request) => async (dispatch) =>
  makeAPIRequest({
    method: GET,
    url: api.baseUrl,
  })
    .then((response) => {
      if (response.status === 200) {
        if (response.data.error) {
        } else if (response.data) {
          dispatch({type: USER_DATA, payload: response.data});
        }
      }
      return Promise.resolve();
    })
    .catch((error) => Promise.reject());

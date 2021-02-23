import axios from 'axios';
import {api} from './apiConstants';

export const makeAPIRequest = ({method, url, data, headers, params}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      baseURL: api.baseUrl,
      url,
      data,
      headers,
      params,
    };

    axios(options)
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

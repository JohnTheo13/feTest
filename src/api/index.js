import Config from '../config';

/**
* All Api requests
*/

const api = { fetch: async (url, options = {}) => {
  let response;
  try {
    response = await fetch(`${Config.API_URL}/${url}`, options);

    switch (response.status) {
      case 404:
        throw Error('not_found');
      case 405:
        throw Error('not_allowed');
      default:
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return response.json();
},
async get(...props) {
  return this.fetch(props);
} };


export default api;

import axios from 'axios';
import { perPage } from '../main';

/**
 *
 * @param {String} query
 * @returns {Object}
 */
export async function sendQuery(imageName, pageNumber) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44443865-2fecc511f1b53cc9c5f157eba',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: pageNumber,
  };

  try {
    const response = await axios.get('/api/', { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
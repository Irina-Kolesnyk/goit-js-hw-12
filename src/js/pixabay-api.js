import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44443865-2fecc511f1b53cc9c5f157eba',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearсh: true,
    per_page: '15',
  },
});

export async function getImage(imgName, currentPage) {
  const res = await axios.get('', {
    params: {
      q: imgName,
      page: currentPage,
    },
  });

  return res.data;
}
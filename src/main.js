import { renderMarkup } from './js/render-functions.js';
import { getImage } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Axios } from 'axios';

const searchForm = document.querySelector('.search-form');
const markupList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const btnLoadmore = document.querySelector('.loadMore-button');

let inputValue = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  inputValue = event.target.elements.search.value.trim();
  currentPage = 1;
  hideLoadBtn();
  hideLoader();

  if (!inputValue) {
    createMessage('Oops', 'You forgot to enter a search query!', '#EF4040');
    markupList.innerHTML = '';
  } else {
    showLoader();
    try {
      const data = await getImage(inputValue, currentPage);
      maxPage = data.total / perPage;
      if (data.hits.length === 0) {
        markupList.innerHTML = '';
        hideLoadBtn();
        createMessage(
          'Sorry',
          'there are no images matching your search query. Please try again!',
          '#EF4040'
        );
      }
      const markup = renderMarkup(data.hits);
      markupList.innerHTML = markup;

      showLoadBtn();
      lightbox.refresh();
    } catch (err) {
      err => {};
    }
    hideLoader();
    searchForm.reset();
    updateBtnStatus();
  }
});

btnLoadmore.addEventListener('click', async e => {
  e.preventDefault();
  currentPage++;
  hideLoadBtn();
  showLoader();
  try {
    const data = await getImage(inputValue, currentPage);
    const markup = renderMarkup(data.hits);
    markupList.insertAdjacentHTML('beforeend', markup);
    scrollElements();
  } catch (err) {
    err => {};
  }

  lightbox.refresh();
  hideLoader();
  updateBtnStatus();
});

function createMessage(title, message, bckgColor) {
  iziToast.error({
    title: title,
    message: message,
    backgroundColor: bckgColor,
    theme: 'dark',
    position: 'topRight',
  });
}

const lightbox = new simpleLightbox('.gallery-list a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function showLoadBtn() {
  btnLoadmore.classList.remove('is-hidden');
}

function hideLoadBtn() {
  btnLoadmore.classList.add('is-hidden');
}

function updateBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
      createMessage(
        `We're sorry,`,
        `but you've reached the end of search results.`,
        '#FFA000'
      );
    }
  } else {
    showLoadBtn();
  }
}

function scrollElements() {
  const liElem = markupList.children[0];
  const height = liElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 2 + 50,
    behavior: 'smooth',
  });
}

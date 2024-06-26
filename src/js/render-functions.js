export function renderMarkup(imagesData) {
  return imagesData
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-card">
      <a href="${largeImageURL}" class="gallery-card-link">
        <img
          class="gallery-card-img"
          src="${webformatURL}"
          alt="${tags}"
          width="360"
        />
      </a>
      <ul class="image-desc-list">
        <li class="image-desc-item">
          <p class="image-desc-title">Likes</p>
          <p class="image-desc-data">${likes}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Views</p>
          <p class="image-desc-data">${views}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Comments</p>
          <p class="image-desc-data">${comments}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Downloads</p>
          <p class="image-desc-data">${downloads}</p>
        </li>
      </ul>
    </li>
  `
    )
    .join('');
}
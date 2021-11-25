// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = makeImageCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
function makeImageCard(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
`;
    })
    .join('');
}
galleryContainer.addEventListener('click', ongalleryContainerClick);
function ongalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}
let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

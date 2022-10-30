// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const markup = createMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('afterbegin', markup)

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join('')
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
    captionDelay: 250
});
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

let pictures = document.querySelector(".gallery");
let picturesMarkup = createPicturesMarkup(galleryItems);
pictures.insertAdjacentHTML("beforeend", picturesMarkup);
pictures.addEventListener('click', onClickPicture);

function createPicturesMarkup(galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a
        class="gallery__link"
        href = '${original}'
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
   </div>
    `;
    })
    .join("");
}

function onClickPicture(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  let src = event.target.getAttribute('data-source');
  instance.show(() => { 
    instance.element().querySelector('img').src = src;
  });
  
}
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {

});



// const instance = basicLightbox.create(`
//     <div class="modal" id="modal_id">
//        <img
//           class="gallery__image"
//           src=""
//           alt=""
//         />
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('.modal').onclick = instance.close
//         document.addEventListener('keydown', modalCloseByKey); 
//   },
//   onClose: (instance) => {
//         document.removeEventListener('keydown', modalCloseByKey); 
//   }
// })

// function modalCloseByKey(e) {
// if (e.key === 'Escape') instance.close();
// }

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const gallerySlider = () => {
  const splide = new Splide('.gallery__slider', {           // Тип слайдера: бесконечный цикл
      perPage: 3,
      perMove: 1,              // Количество слайдов на странице
      gap: '15px',             // Отступ между слайдами
      autoplay: true,          // Автоматическое воспроизведение
      interval: 2500,          // Интервал между слайдами (в миллисекундах)
      pauseOnHover: true,      // Пауза при наведении мыши
      pagination: true,        // Включить пагинацию
      arrows: false,

      breakpoints: {
        1000: {
          perPage: 2,
        },
        800: {
          gap: '5px',
        },
        700: {
          perPage: 1,
        }
      }
  });

  splide.mount();

  const prevButton = document.querySelector('.gallery__nav-arrow-prev');
  const nextButton = document.querySelector('.gallery__nav-arrow-next');

  prevButton.addEventListener('click', () => splide.go('<'));
  nextButton.addEventListener('click', () => splide.go('>'));

  updateArrowState();

  splide.on('move', updateArrowState);
  splide.on('updated', updateArrowState); 

  function updateArrowState() {
    if (splide.index === 0) {
      prevButton.classList.add('gallery__nav-arrow--is-disabled');
    } else {
      prevButton.classList.remove('gallery__nav-arrow--is-disabled');
    }

    const lastSlideIndex = splide.Components.Controller.getEnd();

    if (splide.index === lastSlideIndex) {
      nextButton.classList.add('gallery__nav-arrow--is-disabled');
    } else {
      nextButton.classList.remove('gallery__nav-arrow--is-disabled');
    }
  }
};

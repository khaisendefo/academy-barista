import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const sliderSocial = () => {
  const splide = new Splide('.social__slider', {
    type: 'slide',      // Обычный режим (НЕ loop)
    perPage: 2,        
    perMove: 1,        
    gap: '15px',       
    pagination: false, 
    autoplay: true,     
    interval: 3000,    
    speed: 600,        
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: true,  // Автоплей не останавливается при фокусе

    breakpoints: {
      1100: {
        perPage: 1,    
      }
    }
  });

  splide.mount(); // Добавить этот вызов
};
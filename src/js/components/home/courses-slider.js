export const coursesSlide = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const sliders = {}; // Хранение слайдеров

    // Функция для переключения табов
    function switchTab(tabId) {
      tabContents.forEach((content) => {
        content.style.display = content.id === tabId ? 'block' : 'none';
      });

      tabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.tab === tabId);
      });
    }

    // Функция для инициализации слайдеров
    function initSliders() {
      if (window.innerWidth <= 800) {
        tabContents.forEach((content) => {
          const sliderElement = content.querySelector('.splide');
          if (sliderElement && !sliders[sliderElement.id]) {
            sliders[sliderElement.id] = new Splide(`#${sliderElement.id}`, {
              type: 'loop',
              perPage: 1,
              gap: '10px',
            }).mount();
          }
        });
      } else {
        // Уничтожаем слайдеры при большом экране
        for (const sliderId in sliders) {
          sliders[sliderId].destroy();
          delete sliders[sliderId];
        }
      }
    }

    // Переключение табов
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Инициализация слайдеров при загрузке страницы и изменении размера окна
    initSliders();
    window.addEventListener('resize', initSliders);
  });
}
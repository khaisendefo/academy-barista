export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header-burger');
    const nav = document.querySelector('.mobile-menu');
    const closeButton = document.querySelector('.mobile-menu__close'); // Кнопка закрытия
    const buttonToClose = document.querySelector('.mobile-menu__button'); // Новая кнопка для закрытия меню
    const overlay = document.querySelector('.mobile-menu__overlay');
    const body = document.body;

    function closeNav() {
      toggleButton.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    }

    toggleButton.addEventListener('click', function () {
      const isActive = toggleButton.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      if (isActive) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    });

    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target) && !buttonToClose.contains(event.target)) {
        closeNav();
      }
    });

    overlay.addEventListener('click', closeNav);

    closeButton.addEventListener('click', closeNav); // Закрытие при клике на кнопку close

    buttonToClose.addEventListener('click', closeNav); // Закрытие при клике на mobile-menu__button

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('active')) {
        closeNav();
      }
    });
  });
};

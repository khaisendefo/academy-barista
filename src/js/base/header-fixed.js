export const headerFixed = () => {
  const header = document.querySelector('.header__fixed');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 150 && window.scrollY > lastScrollY) {
      header.classList.add('header__fixed-hidden');
    } else if (window.scrollY < lastScrollY) {
      header.classList.remove('header__fixed-hidden');
    }
    lastScrollY = window.scrollY;
  });
}
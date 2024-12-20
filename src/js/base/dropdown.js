// menuToggle.js (или любой другой файл модуля)
export const dropdownMenu = () => {
  const switches = document.querySelectorAll('.header__submenu-switch');
  
  switches.forEach(switchElement => {
    switchElement.addEventListener('click', () => {
      const submenuItem = switchElement.closest('.header__submenu-item');
      const dropdown = submenuItem.querySelector('.header__submenu-dropdown');
      
      // Закрыть все другие открытые dropdown
      document.querySelectorAll('.header__submenu-dropdown-visible').forEach(openDropdown => {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove('header__submenu-dropdown-visible');
        }
      });
      
      // Переключить текущее меню
      dropdown.classList.toggle('header__submenu-dropdown-visible');
    });
  });
};

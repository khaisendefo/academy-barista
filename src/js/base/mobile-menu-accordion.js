export const mobileMenuAccordion = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const submenuSwitches = document.querySelectorAll('.mobile-menu__submenu-switch');

    submenuSwitches.forEach(function (switchElement) {
      switchElement.addEventListener('click', function (event) {
        // Получаем иконку и дропдаун
        const icon = switchElement.querySelector('.mobile-menu__submenu-switch-icon');
        const dropdown = switchElement.nextElementSibling;

        // Закрываем все остальные подменю
        submenuSwitches.forEach(function (otherSwitch) {
          const otherDropdown = otherSwitch.nextElementSibling;
          const otherIcon = otherSwitch.querySelector('.mobile-menu__submenu-switch-icon');
          
          if (otherSwitch !== switchElement) {
            // Убираем классы active у других подменю и их иконок
            if (otherDropdown && otherDropdown.classList.contains('active')) {
              otherDropdown.classList.remove('active');
              otherDropdown.style.maxHeight = '0';
            }
            if (otherIcon && otherIcon.classList.contains('active')) {
              otherIcon.classList.remove('active');
            }
          }
        });

        // Переключаем активность текущего подменю
        if (dropdown) {
          if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            dropdown.style.maxHeight = '0';
          } else {
            dropdown.classList.add('active');
            dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
          }
        }

        // Переключаем активность иконки
        if (icon) {
          if (icon.classList.contains('active')) {
            icon.classList.remove('active');
          } else {
            icon.classList.add('active');
          }
        }
      });
    });
  });
};

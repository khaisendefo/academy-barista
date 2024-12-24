export const teamTabs = () => {
  const cards = document.querySelectorAll('.team__card');
  const tabs = document.querySelectorAll('.team__tab-content');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const tabId = card.getAttribute('data-tab');

      // Убираем активные классы со всех табов
      tabs.forEach(tab => tab.classList.remove('team__tab-content-is-active'));

      // Скрываем активные классы с карточек
      cards.forEach(card => card.classList.remove('team__card-is-active'));

      // Показываем соответствующий таб
      const targetTab = document.querySelector(`.team__tab-content[data-tab="${tabId}"]`);
      targetTab.classList.add('team__tab-content-is-active');

      // Делаем карточку активной
      card.classList.add('team__card-is-active');
    });
  });
};

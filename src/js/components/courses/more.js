export const moreToggle = () => {
  const showMoreButtons = document.querySelectorAll('.course-composition__card-more-text');
  
  showMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Находим родительский элемент с классом course-composition__card
      const card = button.closest('.course-composition__card');
      
      // Находим все карточки на странице
      const allCards = document.querySelectorAll('.course-composition__card');

      // Перебираем все карточки и убираем класс active с тех, которые не были кликнуты
      allCards.forEach(item => {
        if (item !== card) {
          item.classList.remove('active');
          item.querySelector('.course-composition__card-more-text').textContent = 'Показать полностью';
          item.querySelector('.course-composition__card-more').classList.remove('active');
        }
      });

      // Находим элемент course-composition__card-more внутри текущей карточки
      const cardMore = card.querySelector('.course-composition__card-more');

      // Переключаем класс active у course-composition__card
      card.classList.toggle('active');
      
      // Переключаем класс active у course-composition__card-more
      cardMore.classList.toggle('active');
      
      // Меняем текст кнопки в зависимости от состояния класса "active"
      if (card.classList.contains('active')) {
        button.textContent = 'Скрыть текст';
      } else {
        button.textContent = 'Показать полностью';
      }
    });
  });
};
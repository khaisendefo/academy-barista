// Функция для скрытия всех курсов
export const courseTab = () => {
  // Получаем все кнопки и элементы контента
const navButtons = document.querySelectorAll('.courses__nav-button');
const courseContents = document.querySelectorAll('.courses__body-content');

// Функция для переключения вкладок
function switchTab(event) {
    const targetCourse = event.target.getAttribute('data-course');

    // Снимаем активный класс с кнопок и контента
    navButtons.forEach(button => button.classList.remove('courses__nav-button-is-active'));
    courseContents.forEach(content => content.classList.remove('courses__body-content-is-active'));

    // Добавляем активный класс на нажатую кнопку и соответствующий контент
    event.target.classList.add('courses__nav-button-is-active');
    document.querySelector(`.courses__body-content[data-course="${targetCourse}"]`).classList.add('courses__body-content-is-active');
}

// Добавляем обработчик события на каждую кнопку
navButtons.forEach(button => {
    button.addEventListener('click', switchTab);
});

};


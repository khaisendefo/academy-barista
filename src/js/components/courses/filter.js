export const filterCourses = () => {
  const buttons = document.querySelectorAll('.courses__nav-button');
  const wrappers = document.querySelectorAll('.courses__body-wrapper');

  buttons.forEach(button => {
    button.addEventListener('click', () => {

      buttons.forEach(btn => btn.classList.remove('courses__nav-button-is-active'));

      button.classList.add('courses__nav-button-is-active');

      const filter = button.getAttribute('data-course');

      wrappers.forEach(wrapper => {
        if (filter === 'all' || wrapper.getAttribute('data-course') === filter) {
          wrapper.style.display = 'block'; 
        } else {
          wrapper.style.display = 'none'; 
        }
      });
    });
  });
}
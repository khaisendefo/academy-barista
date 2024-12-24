export const modal = () => {
  const modal = document.querySelector('.modal');
  const modalButtons = document.querySelectorAll('.open-modal');
  const modalClose = document.querySelector('.modal__close');
  const form = document.querySelector('.modal__form'); 
  const body = document.body;

  if (modal && modalClose) {
    modalButtons.forEach(button => {
      button.addEventListener('click', openModal);
    });
    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
    window.addEventListener('keydown', escapeClose);
  }

  function openModal() {
    if (modal) {
      modal.style.display = 'block';
      body.style.overflow = 'hidden'; 
      body.classList.add('body-no-scroll');
    }
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      body.style.overflow = ''; 
      body.classList.remove('body-no-scroll');
      clearForm();
    }
  }

  function outsideClick(e) {
    if (modal && e.target === modal) {
      modal.style.display = 'none';
      body.style.overflow = ''; 
      body.classList.remove('body-no-scroll');
      clearForm();
    }
  }

  function escapeClose(e) {
    if (modal && e.key === 'Escape') {
      modal.style.display = 'none';
      body.style.overflow = ''; 
      body.classList.remove('body-no-scroll');
      clearForm();
    }
  }

  function clearForm() {
    if (form) {
      form.reset();
    }
  }
}

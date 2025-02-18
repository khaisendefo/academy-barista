// export const modal = () => {
//   const modal = document.querySelector('.modal');
//   const modalButtons = document.querySelectorAll('.open-modal');
//   const modalClose = document.querySelector('.modal__close');
//   const form = document.querySelector('.modal__form'); 
//   const body = document.body;

//   if (modal && modalClose) {
//     modalButtons.forEach(button => {
//       button.addEventListener('click', openModal);
//     });
//     modalClose.addEventListener('click', closeModal);
//     window.addEventListener('click', outsideClick);
//     window.addEventListener('keydown', escapeClose);
//   }

//   function openModal() {
//     if (modal) {
//       modal.style.display = 'block';
//       body.style.overflow = 'hidden'; 
//       body.classList.add('body-no-scroll');
//     }
//   }

//   function closeModal() {
//     if (modal) {
//       modal.style.display = 'none';
//       body.style.overflow = ''; 
//       body.classList.remove('body-no-scroll');
//       clearForm();
//     }
//   }

//   function outsideClick(e) {
//     if (modal && e.target === modal) {
//       modal.style.display = 'none';
//       body.style.overflow = ''; 
//       body.classList.remove('body-no-scroll');
//       clearForm();
//     }
//   }

//   function escapeClose(e) {
//     if (modal && e.key === 'Escape') {
//       modal.style.display = 'none';
//       body.style.overflow = ''; 
//       body.classList.remove('body-no-scroll');
//       clearForm();
//     }
//   }

//   function clearForm() {
//     if (form) {
//       form.reset();
//     }
//   }
// }

export const modal = () => {
  const modals = document.querySelectorAll('.modal, .modal-two'); 
  const modalButtons = document.querySelectorAll('.open-modal');
  const modalTwoButtons = document.querySelectorAll('.open-modal-two'); 
  const body = document.body;

  if (!modals.length) return;

  modalButtons.forEach(button => {
    button.addEventListener('click', () => openModal('.modal'));
  });

  modalTwoButtons.forEach(button => {
    button.addEventListener('click', () => openModal('.modal-two'));
  });

  modals.forEach(modal => {
    const closeButton = modal.querySelector('.modal__close');
    const overlay = modal.querySelector('.modal__overlay');
    const form = modal.querySelector('.modal__form');

    if (closeButton) {
      closeButton.addEventListener('click', () => closeModal(modal, form));
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) { // Проверяем, что клик именно по overlay
          closeModal(modal, form);
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(modal, form);
      }
    });
  });

  function openModal(selector) {
    const modal = document.querySelector(selector);
    if (modal) {
      modal.style.display = 'block';
      body.classList.add('body-no-scroll');
    }
  }

  function closeModal(modal, form) {
    modal.style.display = 'none';
    body.classList.remove('body-no-scroll');
    if (form) form.reset();
  }
};


// import JustValidate from 'just-validate';
// import axios from 'axios';
// import Inputmask from 'inputmask';

// export const sendFormTelegram = () => {
//   const telInputs = document.querySelectorAll('input[type="tel"]');
//   Inputmask({
//     mask: "+7 (999) 999-99-99",
//     showMaskOnHover: false,
//     showMaskOnFocus: true
//   }).mask(telInputs);

//   const forms = document.querySelectorAll('.form');

//   if (!forms.length) return;

//   forms.forEach(form => {
//     const validation = new JustValidate(form, {
//       errorFieldCssClass: 'is-invalid', 
//       errorLabelCssClass: 'form-error',
//       errorLabelStyle: {
//         color: '#ff0000', 
//       },
//     });

//     validation
//       .addField('.form-name', [
//         {
//           rule: 'required',
//           errorMessage: 'Введите имя',
//         },
//         {
//           rule: 'minLength',
//           value: 2,
//           errorMessage: 'Минимум 2 символа',
//         },
//       ])
//       .addField('.form-phone', [
//         {
//           rule: 'required',
//           errorMessage: 'Введите телефон',
//         },
//         {
//           rule: 'customRegexp',
//           value: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, // Маска для номера
//           errorMessage: 'Некорректный номер',
//         },
//       ])
//       .addField('.form-email', [
//         {
//           rule: 'required',
//           errorMessage: 'Введите email',
//         },
//         {
//           rule: 'email',
//           errorMessage: 'Некорректный email',
//         },
//       ])
//       .addField('.form__chek-chekbox', [
//         {
//           rule: 'required',
//           errorMessage: 'Нажмите, чтобы чтобы принять согласие на обработку данных.', 
//         },
//       ]);

//     form.addEventListener('submit', function (e) {
//       e.preventDefault();

//       const name = form.querySelector('[name="Имя"]')?.value;
//       const phone = form.querySelector('[name="Телефон"]')?.value;
//       const email = form.querySelector('[name="Email"]')?.value || '';
//       const messageContent = form.querySelector('[name="Сообщение"]')?.value || '';
//       const consent = form.querySelector('.form__chek-chekbox')?.checked;
//       const purpose = form.querySelector('.form-purpose')?.value || 'Не указано';

//       const errorMessageElement = form.querySelector('.form-error-message');
//       if (!name || !phone || !consent) {
//         if (errorMessageElement) {
//           errorMessageElement.textContent = "Пожалуйста, заполните все обязательные поля.";
//         }
//         return;
//       }

//       validation.onSuccess(() => {
//         let message = `${purpose}\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n${email ? `📧 Email: ${email}\n` : ''}✉️ Сообщение: ${messageContent}`;

//         const TOKEN = '7388127673:AAE8Yio_YZlFYMdtEw_ZeMA5UlVAJUm1MHc'; 
//         const CHAT_ID = '-1002415776830'; 
//         const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//         axios.post(URL_API, {
//           chat_id: CHAT_ID,
//           parse_mode: 'html',
//           text: message
//         })
//         .then(() => {
//           window.location.href = 'https://academy-barista.ru/thank-you.html';
//         })
//         .catch(error => {
//           console.error('Ошибка при отправке:', error);
//         });
//       });
//     });
//   });
// };




import JustValidate from 'just-validate';
import axios from 'axios';
import Inputmask from 'inputmask';

export const sendFormTelegram = () => {
  // Применяем маску для телефона
  const telInputs = document.querySelectorAll('input[type="tel"]');
  Inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: true
  }).mask(telInputs);

  // Находим все формы с классом .form
  const forms = document.querySelectorAll('.form');
  if (!forms.length) return;

  forms.forEach(form => {
    // Инициализация JustValidate для каждой формы
    const validation = new JustValidate(form, {
      errorFieldCssClass: 'is-invalid', 
      errorLabelCssClass: 'form-error',
      errorLabelStyle: {
        color: '#ff0000', 
      },
    });

    // Добавляем правила валидации
    validation
      .addField('.form-name', [
        {
          rule: 'required',
          errorMessage: 'Введите имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Минимум 2 символа',
        },
      ])
      .addField('.form-phone', [
        {
          rule: 'required',
          errorMessage: 'Введите телефон',
        },
        {
          rule: 'customRegexp',
          value: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
          errorMessage: 'Некорректный номер',
        },
      ])
      .addField('.form-email', [
        {
          rule: 'required',
          errorMessage: 'Введите email',
        },
        {
          rule: 'email',
          errorMessage: 'Некорректный email',
        },
      ])
      .addField('.form__chek-chekbox', [
        {
          rule: 'required',
          errorMessage: 'Нажмите, чтобы принять согласие на обработку данных.',
        },
      ])
      // Обработчик успешной валидации
      .onSuccess((event) => {
        // event.preventDefault() вызывается автоматически внутри JustValidate
        // Получаем значения полей формы
        const name = form.querySelector('[name="Имя"]')?.value;
        const phone = form.querySelector('[name="Телефон"]')?.value;
        const email = form.querySelector('[name="Email"]')?.value || '';
        const messageContent = form.querySelector('[name="Сообщение"]')?.value || '';
        const purpose = form.querySelector('.form-purpose')?.value || 'Не указано';

        let message = `${purpose}\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n${email ? `📧 Email: ${email}\n` : ''}✉️ Сообщение: ${messageContent}`;

        const TOKEN = '7388127673:AAE8Yio_YZlFYMdtEw_ZeMA5UlVAJUm1MHc'; 
        const CHAT_ID = '-1002415776830'; 
        const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        axios.post(URL_API, {
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: message
        })
        .then(() => {
          window.location.href = 'https://academy-barista.ru/thank-you.html';
        })
        .catch(error => {
          console.error('Ошибка при отправке:', error);
        });
      });
  });
};

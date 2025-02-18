// import style
import '/scss/contact.scss';

// import base component
import { yandexMapApi } from './base/yandex-maps';
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { modal } from './base/modal';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { accordionFooter } from './base/accordion-footer';
import { sliderSocial } from './components/contact/slider';
import { sendFormTelegram } from './base/send-form-telegram';

yandexMapApi();
accordionFooter();
toggleMenu();
mobileMenuAccordion();
headerFixed();
sliderSocial();
modal();
sendFormTelegram();
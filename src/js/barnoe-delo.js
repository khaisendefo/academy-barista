// import style
import '/scss/barnoe-delo.scss';

// impor libs
import fsLightbox from "fslightbox";

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';
import { sendFormTelegram } from './base/send-form-telegram';

headerFixed();
toggleMenu();
mobileMenuAccordion();
yandexMapApi();
modal();
accordionFooter();
sendFormTelegram();

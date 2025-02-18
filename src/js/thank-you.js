import '/scss/thank-you.scss';

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';
import { sendFormTelegram } from './base/send-form-telegram';

headerFixed();
toggleMenu();
mobileMenuAccordion();
modal();
accordionFooter();
sendFormTelegram();
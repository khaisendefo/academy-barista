// import style
import '/scss/vstryakhni-i-poday.scss';

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { gallerySlider } from './components/courses/gallery';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { teamTabs } from './base/team-tab';
import { accordionFooter } from './base/accordion-footer';
import { sendFormTelegram } from './base/send-form-telegram';

sendFormTelegram();
headerFixed();
toggleMenu();
mobileMenuAccordion();
yandexMapApi();
modal();
gallerySlider();
accordionFooter();
teamTabs();
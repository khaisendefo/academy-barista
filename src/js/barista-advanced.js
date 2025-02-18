// import style
import '/scss/barista-advanced.scss';

// impor libs
import fsLightbox from "fslightbox";

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { moreToggle } from './components/courses/more';
import { gallerySlider } from './components/courses/gallery';
import { teamTabs } from './base/team-tab';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';
import { sendFormTelegram } from './base/send-form-telegram';

headerFixed();
toggleMenu();
mobileMenuAccordion();
yandexMapApi();
modal();
moreToggle();
teamTabs();
gallerySlider();
accordionFooter();
sendFormTelegram();


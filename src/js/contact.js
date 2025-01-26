// import style
import '/scss/contact.scss';

// impor libs
import fsLightbox from "fslightbox";

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';
import { sliderSocial } from './components/contact/slider';

yandexMapApi();
modal();
accordionFooter();
toggleMenu();
mobileMenuAccordion();
headerFixed();
sliderSocial();
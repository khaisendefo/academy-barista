// import style
import '/scss/vstryakhni-i-poday.scss';

// impor libs
import fsLightbox from "fslightbox";

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { gallerySlider } from './components/courses/gallery';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';

headerFixed();
toggleMenu();
mobileMenuAccordion();
yandexMapApi();
modal();
gallerySlider();
accordionFooter();
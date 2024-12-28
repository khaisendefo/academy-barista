// import style
import '/scss/main.scss';

// impor libs
import fsLightbox from "fslightbox";

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { teamTabs } from './base/team-tab';
import { coursesSlide } from './components/home/courses-slider';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';
import { courseTab } from './components/home/courses-tab';

teamTabs();
yandexMapApi();
modal();
accordionFooter();
courseTab();
toggleMenu();
mobileMenuAccordion();
headerFixed();
coursesSlide();


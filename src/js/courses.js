// import style
import '/scss/courses.scss';

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { filterCourses } from './components/courses/filter';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';

headerFixed();
toggleMenu();
mobileMenuAccordion();
filterCourses();
yandexMapApi();
modal();
accordionFooter();
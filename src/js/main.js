// import style
import '/scss/main.scss';

// import base component
import { headerFixed } from './base/header-fixed';
import { toggleMenu} from './base/mobile-menu';
import { mobileMenuAccordion } from './base/mobile-menu-accordion';
import { teamTabs } from './base/team-tab';
import { modal } from './base/modal';
import { yandexMapApi } from './base/yandex-maps';
import { accordionFooter } from './base/accordion-footer';
import { courseTab } from './components/home/courses-tab';
import { sendFormTelegram } from './base/send-form-telegram';

teamTabs();
yandexMapApi();
modal();
accordionFooter();
courseTab();
toggleMenu();
mobileMenuAccordion();
headerFixed();
sendFormTelegram();


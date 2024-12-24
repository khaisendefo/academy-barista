// import style
import '/scss/main.scss';

// impor libs
import fsLightbox from "fslightbox";

// import base component
import { teamTabs } from './base/team-tab';
import { yandexMapApi } from './base/yandex-maps';
import { modal } from './base/modal';
import { accordionFooter } from './base/accordion-footer';
import { courseTab } from './components/home/courses-tab';

teamTabs();
yandexMapApi();
modal();
accordionFooter();
courseTab();
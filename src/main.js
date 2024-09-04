import './assets/styles/main.scss'
import { Burger } from "./js/burger.js";
import {Accordion} from "./js/accordion.js";

new Burger({
  buttonClass: '.header-burger',
  activeButtonClass: '.header-burger_active',
  menuClass: '.header__mobile-screen',
  activeMenuClass: '.header__mobile-screen_active',
  closingElementClasses: [ 
      '.mobile-menu-list__item-link',  
      '.header__mobile-screen_active'
  ],
  lockPaddingElementClass: '.lock-padding',
  showHideTime: 300,
}).init();

const headerMenuSubAccordion = new Accordion({
  accordionClassName: '.mobile-menu-list', 
  sectionClassName: '.mobile-menu-list__submenu-item', 
  activeSectionClassName: '.mobile-menu-list__submenu-item_active', 
  sectionTitleClassName: '.mobile-menu-list__sub-submenu-section-title', 
  sectionContentWrapperClassName: '.mobile-menu-list__sub-submenu-section-container',
  sectionContentClassName: '.mobile-menu-list__sub-submenu',
  showHideTime: 500,
});

headerMenuSubAccordion.init();

const headerMenuAccordion = new Accordion({
  accordionClassName: '.mobile-menu-list',
  sectionClassName: '.mobile-menu-list__item_submenu-section', 
  activeSectionClassName: '.mobile-menu-list__item_active', 
  sectionTitleClassName: '.mobile-menu-list__submenu-section-title', 
  sectionContentWrapperClassName: '.mobile-menu-list__submenu-section-container',
  sectionContentClassName: '.mobile-menu-list__submenu',
  showHideTime: 500,
  subAccordions: [headerMenuSubAccordion],
});

headerMenuAccordion.init();

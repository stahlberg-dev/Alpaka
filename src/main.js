import './assets/styles/main.scss'
import { Burger } from "./js/burger.js";
import { Accordion } from "./js/accordion.js";

new Burger({
  buttonClass: '.js-burger',
  activeButtonClass: '.isBurgerActive',
  menuClass: '.js-mobile-screen',
  activeMenuClass: '.isMobileScreenActive',
  closingElementClasses: [ 
      '.js-menu-link',  
      '.isMobileScreenActive'
  ],
  lockPaddingElementClass: '.js-lock-padding',
  showHideTime: 300,
}).init();

const headerMenuSubAccordion = new Accordion({
  accordionClass: '.js-accordion', 
  sectionClass: '.js-subaccordion-secton', 
  activeSectionClass: '.isSubSectionActive', 
  sectionTitleClass: '.js-subaccordion-secton-title', 
  sectionContentWrapperClass: '.js-subaccordion-secton-container',
  sectionContentClass: '.js-subaccordion-list',
  showHideTime: 500,
});

headerMenuSubAccordion.init();

const headerMenuAccordion = new Accordion({
  accordionClass: '.js-accordion',
  sectionClass: '.js-accordion-section', 
  activeSectionClass: '.isSectionActive', 
  sectionTitleClass: '.js-accordion-section-title', 
  sectionContentWrapperClass: '.js-accordion-section-container',
  sectionContentClass: '.js-subaccordion',
  showHideTime: 500,
  subAccordions: [headerMenuSubAccordion],
});

headerMenuAccordion.init();

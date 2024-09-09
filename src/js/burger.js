import { lockBody, unlockBody } from "./functions.js";

export class Burger {
  constructor(config) {
    this.buttonClass = config.buttonClass;
    this.activeButtonClass = config.activeButtonClass;
    this.menuClass = config.menuClass;
    this.activeMenuClass = config.activeMenuClass;
    this.closingElementClasses = config.closingElementClasses;
    this.lockPaddingElementClass = config.lockPaddingElementClass;
    this.showHideTime = config.showHideTime;
  }

  onBurgerClick(
    button,
    activeButtonClass,
    menu,
    activeMenuClass,
    lockPaddingElements,
    showHideTime
  ) {
    button.addEventListener("click", function () {
      if (menu.classList.contains(activeMenuClass.slice(1))) {
        unlockBody(lockPaddingElements, showHideTime);
      } else {
        lockBody(lockPaddingElements, showHideTime);
      }

      button.classList.toggle(activeButtonClass.slice(1));
      menu.classList.toggle(activeMenuClass.slice(1));
    });
  }

  onClosingElementClick(
    button,
    activeButtonClass,
    menu,
    activeMenuClass,
    closingElementClasses,
    lockPaddingElements,
    showHideTime
  ) {
    menu.addEventListener("click", (event) => {
      if (!menu.classList.contains(activeMenuClass.slice(1))) return;

      closingElementClasses?.forEach((closingElementClass) => {
        if (!event.target.closest(closingElementClass)) return;

        if (
          closingElementClass === activeMenuClass &&
          !event.target.classList.contains(activeMenuClass.slice(1))
        )
          return;

        button.classList.remove(activeButtonClass.slice(1));
        menu.classList.remove(activeMenuClass.slice(1));
        unlockBody(lockPaddingElements, showHideTime);
      });
    });
  }

  init() {
    window.addEventListener("load", () => {
      const button = document.querySelector(this.buttonClass);
      const menu = document.querySelector(this.menuClass);

      if (!button || !menu) return;

      const activeButtonClass = this.activeButtonClass;
      const activeMenuClass = this.activeMenuClass;
      const closingElementClasses = this.closingElementClasses;
      const lockPaddingElements = document.querySelectorAll(
        this.lockPaddingElementClass
      );
      const showHideTime = this.showHideTime;

      this.onBurgerClick(
        button,
        activeButtonClass,
        menu,
        activeMenuClass,
        lockPaddingElements,
        showHideTime
      );

      this.onClosingElementClick(
        button,
        activeButtonClass,
        menu,
        activeMenuClass,
        closingElementClasses,
        lockPaddingElements,
        showHideTime
      );
    });
  }
}

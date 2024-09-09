export class Accordion {
  constructor(config) {
    this.accordionClass = config.accordionClass;
    this.sectionClass = config.sectionClass;
    this.activeSectionClass = config.activeSectionClass;
    this.sectionTitleClass = config.sectionTitleClass;
    this.sectionContentWrapperClass = config.sectionContentWrapperClass;
    this.sectionContentClass = config.sectionContentClass;
    this.showHideTime = config.showHideTime;
    this.onLoadActiveSectionNums = config.onLoadActiveSectionNums;
    this.subAccordions = config.subAccordions;
  }

  onLoad({
    sectionClass,
    activeSectionClass,
    sectionContentWrapperClass,
    sectionContentClass,
    showHideTime,
    onLoadActiveSectionNums,
  }) {
    const sections = document.querySelectorAll(sectionClass);
    const sectionContentWrappers = document.querySelectorAll(
      sectionContentWrapperClass
    );
    const sectionContents = document.querySelectorAll(sectionContentClass);

    sectionContentWrappers.forEach((sectionContentWrapper) => {
      sectionContentWrapper.style.maxHeight = "0px";
      sectionContentWrapper.style.overflow = "hidden";
      sectionContentWrapper.style.transition = `max-height ${showHideTime}ms ease`;
    });

    sectionContents.forEach((sectionContent) => {
      sectionContent.style.display = "none";
    });

    onLoadActiveSectionNums?.forEach((num) => {
      if (!sections?.[num]) return;

      const contentWrapper = sections[num].querySelector(
        sectionContentWrapperClass
      );
      const content = sections[num].querySelector(sectionContentClass);

      sections[num].classList.add(activeSectionClass.slice(1));
      content.style.display = "block";
      contentWrapper.style.maxHeight = "";
    });
  }

  onClick({
    accordionClass,
    sectionClass,
    activeSectionClass,
    sectionTitleClass,
    sectionContentWrapperClass,
    sectionContentClass,
    showHideTime,
    subAccordions = [],
  }) {
    const accordion = document.querySelector(accordionClass);
    const titles = document.querySelectorAll(sectionTitleClass);

    titles.forEach((title) => {
      title.addEventListener("click", function (event) {
        const activeSections = document.querySelectorAll(activeSectionClass);
        const closestSection = event.target.closest(sectionClass);
        const isActive = closestSection?.classList.contains(
          activeSectionClass.slice(1)
        );

        accordion.style.pointerEvents = "none";

        setTimeout(() => {
          accordion.style.pointerEvents = "auto";
        }, showHideTime);

        activeSections.forEach((activeSection) => {
          const activeSectionContentWrapper = activeSection.querySelector(
            sectionContentWrapperClass
          );
          const activeSectionContent =
            activeSection.querySelector(sectionContentClass);

          activeSection.classList.remove(activeSectionClass.slice(1));

          activeSectionContentWrapper.style.maxHeight =
            activeSectionContent.offsetHeight + "px";

          setTimeout(() => {
            activeSectionContentWrapper.style.maxHeight = "0px";
          }, 0);

          setTimeout(() => {
            activeSectionContent.style.display = "none";
          }, showHideTime);

          subAccordions.forEach((subAccordion) => {
            if (
              !subAccordion?.activeSectionClass ||
              !subAccordion?.sectionContentWrapperClass ||
              !(
                subAccordion?.sectionContentClass || !subAccordion?.showHideTime
              )
            )
              return;

            const activeSubSections = activeSection.querySelectorAll(
              subAccordion.activeSectionClass
            );

            activeSubSections.forEach((activeSubSection) => {
              const activeSubWrapper = activeSubSection.querySelector(
                subAccordion.sectionContentWrapperClass
              );
              const activeSubContent = activeSubSection.querySelector(
                subAccordion.sectionContentClass
              );

              activeSubSection.classList.remove(
                subAccordion.activeSectionClass.slice(1)
              );

              activeSubWrapper.style.maxHeight =
                activeSectionContent.offsetHeight + "px";

              setTimeout(() => {
                activeSubWrapper.style.maxHeight = "0px";
              }, 0);

              setTimeout(() => {
                activeSubContent.style.display = "none";
              }, subAccordion.showHideTime);
            });
          });
        });

        if (closestSection && !isActive) {
          const closestSectionContentWrapper = closestSection.querySelector(
            sectionContentWrapperClass
          );
          const closestSectionContent =
            closestSection.querySelector(sectionContentClass);

          closestSection.classList.add(activeSectionClass.slice(1));
          closestSectionContent.style.display = "block";
          closestSectionContentWrapper.style.maxHeight =
            closestSectionContent.offsetHeight + "px";

          setTimeout(() => {
            closestSectionContentWrapper.style.maxHeight = "";
          }, showHideTime);
        }
      });
    });
  }

  init() {
    this.onLoad(this);
    this.onClick(this);
  }
}

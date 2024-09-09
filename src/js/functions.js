export function lockBody(lockPaddingElements, disablePointerDelay = 0) {
  if (!document.body.classList.contains("isLocked")) {
    const lockPaddingValue =
      window.innerWidth - document.documentElement.clientWidth + "px";

    document.body.style.paddingRight = lockPaddingValue;

    lockPaddingElements.forEach((item) => {
      item.style.paddingRight = lockPaddingValue;
    });
  }

  document.body.className = "isLocked isPointerDisabled";

  setTimeout(() => {
    document.body.classList.remove("isPointerDisabled");
  }, disablePointerDelay);
}

export function unlockBody(lockPaddingElements, unlockDelay = 0) {
  if (document.body.classList.contains("isPointerDisabled")) return;

  document.body.classList.add("isPointerDisabled");

  setTimeout(() => {
    document.body.className = "";
    document.body.style.paddingRight = "0px";

    lockPaddingElements.forEach((item) => {
      item.style.paddingRight = "0px";
    });
  }, unlockDelay);
}

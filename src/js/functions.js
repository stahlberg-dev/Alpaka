export function lockBody (lockPaddingElements, disablePointerDelay = 0) {

  if (!document.body.classList.contains('locked')) {

      const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';

      document.body.style.paddingRight = lockPaddingValue;
      
      lockPaddingElements.forEach(item => {
          item.style.paddingRight = lockPaddingValue;
      });

  }
  
  document.body.className = 'locked disable-pointer';

  setTimeout(() => {

      document.body.classList.remove('disable-pointer');

  }, disablePointerDelay);

}

export function unlockBody (lockPaddingElements, unlockDelay = 0) {

  if (document.body.classList.contains('disable-pointer')) return;

  document.body.classList.add('disable-pointer');

  setTimeout(() => {

      document.body.className = '';
      document.body.style.paddingRight = '0px';

      lockPaddingElements.forEach(item => {
          item.style.paddingRight = '0px';
      });

  }, unlockDelay);

}
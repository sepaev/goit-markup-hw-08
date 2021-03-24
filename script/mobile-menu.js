
(() => {
  const refs = {
    phoneMenuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu-button]'),
    menuContainer: document.querySelector('[data-menu-container]'),
    siteBody: document.querySelector('[data-body]'),
  };

  refs.phoneMenuBtn.addEventListener('click', togglePhoneMenu);
 
  function togglePhoneMenu() {
    refs.menu.classList.toggle('is-open');
    refs.menuContainer.classList.toggle('is-hidden');
    refs.siteBody.classList.toggle('menu-open');
  }
})()

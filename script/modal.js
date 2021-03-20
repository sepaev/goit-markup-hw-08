
(() => {
  const refs = {
    // константы модалки
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // константы менюшки
    phoneMenuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu-button]'),
    menuContainer: document.querySelector('[data-menu-container]'),
  };

  // товарищи наблюдатели

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.phoneMenuBtn.addEventListener('click', togglePhoneMenu);
 
  // ФУНКЦИИ
  function toggleModal() {
    refs.modal.classList.toggle('backdrop__is-hidden');

    const isModalHidden = refs.modal.classList.contains('backdrop__is-hidden');
    const method = isModalHidden ? "enableBodyScroll" : "disableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }

  function togglePhoneMenu() {
    refs.menu.classList.toggle('is-open');
        refs.menuContainer.classList.toggle('is-hidden');
  }
})()

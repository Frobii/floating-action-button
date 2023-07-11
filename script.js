const floatingItemMenu = () => {
  function revealItems() {
    const dropMenus = document.getElementsByClassName('menu-item');
    const dropMenusArray = Array.from(dropMenus);

    dropMenusArray.forEach((menu) => {
      menu.addEventListener('mouseover', () => {
        menu.firstElementChild.classList.add('drop-container-visible');
      });
    });

    dropMenusArray.forEach((menu) => {
      menu.addEventListener('mouseleave', () => {
        menu.firstElementChild.classList.remove('drop-container-visible');
      });
    });
  }

  return {
    revealItems,
  };
};

floatingItemMenu().revealItems();

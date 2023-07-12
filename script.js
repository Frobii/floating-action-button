const floatingItemMenu = () => {
  function setEvents() {
    const expandMenuButton = document.querySelector('.expand-menu-button');
    const floatingMenuContainer = document.querySelector('.floating-menu-container');

    const { body } = document;
    const overlay = document.createElement('div');
    overlay.classList.add('.overlay');

    expandMenuButton.addEventListener('click', () => {
      expandMenuButton.classList.add('expand-button-invisible');
      floatingMenuContainer.classList.add('float-container-visible');
      body.appendChild(overlay);
      overlay.classList.add('overlay-visible');
    });

    overlay.addEventListener('click', () => {
      floatingMenuContainer.classList.remove('float-container-visible');
      expandMenuButton.classList.remove('expand-button-invisible');
    });
  }

  return {
    setEvents,
  };
};

floatingItemMenu().setEvents();

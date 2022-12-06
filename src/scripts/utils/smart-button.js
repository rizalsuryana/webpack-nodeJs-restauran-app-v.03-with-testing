const smartButton = {
  init({ content, drawer, button }) {
    const hero = document.querySelector('.hero');

    content.addEventListener('click', (event) => {
      this.closePhoneButton(event, drawer);
    });

    button.addEventListener('click', (event) => {
      this.openPhoneButton(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this.closePhoneButton(event, drawer);
    });
  },

  closePhoneButton(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  openPhoneButton(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
};

export default smartButton;

export class PopMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      duration: options.duration || 300,
      ...options
    };
    this.initialize();
  }

  initialize() {
    this.menu.style.transition = `all ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '40%';
    this.menu.style.left = '50%';
    this.menu.style.transform = 'translate(-50%, -50%) scale(0.5)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }

  open() {
    this.menu.style.transform = 'translate(-50%, -50%) scale(1)';
    this.menu.style.opacity = '1';
    this.menu.style.visibility = 'visible';
  }

  close() {
    this.menu.style.transform = 'translate(-50%, -50%) scale(0.5)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }
}
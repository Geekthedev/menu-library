export class FadeMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      duration: options.duration || 300,
      ...options
    };
    this.initialize();
  }

  initialize() {
    this.menu.style.transition = `opacity ${this.options.duration}ms ease-in-out, visibility ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '0';
    this.menu.style.right = '0';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }

  open() {
    this.menu.style.opacity = '1';
    this.menu.style.visibility = 'visible';
  }

  close() {
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }
}
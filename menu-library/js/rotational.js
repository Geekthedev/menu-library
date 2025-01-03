export class RotationalMenu {
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
    this.menu.style.top = '50%';
    this.menu.style.left = '50%';
    this.menu.style.transform = 'translate(-50%, -50%) rotate(90deg)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
    this.menu.style.transformOrigin = 'center';
  }

  open() {
    this.menu.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    this.menu.style.opacity = '1';
    this.menu.style.visibility = 'visible';
  }

  close() {
    this.menu.style.transform = 'translate(-50%, -50%) rotate(90deg)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }
}
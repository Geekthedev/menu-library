export class DropdownMenu {
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
    this.menu.style.position = 'absolute';
    this.menu.style.top = '23%';
    this.menu.style.left = '0';
    this.menu.style.transform = 'translateY(-20px)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
    this.menu.style.transformOrigin = 'top';
  }

  open() {
    this.menu.style.transform = 'translateY(0)';
    this.menu.style.opacity = '1';
    this.menu.style.visibility = 'visible';
  }

  close() {
    this.menu.style.transform = 'translateY(-20px)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }
}
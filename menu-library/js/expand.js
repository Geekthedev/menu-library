export class ExpandMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      direction: options.direction || 'vertical',
      duration: options.duration || 300,
      ...options
    };
    this.initialize();
  }

  initialize() {
    this.menu.style.transition = `all ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '0';
    this.menu.style.right = '0';
    
    if (this.options.direction === 'vertical') {
      this.menu.style.height = '0';
      this.menu.style.width = '100%';
    } else {
      this.menu.style.width = '0';
      this.menu.style.height = '100vh';
    }
    
    this.menu.style.overflow = 'hidden';
    this.menu.style.opacity = '0';
  }

  open() {
    if (this.options.direction === 'vertical') {
      this.menu.style.height = '100vh';
    } else {
      this.menu.style.width = '300px';
    }
    this.menu.style.opacity = '1';
  }

  close() {
    if (this.options.direction === 'vertical') {
      this.menu.style.height = '0';
    } else {
      this.menu.style.width = '0';
    }
    this.menu.style.opacity = '0';
  }
}
export class SlideMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      direction: options.direction || 'left',
      duration: options.duration || 300,
      ...options
    };
    this.initialize();
  }

  initialize() {
    this.menu.style.transition = `transform ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '0';
    this.menu.style[this.options.direction] = '0';
    this.menu.style.height = '100vh';
    this.menu.style.transform = this.getInitialTransform();
  }

  getInitialTransform() {
    const axis = this.options.direction === 'left' || this.options.direction === 'right' ? 'X' : 'Y';
    const value = this.options.direction === 'left' || this.options.direction === 'top' ? '-100%' : '100%';
    return `translate${axis}(${value})`;
  }

  open() {
    this.menu.style.transform = 'translate(0)';
  }

  close() {
    this.menu.style.transform = this.getInitialTransform();
  }
}
export class PushMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      direction: options.direction || 'left',
      duration: options.duration || 300,
      ...options
    };
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    this.menu.style.transition = `transform ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '0';
    this.menu.style[this.options.direction] = '0';
    this.menu.style.height = '40vh';
    this.menu.style.width = '100px';
    this.menu.style.transform = 'translateX(-100%)';
    this.menu.style.zIndex = '1000';

    this.content = document.querySelector('body');
    this.content.style.transition = `transform ${this.options.duration}ms ease-in-out`;
    this.content.style.position = 'relative';
    this.content.style.height = '100%';
    this.content.style.transformOrigin = this.options.direction;
  }

  open() {
    if (this.isOpen) return;
    this.menu.style.transform = 'translateX(0)';
    this.content.style.transform = 'translateX(300px)';
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.isOpen) return;
    this.menu.style.transform = 'translateX(-100%)';
    this.content.style.transform = 'translateX(0)';
    this.isOpen = false;
    document.body.style.overflow = '';
  }
}
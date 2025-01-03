export class MorphMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      duration: options.duration || 300,
      ...options
    };
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    this.menu.style.transition = `all ${this.options.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '0';
    this.menu.style.right = '0';
    this.menu.style.width = '50px';
    this.menu.style.height = '50px';
    this.menu.style.borderRadius = '50%';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
    this.menu.style.transformOrigin = 'top right';
    this.menu.style.transform = 'scale(0.5)';
    this.menu.style.zIndex = '1000';
  }

  open() {
    if (this.isOpen) return;
    requestAnimationFrame(() => {
      this.menu.style.visibility = 'visible';
      this.menu.style.width = '100%';
      this.menu.style.height = '60vh';
      this.menu.style.borderRadius = '0';
      this.menu.style.opacity = '1';
      this.menu.style.transform = 'scale(1)';
    });
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;
    this.menu.style.width = '50px';
    this.menu.style.height = '50px';
    this.menu.style.borderRadius = '50%';
    this.menu.style.opacity = '0';
    this.menu.style.transform = 'scale(0.5)';
    
    setTimeout(() => {
      this.menu.style.visibility = 'hidden';
    }, this.options.duration);
    
    this.isOpen = false;
  }
}
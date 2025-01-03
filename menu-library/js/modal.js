export class ModalMenu {
  constructor(menu, options = {}) {
    this.menu = menu;
    this.options = {
      duration: options.duration || 300,
      ...options
    };
    this.initialize();
  }

  initialize() {
    this.createOverlay();
    this.menu.style.transition = `all ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '50%';
    this.menu.style.left = '50%';
    this.menu.style.transform = 'translate(-50%, -50%)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
    this.menu.style.zIndex = '1001';
    this.menu.style.maxHeight = '90vh';
    this.menu.style.overflowY = 'auto';
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'menu-overlay';
    document.body.appendChild(this.overlay);
    
    this.overlay.addEventListener('click', () => this.close());
  }

  open() {
    this.overlay.style.display = 'block';
    this.menu.style.opacity = '1';
    this.menu.style.visibility = 'visible';
  }

  close() {
    this.overlay.style.display = 'none';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }
}
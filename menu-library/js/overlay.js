export class OverlayMenu {
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
    this.createOverlay();
    this.menu.style.transition = `all ${this.options.duration}ms ease-in-out`;
    this.menu.style.position = 'fixed';
    this.menu.style.top = '0';
    this.menu.style.left = '0';
    this.menu.style.width = '100%';
    this.menu.style.height = '50vh';
    this.menu.style.transform = 'translateY(-100%)';
    this.menu.style.zIndex = '1001';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'menu-overlay';
    document.body.appendChild(this.overlay);
    
    this.overlay.addEventListener('click', () => {
      if (this.isOpen) this.close();
    });
  }

  open() {
    if (this.isOpen) return;
    this.overlay.style.display = 'block';
    this.menu.style.transform = 'translateY(0)';
    this.menu.style.opacity = '1';
    this.menu.style.visibility = 'visible';
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;
    this.overlay.style.display = 'none';
    this.menu.style.transform = 'translateY(-100%)';
    this.menu.style.opacity = '0';
    this.menu.style.visibility = 'hidden';
    this.isOpen = false;
  }
}
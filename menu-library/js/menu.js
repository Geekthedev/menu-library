class Menu {
  constructor(triggerElement, options = {}) {
    this.trigger = triggerElement;
    this.options = options;
    this.initialize();
  }

  initialize() {
    // Default settings
    const defaultOptions = {
      animationType: this.trigger.dataset.menu || "slide", // Use data-menu or fallback to slide
      direction: this.trigger.dataset.direction || "left", // Use data-direction or fallback to left
      duration: parseInt(this.trigger.dataset.duration, 10) || 300,
      overlay: this.trigger.dataset.overlay === "true",
    };

    this.settings = { ...defaultOptions, ...this.options };

    // Create menu if not already present
    this.menu = document.querySelector(this.trigger.dataset.target) || this.createMenu();

    this.menu.style.transition = `all ${this.settings.duration}ms ease-in-out`;
    this.menu.style.position = "fixed";
    this.menu.style.top = 0;
    this.menu.style.height = "100vh";
    this.menu.style.backgroundColor = "#333";
    this.menu.style.color = "white";
    this.menu.style.zIndex = 1000;

    // Default position based on direction
    this.menu.style.transform = `translate${this.settings.direction === "left" || this.settings.direction === "right" ? "X" : "Y"}(${this.settings.direction === "left" || this.settings.direction === "top" ? "-100%" : "100%"})`;

    if (this.settings.overlay) {
      this.createOverlay();
    }

    this.isOpen = false;
    this.attachEvents();
  }

  createMenu() {
    const menu = document.createElement("div");
    menu.className = "menu";
    menu.innerHTML = `<ul><li>Menu Item 1</li><li>Menu Item 2</li><li>Menu Item 3</li></ul>`;
    document.body.appendChild(menu);
    return menu;
  }

  createOverlay() {
    this.overlay = document.createElement("div");
    this.overlay.className = "menu-overlay";
    this.overlay.style.position = "fixed";
    this.overlay.style.top = 0;
    this.overlay.style.left = 0;
    this.overlay.style.width = "100vw";
    this.overlay.style.height = "100vh";
    this.overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    this.overlay.style.zIndex = 999;
    this.overlay.style.display = "none";
    this.overlay.addEventListener("click", () => this.close());
    document.body.appendChild(this.overlay);
  }

  open() {
    if (this.settings.overlay) this.overlay.style.display = "block";
    this.menu.style.transform = "translate(0)";
    this.isOpen = true;
  }

  close() {
    if (this.settings.overlay) this.overlay.style.display = "none";
    this.menu.style.transform = `translate${this.settings.direction === "left" || this.settings.direction === "right" ? "X" : "Y"}(${this.settings.direction === "left" || this.settings.direction === "top" ? "-100%" : "100%"})`;
    this.isOpen = false;
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  attachEvents() {
    this.trigger.addEventListener("click", () => this.toggle());
  }
}

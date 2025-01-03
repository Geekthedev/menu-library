import { SlideMenu } from './slide.js';
import { FadeMenu } from './fade.js';
import { ExpandMenu } from './expand.js';
import { PopMenu } from './pop.js';
import { OverlayMenu } from './overlay.js';
import { DropdownMenu } from './dropdown.js';
import { ModalMenu } from './modal.js';
import { PushMenu } from './push.js';
import { RotationalMenu } from './rotational.js';
import { MorphMenu } from './morph.js';

export class MenuLibrary {
  constructor() {
    this.initializeMenus();
  }

  initializeMenus() {
    document.querySelectorAll('[data-menu]').forEach(trigger => {
      const menuId = trigger.dataset.target;
      const menu = document.querySelector(menuId);
      
      if (!menu) {
        console.warn(`Menu ${menuId} not found`);
        return;
      }

      const options = {
        animationType: trigger.dataset.menu || 'slide',
        direction: trigger.dataset.direction,
        duration: parseInt(trigger.dataset.duration, 10) || 300,
        overlay: trigger.dataset.overlay === 'true'
      };

      const menuTypes = {
        slide: SlideMenu,
        fade: FadeMenu,
        expand: ExpandMenu,
        pop: PopMenu,
        overlay: OverlayMenu,
        dropdown: DropdownMenu,
        modal: ModalMenu,
        push: PushMenu,
        rotational: RotationalMenu,
        morph: MorphMenu
      };

      const MenuClass = menuTypes[options.animationType];
      if (!MenuClass) {
        console.warn(`Unknown menu type: ${options.animationType}`);
        return;
      }

      const menuInstance = new MenuClass(menu, options);
      
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          menuInstance.close();
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          menuInstance.open();
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  new MenuLibrary();
});


---

# Menu Animation Library 

This repository demonstrates various types of animated menus created using an external JavaScript library. The purpose of this project is to showcase multiple menu styles and transitions that can be easily implemented on any website. The menus in this project include slide, fade, pop, overlay, dropdown, modal, push, rotational, and morph animations.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Menu Styles](#menu-styles)
6. [Customization](#customization)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

This project uses the **[Menu Animation Library](https://cdn.jsdelivr.net/gh/Geekthedev/menu-library@main/menu-library/js/menu-library.js)** hosted on **JSDelivr** to create various animated menus. The menus include simple slide-ins, fades, pop-up animations, and other transitions, making it easier to add modern, interactive menu designs to your website.

The menus can be customized and integrated into your projects with minimal code changes. This `README.md` explains how to set up and use these animations effectively.

---

## Features

- **Multiple Menu Styles**: Slide, fade, pop, overlay, dropdown, modal, push, rotational, and morph.
- **Interactive Buttons**: Each menu has a dedicated button to trigger the animation effect.
- **Responsive Design**: The layout is optimized for both desktop and mobile devices.
- **Minimal Setup**: Easily integrate the styles and functionality into any webpage.

---

## Installation

To get started with this project, you need the following:

1. **HTML file**: The base structure of the webpage, where the menus will be displayed.
2. **External CSS**: The library that provides predefined styles for various menu types.
3. **External JavaScript**: A library to handle the menu animations.

### Step 1: Download or Clone the Repository

You can either clone this repository or download the ZIP file to your local machine.

```bash
git clone https://github.com/your-username/menu-animation-library.git
```

### Step 2: Link External CSS and JS

In your HTML file, ensure that you link the external CSS and JavaScript files from **JSDelivr**. Here's how:

- **CSS**: Use the following link in the `<head>` section of your HTML:

  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Geekthedev/menu-library@main/menu-library/menu-styles.css">
  ```

- **JavaScript**: Use the following script tag just before the closing `</body>` tag:

  ```html
  <script type="module" src="https://cdn.jsdelivr.net/gh/Geekthedev/menu-library@main/menu-library/js/menu-library.js"></script>
  ```

### Step 3: Add HTML Markup

Use the provided HTML structure in the `index.html` to create various types of menus. The sample HTML includes buttons for triggering different animated menus and containers to hold the menus themselves.

---

## Usage

Once the setup is complete, you can use the buttons to trigger different animations for the menus. Each menu has a corresponding button to open it, and the library will take care of the animation transitions.

Here’s how to open each menu:

1. **Slide Menu**: Opens from the left, sliding in the menu content.
2. **Fade Menu**: Fades in the menu content.
3. **Pop Menu**: Pops in from the center.
4. **Overlay Menu**: A full-screen overlay menu that slides in.
5. **Dropdown Menu**: Displays the menu content in a dropdown style.
6. **Modal Menu**: A modal-style menu that opens centered on the screen.
7. **Push Menu**: The content is pushed to one side while the menu appears.
8. **Rotational Menu**: Rotates to display the menu.
9. **Morph Menu**: The menu morphs into the desired shape during the animation.

Each menu can be customized by changing the `data-menu` attribute in the button element. You can also adjust the `data-duration` attribute to change the speed of the animations.

---

## Menu Styles

This project comes with several predefined animated menu styles that can be customized further to fit your needs. Below is a brief overview of each menu style:

1. **Slide**: This menu slides in from the left side of the screen.
2. **Fade**: This menu fades into view, providing a subtle transition effect.
3. **Pop**: This menu pops up from the center, drawing attention to itself.
4. **Overlay**: This style takes over the entire screen, displaying the menu in an overlay format.
5. **Dropdown**: The menu content drops down from the top or bottom.
6. **Modal**: A modal window that appears centered on the screen, typically used for critical interactions.
7. **Push**: The content of the page is pushed to one side while the menu comes in from the other side.
8. **Rotational**: The menu rotates into place, offering a unique animated effect.
9. **Morph**: This menu morphs into the required position or shape.

Each menu type has its own class in the provided CSS file, which is automatically applied when the button is clicked.

---

## Customization

You can further customize the menu styles by adjusting the following attributes in the HTML file:

- **Direction of Slide Menus**: Change the `data-direction` attribute in the button to control whether the slide menu comes from the left, right, top, or bottom.
- **Animation Duration**: Use the `data-duration` attribute to adjust how quickly the menu animates. The value is in milliseconds (e.g., 300 for 0.3 seconds).
- **Menu Content**: Modify the `<ul class="menu-list">` to add or remove items, or adjust the design of the links inside.

---

## Contributing

We welcome contributions to improve the functionality, styles, and features of this library. Feel free to submit pull requests for bug fixes, enhancements, or documentation updates.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding, and enjoy creating stunning menus with smooth animations!


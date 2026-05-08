# Nexus - Modern Responsive Business Website

A premium, modern, and responsive business website template built with Vanilla HTML, CSS, and JavaScript. Inspired by premium WordPress themes, this project features a clean UI, mobile-first responsive design, and smooth scroll animations.

## Features

- **Modern Aesthetics:** Clean UI, soft shadows, and modern typography (Inter & Outfit).
- **Fully Responsive:** Mobile-first design that looks great on all devices, featuring a mobile hamburger menu.
- **Smooth Animations:** Built-in CSS transitions and `IntersectionObserver` based scroll animations (fade-ins).
- **Reusable Components:** Well-structured CSS classes for buttons, cards, grids, and more.
- **5 Complete Pages:** 
  - `index.html` (Home)
  - `about.html` (About Us)
  - `services.html` (Services)
  - `portfolio.html` (Portfolio)
  - `contact.html` (Contact with styled form)

## Technologies Used

- HTML5
- CSS3 (Vanilla with CSS Variables)
- JavaScript (Vanilla, no external libraries required)

## Getting Started

Since this is a static website, no build process is required. 

1. Clone the repository:
   ```bash
   git clone https://github.com/Keerthan-Bhat/Modern-Responsive-Business-Website.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Modern-Responsive-Business-Website
   ```
3. Open `index.html` in your favorite web browser.

## Project Structure

```
├── css/
│   └── style.css       # Global styles, variables, and components
├── js/
│   └── main.js         # Mobile menu, sticky header, scroll animations
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio showcase
└── contact.html        # Contact page with form
```

## Customization

You can easily customize the theme by modifying the CSS variables found at the top of `css/style.css`:

```css
:root {
  /* Colors */
  --color-primary: #0f172a;    
  --color-secondary: #334155;  
  --color-accent: #2563eb;     
  /* ... */
}
```

## License

This project is open-source and available for use in personal or commercial projects.

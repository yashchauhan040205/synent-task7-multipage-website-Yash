# FitZone Gym - Multi-Page Website

A modern, responsive, and visually stunning Gym & Fitness multi-page website called **FitZone Gym** built using clean semantic HTML5, custom CSS layout grids, and vanilla JavaScript.

## Website Features
- **Pages Included:**
  - **Home (`index.html`):** Hero tagline, premium interactive feature cards, pricing plans preview, and customer testimonials.
  - **About (`about.html`):** History introduction, mission & vision statements, metrics/statistics, and elite trainers grid.
  - **Services (`services.html`):** 6 training programs with custom SVG icons and a full comparative pricing table.
  - **Contact (`contact.html`):** Address details, custom stylized Google Maps embed, and a contact message form.
- **Design System:**
  - Modern, clean Light Theme with an Active Royal Blue accent.
  - White card surfaces with subtle hover scale animations and soft box-shadows.
  - Consistent layout branding (navigation headers and footers).
- **Responsive Layout:**
  - Designed for Desktop, Tablet, and Mobile viewport configurations.
  - Animated mobile hamburger menu slides out seamlessly.
- **Interactivity & Validation:**
  - Form field constraints validation with clear success/error prompts.
  - Scroll-reveal animations using Javascript's `IntersectionObserver`.

## Folder Structure
```
gym-website/
│
├── index.html
├── about.html
├── services.html
├── contact.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    ├── hero.jpg
    ├── trainer1.jpg
    ├── trainer2.jpg
    └── trainer3.jpg
```

## How to Run Locally

Navigate to the project root directory and serve the files:

### Option 1: Node.js (http-server)
```bash
npx http-server -p 8080
```
Then open `http://localhost:8080` in your web browser.

### Option 2: Python HTTP Server
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your web browser.

### Option 3: File Protocol
Simply double-click `index.html` to open it locally.

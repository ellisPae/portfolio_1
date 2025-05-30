# Ellis Pae Portfolio

A modern, responsive portfolio website showcasing my work as a Software Engineer. Built with React, Vite, and Tailwind CSS, it features light/dark theme support, smooth scroll snapping, a projects carousel, and a contact form powered by EmailJS.

---

## Features

* **Fast Development & Build** thanks to Vite's lightning‑fast dev server and bundling.
* **Tailwind CSS** with utility‑first styling and class‑based dark mode variants.
* **Dark Mode (Work in Progress)**:

  * Automatically syncs to the user’s system preference on first visit.
  * Manual toggle overrides preference and persists in `localStorage`.
  * Initial `<script>` in `index.html` prevents FOUC.
  * ✏️ *Still refining transitions and edge‑case coverage.*
* **Smooth Scroll & Section Snapping** for full‑screen section navigation.
* **Projects Carousel** using `react-responsive-carousel` to showcase key projects.
* **Contact Form** implemented with `react-hook-form` and EmailJS for sending messages directly from the client.

---

## Technologies Used

* **React** (v18+) for UI components.
* **Vite** as the build tool & dev server.
* **Tailwind CSS** for utility‑first styling.
* **PostCSS & Autoprefixer** for CSS processing.
* **react-responsive-carousel** for the project slideshow.
* **react-hook-form** for form management.
* **EmailJS** for client‑side email delivery.
* **react-icons** & **FontAwesome** for iconography.
* **Framer Motion** for subtle animations.
* **Node.js** (v14+) and **Yarn** (Berry/4.x) or **npm**.

---

## Demo

Live demo available at: [https://ellisPae.github.io/portfolio\_1/](https://ellisPae.github.io/portfolio_1/)

---

## Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/ellisPae/portfolio_1.git
   cd portfolio_1
   ```
2. **Install dependencies**

   ```bash
   # Yarn
   yarn install

   # Or npm
   npm install
   ```
3. **Start local server**

   ```bash
   # Yarn
   yarn dev

   # npm
   npm run dev
   ```

   Then open `http://localhost:5173` in your browser.

---

## Production Build & Preview

```bash
# Build assets
yarn build    # or npm run build

# Preview production bundle locally
yarn preview  # or npm run preview
```

---

## Project Structure

```
portfolio_1/
├── public/               # Static assets & index.html
├── src/
│   ├── assets/           # Images, icons
│   ├── components/       # Reusable React components
│   ├── context/          # ThemeContext implementation
│   ├── index.css         # Tailwind directives & global CSS
│   ├── main.jsx          # App entry point
│   └── App.jsx           # Top‑level layout
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m "feat: description"`).
4. Push to the branch (`git push origin feature/name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. © 2025 Ellis Pae

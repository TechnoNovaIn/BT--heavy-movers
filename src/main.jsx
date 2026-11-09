import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

// Shared styles first (variables, resets, buttons, section titles) —
// section-specific files below can safely override these since they
// load after.
import "./globals.css";
import "./components/Home/Home.css";

// One CSS file per section. Each file's selectors are scoped under
// that section's own root class (e.g. Navbar.css -> .navbarParentNode),
// so import order between these doesn't matter for correctness.
import "./components/Loader/Loader.css";
import "./components/Home/Navbar.css";
import "./components/Home/Hero.css";
import "./components/Home/sections/About.css";
import "./components/Home/sections/Stats.css";
import "./components/Home/sections/Specifications.css";
import "./components/Home/sections/Advantages.css";
import "./components/Home/sections/Gallery.css";
import "./components/Home/sections/Certifications.css";
import "./components/Home/sections/Letter.css";
import "./components/Home/sections/Team.css";
import "./components/Home/sections/Contact.css";
import "./components/Home/sections/Footer.css";
import "./components/Home/sections/Lightbox.css";
import "./components/Careers/Careers.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

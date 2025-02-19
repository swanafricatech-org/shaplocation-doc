import './assets/main.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/gumshoe/5.1.1/gumshoe.polyfills.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js"; 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import en from './locales/en.json'
import fr from "./locales/fr.json";

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "fr",
  messages: {
    fr,
    en,
  },
});

const app = createApp(App);


app.use(router);
app.use(i18n);
app.mount("#app");
   

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /* ====== Define JS Constants ====== */
  const sidebarToggler = document.querySelector(
    ".docs-top-utilities #docs-sidebar-toggler"
  );
  const sidebar = document.getElementById("docs-sidebar");
  const sidebarLinks = document.querySelectorAll("#docs-sidebar .scrollto");
 console.log(router.currentRoute.value.path);
  if (sidebarToggler && sidebar) {
    /* ===== Responsive Sidebar ====== */

    window.onload = function () {
      responsiveSidebar();
    };

    window.onresize = function () {
      responsiveSidebar();
    };

    function responsiveSidebar() {
      let w = window.innerWidth;
      if (w >= 1200) {
        // if larger
        console.log("larger");
        sidebar.classList.remove("sidebar-hidden");
        sidebar.classList.add("sidebar-visible");
      } else {
        // if smaller
        console.log("smaller");
        sidebar.classList.remove("sidebar-visible");
        sidebar.classList.add("sidebar-hidden");
      }
    }

    sidebarToggler.addEventListener("click", () => {
      sidebarToggler.classList.toggle("is-active");
      if (sidebar.classList.contains("sidebar-visible")) {
        console.log("visible");
        sidebar.classList.remove("sidebar-visible");
        sidebar.classList.add("sidebar-hidden");
      } else {
        console.log("hidden");
        sidebar.classList.remove("sidebar-hidden");
        sidebar.classList.add("sidebar-visible");
      }
    });
  }

  /* ===== Smooth scrolling ====== */
  if (sidebarLinks.length > 0) {
    sidebarLinks.forEach((sidebarLink) => {
      sidebarLink.addEventListener("click", (e) => {
        e.preventDefault();
        var target = sidebarLink;
        // if (sidebarLink.classList.contains("active")) {
        //   target.classList.remove("active");
          
        // } else {
        //   target.classList.add("active");  
        // }

        //console.log(target);
        

        document.getElementById(target).scrollIntoView({ behavior: "smooth" });

        //Collapse sidebar after clicking
        if (
          sidebar.classList.contains("sidebar-visible") &&
          window.innerWidth < 1200
        ) {
          sidebar.classList.remove("sidebar-visible");
          sidebar.classList.add("sidebar-hidden");
        }
      });
    });
  }

  /* ===== Gumshoe SrollSpy ===== */
  var spy = new Gumshoe("#docs-nav a", {
    offset: 69, //sticky header height
  });

  /* ====== SimpleLightbox Plugin ======= */
  // var lightbox = new simpleLightbox(".gallery a", {
  //   /* options */
  // });

  
});

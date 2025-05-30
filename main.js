<<<<<<< HEAD
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
=======
// Main JavaScript file for common functionality

document.addEventListener('DOMContentLoaded', () => {
  // Initialize global event listeners
  initializeEventListeners();
  
  // Setup mobile menu
  setupMobileMenu();
  
  // Update cart badge
  updateCartBadge();
  
  // Setup search functionality
  setupSearch();
});

/**
 * Initialize global event listeners
 */
function initializeEventListeners() {
  // Listen for changes to the cart
  window.addEventListener('storage', event => {
    if (event.key === 'cart') {
      updateCartBadge();
    }
  });
  
  // Update cart badge when custom event is fired
  document.addEventListener('cartUpdated', () => {
    updateCartBadge();
  });
}

/**
 * Setup mobile menu functionality
 */
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', event => {
      if (!mobileMenuBtn.contains(event.target) && 
          !mobileMenu.contains(event.target) && 
          mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      }
    });
  }
}

/**
 * Setup search functionality
 */
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  
  if (searchInput && searchBtn) {
    // Search on button click
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  }
}

// Make the header sticky and change appearance on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});
>>>>>>> ec79e5da763c7e4e85c614fbd349ad6a2ff4602f

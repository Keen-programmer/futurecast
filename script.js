// Set the target date and time
const targetDate = new Date('August 7, 2025 09:00:00').getTime();
      
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "The countdown has ended!";
    clearInterval(timer); // Stop the countdown when reached
    return;
  }

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById('days').innerHTML = `
    <h4>${days}<br /><span>DAYS</span></h4>
  `;

  document.getElementById('hours').innerHTML = `
    <h4>${hours}<br /><span>HOURS</span></h4>
  `;

  document.getElementById('minutes').innerHTML = `
    <h4>${minutes}<br /><span>MINUTES</span></h4>
  `;

  document.getElementById('seconds').innerHTML = `
    <h4>${seconds}<br /><span>SECONDS</span></h4>
  `;
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initialize the countdown immediately
updateCountdown();

// Select all elements with class 'fade-in'
const faders = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.1, // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      // Optional: unobserve after animation
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe each element
faders.forEach(fader => {
  observer.observe(fader);
});

//Mobile menu toggle 
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
      
      // Toggle aria-expanded attribute
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
      
      // Toggle 'show' class to display/hide menu
      mobileMenu.classList.toggle('show');
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navlinks a');

    // Get current path, e.g., /index.html
    const currentPath = window.location.pathname;

    // Loop through links to find the one matching current URL
    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;

      // Check if link's pathname matches current path
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
  });

  
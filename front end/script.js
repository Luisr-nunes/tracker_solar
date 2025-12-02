const panels = document.querySelectorAll('.panel');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

panels.forEach(panel => observer.observe(panel));

const navLinks = document.querySelectorAll('.nav a');
const sections = [...document.querySelectorAll('main section')];
const overlay = document.querySelector('.transition-overlay');
const interactiveLinks = document.querySelectorAll('a[href^="#"], .cta');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let overlayTimeout;

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120;
  let current = sections[0].id;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
});

function playBlurTransition() {
  if (!overlay || prefersReducedMotion.matches) return;
  document.body.classList.add('overlay-active');
  overlay.classList.add('visible');
  clearTimeout(overlayTimeout);
  overlayTimeout = setTimeout(() => {
    document.body.classList.remove('overlay-active');
    overlay.classList.remove('visible');
  }, 500);
}

interactiveLinks.forEach(link => {
  link.addEventListener('click', () => {
    playBlurTransition();
  });
});

prefersReducedMotion.addEventListener('change', () => {
  if (prefersReducedMotion.matches) {
    document.body.classList.remove('overlay-active');
    overlay?.classList.remove('visible');
  }
});

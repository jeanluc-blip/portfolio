// ============================================================
// Menu mobile
// ============================================================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// Année dynamique dans le footer
// ============================================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================================
// Terminal — animation de frappe (élément signature du hero)
// ============================================================
const terminalOutput = document.getElementById('terminal-output');

const terminalLines = [
  { text: 'const ', cls: 'key' },
  { text: 'developer', cls: '' },
  { text: ' = {\n', cls: '' },
  { text: '  nom: ', cls: '' },
  { text: "'Kpekpede Jean Luc'", cls: 'str' },
  { text: ',\n', cls: '' },
  { text: '  role: ', cls: '' },
  { text: "'Développeur Web'", cls: 'str' },
  { text: ',\n', cls: '' },
  { text: '  stack: ', cls: '' },
  { text: "['HTML', 'CSS', 'JavaScript']", cls: 'str' },
  { text: ',\n', cls: '' },
  { text: '  disponible: ', cls: '' },
  { text: 'true', cls: 'key' },
  { text: '\n};', cls: '' },
];

function typeTerminal() {
  if (!terminalOutput) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fullMarkup = terminalLines
    .map((part) => (part.cls ? `<span class="${part.cls}">${part.text}</span>` : part.text))
    .join('');

  if (prefersReducedMotion) {
    terminalOutput.innerHTML = fullMarkup + '<span class="cursor"></span>';
    return;
  }

  const flatText = terminalLines.map((p) => p.text).join('');
  let i = 0;

  function step() {
    terminalOutput.textContent = flatText.slice(0, i);
    terminalOutput.innerHTML += '<span class="cursor"></span>';
    i++;
    if (i <= flatText.length) {
      requestAnimationFrame(() => setTimeout(step, 18));
    } else {
      // Une fois le texte complet affiché, on remet la coloration syntaxique
      terminalOutput.innerHTML = fullMarkup + '<span class="cursor"></span>';
    }
  }

  step();
}

document.addEventListener('DOMContentLoaded', typeTerminal);

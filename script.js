const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

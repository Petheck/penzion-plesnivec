// Topbar background after scroll
const topbar = document.getElementById('topbar');
const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const toggle = document.getElementById('navtoggle');
const nav = document.getElementById('mainnav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Lightbox
const lb = document.getElementById('lightbox');
const lbimg = document.getElementById('lbimg');
document.getElementById('gallery').addEventListener('click', e => {
  if (e.target.tagName !== 'IMG') return;
  lbimg.src = e.target.src;
  lbimg.alt = e.target.alt;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
});
const closeLb = () => {
  lb.hidden = true;
  lbimg.src = '';
  document.body.style.overflow = '';
};
document.getElementById('lbclose').addEventListener('click', closeLb);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

// Footer year
document.getElementById('rok').textContent = new Date().getFullYear();

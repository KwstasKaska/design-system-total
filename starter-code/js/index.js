const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  let visibility =
    nav.getAttribute('data-visible') === 'false'
      ? nav.setAttribute('data-visible', true) + navToggle.setAttribute('aria-expanded', true)
      : nav.setAttribute('data-visible', false) + navToggle.setAttribute('aria-expanded', false);

  console.log(navToggle.getAttribute('aria-expanded'));
});

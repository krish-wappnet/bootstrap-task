const toggleButton = document.getElementById('navbar-toggler');
const navbarCollapse = document.getElementById('navbarToggleExternalContent3');

toggleButton.addEventListener('click', () => {
    navbarCollapse.classList.toggle('collapse');
});
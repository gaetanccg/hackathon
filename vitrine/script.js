// Fonction pour déterminer quelle section est visible à l'écran
function getVisibleSection() {
    return [...document.querySelectorAll('.section')].find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
}

// Fonction pour mettre à jour la classe "active" en fonction de la section visible
function updateActiveSection() {
    const visibleSection = getVisibleSection();

    // Désactiver la classe "active" de tous les éléments <li>
    document.querySelectorAll('.nav li').forEach((item) => item.classList.remove('active'));

    // Activer la classe "active" pour l'élément <li> correspondant
    if (visibleSection) {
        const targetId = visibleSection.getAttribute('id');
        const targetNavItem = document.querySelector(`.nav a[href="#${targetId}"]`);
        if (targetNavItem) targetNavItem.parentElement.classList.add('active');
    }
}

// Gestionnaire d'événement au défilement de la page
window.addEventListener('scroll', updateActiveSection);

// Gestionnaire d'événement de clic à chaque lien
document.querySelectorAll('.nav a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Désactiver la classe "active" de tous les éléments <li>
        document.querySelectorAll('.nav li').forEach((item) => item.classList.remove('active'));

        // Activer la classe "active" pour l'élément <li> correspondant
        document.querySelectorAll('.nav li')[index].classList.add('active');

        // Récupérer l'ancre cible du lien
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Faites défiler la page jusqu'à la section cible
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Appliquer la classe d'animation à la section
            setTimeout(() => targetSection.classList.add('scroll-animate'), 100);
        }
    });
});

// Appel initial pour gérer la classe "active" au chargement de la page
updateActiveSection();

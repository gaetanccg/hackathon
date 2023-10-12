// JavaScript pour activer l'effet d'apparition des Cards
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");
    
    // Fonction pour activer l'effet d'apparition des Cards
    function showCards() {
        cards.forEach(function (card) {
            card.classList.add("show");
        });
    }
    
    // Activer l'effet d'apparition lorsque la section "Membres" est visible
    window.addEventListener("scroll", function () {
        let sectionMembres = document.getElementById("membres");
        let sectionMembresTop = sectionMembres.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        
        if (sectionMembresTop < windowHeight) {
            showCards();
        }
    });
});

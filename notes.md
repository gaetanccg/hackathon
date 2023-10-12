### Pour installer le SCSS
npm install -g sass

### Créer le fichier SCSS
'style.scss'
# Ecrire le code scss

### Compilez votre fichier SCSS en CSS
sass styles.scss styles.css

### Utilisez le fichier CSS compilé 
<link rel="stylesheet" type="text/css" href="styles.css">

### Regénérez automatiquement le CSS lors de modifications (Optionnel) 
sass --watch styles.scss:styles.css

--------------------------------------------------------------------------

<!-- Écran de chargement -->
    <div id="loader">
        <img src="images/loading.gif" alt="Chargement en cours">
    </div>

<!-- CSS de l'écran de chargement -->
#loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Assurez-vous que l'écran de chargement est au-dessus de tout le reste */
}

#loader img {
    width: 100px; /* Ajustez la taille de l'image en fonction de vos besoins */
    height: 100px;
}

Rose : rgb(248,161,170)
Bleu 1 : rgba(12,16,69,255)
Bleu 2 : rgb(60,61,108)

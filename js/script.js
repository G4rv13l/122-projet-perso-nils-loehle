// Directive de renforcement des règles du langage
"use strict";

// Tableau de films
let films = [
    {
        titre: "Forrest Gump",
        realisateur: "Robert Zemeckis",
        annee: 1994,
        note: 8.8,
        genre: "Drame",
        poster: "affiches/Forrest_Gump.jpg",
    },
    {
        titre: "Les Évadés",
        realisateur: "Frank Darabont",
        annee: 1994,
        note: 9.3,
        genre: "Drame",
        poster: "affiches/The_Shawshank_Redemption.jpg"
    },
    {
        titre: "Death Business",
        realisateur: "Maggie Betts",
        annee: 2023,
        note: 7.1,
        genre: "Drame",
        poster: "affiches/The_Burial.jpg"
    },
    {
        titre: "Will Hunting",
        realisateur: "Gus Van Sant",
        annee: 1997,
        note: 8.3,
        genre: "Drame",
        poster: "affiches/Good_Will_Hunting.jpg"
    },
    {
        titre: "L'Armée des ombres",
        realisateur: "Jean-Pierre Melville",
        annee: 1969,
        note: 8.0,
        genre: "Guerre",
        poster: "affiches/L'armée_des_ombres.jpg"
    },
    {
        titre: "Le Pont de la rivière Kwaï",
        realisateur: "David Lean",
        annee: 1957,
        note: 8.1,
        genre: "Guerre",
        poster: "affiches/The_Bridge_on_the_River_Kwai.jpg"
    },
    {
        titre: "Les Sentiers de la gloire",
        realisateur: "Stanley Kubrick",
        annee: 1957,
        note: 8.4,
        genre: "Guerre",
        poster: "affiches/Paths_of_Glory.jpg"
    },
    {
        titre: "Lake Mungo",
        realisateur: "Joel Anderson",
        annee: 2008,
        note: 6.9,
        genre: "Horreur",
        poster: "affiches/Lake_Mungo.jpg"
    },
    {
        titre: "Catacombes",
        realisateur: "John Erick Dowdle",
        annee: 2014,
        note: 6.2,
        genre: "Horreur",
        poster: "affiches/As_Above_So_Below.jpg"
    },
    {
        titre: "Alien, le huitième passager",
        realisateur: "Ridley Scott",
        annee: 1979,
        note: 8.4,
        genre: "Science-Fiction",
        poster: "affiches/Alien.jpg"
    },
    {
        titre: "La Ligne verte",
        realisateur: "Frank Darabont",
        annee: 1999,
        note: 8.6,
        genre: "Drame",
        poster: "affiches/The_Green_Mile.jpg"
    },
    {
        titre: "L'affaire Bojarski",
        realisateur: "Jean-Paul Salomé",
        annee: 2025,
        note: 7.0,
        genre: "Policier",
        poster: "affiches/affaire_bojarski.jpg"
    }
];

/* Recherche le terme entré dans la barre de recherche
* @param {Object[]} liste - une liste de films
* @param {string} terme - recherche de l'utilsateur
* @returns {Object[]} liste - une liste filtré par résulats de recherche
*/
function rechercherFilm(liste, terme) {
    // si recherche vide, sortir
    if (terme === "") return liste;

    // toLowerCase() pour uniformiser et supprimer la distinction de casse
    const recherche = terme.toLowerCase();

    return liste.filter(film => film.titre.toLowerCase().includes(recherche) ||
        film.realisateur.toLowerCase().includes(recherche));
}

/* Génération de la tuile d'un film
* @param {Object[]} film - film dont la tuile doit être générée
* @returns {string} Le code HTML de la tuile du film
*/
function genererTuileFilm(film) {

    // injection de valeurs via templates literals
    return `<article class="tuile-film">

                <img src="${film.poster}" alt="${film.titre}" class="film-poster">
                
                <div class="film-info">
                    <h3>${film.titre}</h3>
                    <p class="film-meta">${film.annee} · ${film.genre}</p>
                    <p class="film-realisateur">${film.realisateur}</p>
                    
                    <div class="film-note">
                        <span class="note-badge">${film.note}</span>
                    </div>
                </div>
                
            </article>`;
}

// Récupération de l'élément dropdown
const valeurTri = document.getElementById("tri-select");

valeurTri.addEventListener("change", rafraichir);

/* Tri des films selon sélection du menu dropdown
* @param {Object[]} listeDeFilmsATrier - liste à trier
* @returns {Object[]} La liste de films triée selon sélection
*/
function trierFilms(listeDeFilmsATrier) {

    // Récupération de la valeur de la dropdown et non de l'élément
    let critereDeTri = valeurTri.value;

    // Enregistrement d'une copie de travail
    let listeATrier = [...listeDeFilmsATrier];

    // Détermination du tri à effectuer
    if (critereDeTri === "annee-decroiss") {
        listeATrier = listeATrier.sort((a, b) => b.annee - a.annee);

    }else if (critereDeTri === "annee-croiss") {
        listeATrier = listeATrier.sort((a, b) => a.annee - b.annee);

    }else if (critereDeTri === "real-decroiss"){
        listeATrier.sort((a, b) => b.realisateur.localeCompare(a.realisateur));

    }else if (critereDeTri === "real-croiss"){
        listeATrier = listeATrier.sort((a, b) => a.realisateur.localeCompare(b.realisateur));
    }else{
        listeATrier = listeATrier.sort((a, b) => b.note - a.note);
    }

    // Renvoi de la liste triée selon sélection
    return listeATrier;
}

/* Génère et stocke le contenu HTML des films avant de le charger
* dans une section de la page index
* @param {Object[]} liste - une liste de films
* @returns {void}
*/
function afficherFilmsHTML(liste) {

    let container = document.querySelector("#films-container");

    // Message si aucun film
    if (liste.length === 0) {
        container.innerHTML = "<p class=\"empty-alert\">Pas de film correspondant</p>";
        return;
    }

    let html = "";

    // Stockage du html à générer
    liste.forEach(film => {
        html += genererTuileFilm(film);
    });

    // Substitution du contenu de la page
    container.innerHTML = html;
}

/* Recalcul du contenu pour mimer un rechargement de la page
* @returns {void}
*/
function rafraichir() {

    const terme = document.querySelector("#recherche").value;

    // Recherche, tri puis affichage des films
    let resultats = rechercherFilm(films, terme);
    resultats = trierFilms(resultats);
    afficherFilmsHTML(resultats);

}

// Passage de la fonction rafraichir sans parenthèses
// Évènement déclenché à chaque caractère tapé (input), déclenchement unique si parenthèse
document.querySelector("#recherche").addEventListener("input", rafraichir);

// Afficher tous les films dès le chargement de la page
rafraichir();

const formAjoutFilm = document.getElementById("formulaire-ajout");

/* Ajoute un film via le formulaire d'ajout envoyé
* @returns {void}
*/
function ajouterFilm(event){

    // Empêchement du rechargement de la page
    event.preventDefault();

    // Récupération des champs
    const titreFilm = document.getElementById("input-titre").value;
    const anneeFilm = document.getElementById("input-annee").value;
    const genreFilm = document.getElementById("input-genre").value;
    const realFilm = document.getElementById("input-real").value;
    const noteFilm = document.getElementById("input-note").value;
    let filmAAjouter = {};

    // On ne traite l'envoi que si tous les champs ont été remplis
    if (titreFilm !== "" && anneeFilm !== "" && genreFilm !== "" && realFilm !== "" &&
        noteFilm >= 0 && noteFilm <= 10) {

        // On prépare le texte à mettre pour le template img
        const textePourUrl = titreFilm.trim().replaceAll(" ", "+");

        // Nouvel objet film
        filmAAjouter = {
            titre: titreFilm,
            realisateur: realFilm,
            annee: anneeFilm,
            note: noteFilm,
            genre: genreFilm,
            poster: "https://placehold.co/600x900?text=" + textePourUrl,
        };

        // Ajout du film à la liste générale, effacement du formulaire et rechargement des données
        films.push(filmAAjouter);
        formAjoutFilm.reset();
        rafraichir();
    }

}

// Écoute sur l'envoi du formulaire d'ajout
// prevent default pour ne pas recharger la page
formAjoutFilm.addEventListener("submit", ajouterFilm);

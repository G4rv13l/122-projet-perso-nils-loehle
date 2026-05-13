"use strict";

// Tableau de films, prémisces générées avec Claude
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
    }
];


// ============================================================
// ------------------- Affichage console ----------------------
// Fonction qui boucle pour générer les métadonnées des films
// Usage des literals templates pour insérer des valeurs en
// chaine de caractères
// ============================================================

function afficherFilmsConsole(liste) {
    console.log(`\n--- ${liste.length} film(s) ---`);

    // Pour chaque film
    for (const film of liste) {

        // Attribuer des étoiles selon la note du film
        let etoiles;
        if (film.note >= 8.5) {
            etoiles = "★★★";
        } else if (film.note >= 7) {
            etoiles = "★★";
        } else {
            etoiles = "★";
        }
        // Affichage console des composantes du film par concaténation
        console.log(
            `  ${etoiles} ${film.titre} (${film.annee})` +
            ` - ${film.genre} - ${film.note}/10`
        );
    }
}

afficherFilmsConsole(films);

// ============================================================
// PHASE 3 : TRIER (M5)
// sort() avec spread [...] pour copier d'abord
// ============================================================

function trierParNote(liste) {
    return [...liste].sort((a, b) => b.note - a.note);
}

console.log("\n--- Triés par note ---");
afficherFilmsConsole(trierParNote(films));
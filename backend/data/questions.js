const questions = {
  culture_generale: [
    {
      id: "cg_1",
      question: "Quelle est la capitale administrative du Maroc ?",
      options: ["Casablanca", "Rabat", "Marrakech", "Tanger"],
      correctAnswerIndex: 1,
      explanation: "Rabat est la capitale administrative et politique du Royaume du Maroc depuis 1912."
    },
    {
      id: "cg_2",
      question: "Quel fleuve traverse la ville de Paris ?",
      options: ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
      correctAnswerIndex: 1,
      explanation: "La Seine coule à Paris et la divise en Rive Droite et Rive Gauche."
    },
    {
      id: "cg_3",
      question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
      options: ["1965", "1969", "1972", "1975"],
      correctAnswerIndex: 1,
      explanation: "Neil Armstrong et Buzz Aldrin ont marché sur la Lune le 20 juillet 1969 lors de la mission Apollo 11."
    },
    {
      id: "cg_4",
      question: "Quel est le plus grand océan de la planète ?",
      options: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"],
      correctAnswerIndex: 2,
      explanation: "L'océan Pacifique couvre environ 165 millions de km², soit plus d'un tiers de la surface terrestre."
    },
    {
      id: "cg_5",
      question: "Qui a peint la fameuse toile de la Joconde ?",
      options: ["Claude Monet", "Léonard de Vinci", "Pablo Picasso", "Vincent van Gogh"],
      correctAnswerIndex: 1,
      explanation: "Léonard de Vinci a peint La Joconde (Mona Lisa) au début du XVIe siècle."
    },
    {
      id: "cg_6",
      question: "Combien de continents compte le globe terrestre ?",
      options: ["5", "6", "7", "8"],
      correctAnswerIndex: 2,
      explanation: "On compte généralement 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe, Océanie."
    },
    {
      id: "cg_7",
      question: "Quel est l'élément chimique représenté par le symbole 'O' ?",
      options: ["Or", "Oxygène", "Osmium", "Ozone"],
      correctAnswerIndex: 1,
      explanation: "L'Oxygène est l'élément de numéro atomique 8 et de symbole O."
    },
    {
      id: "cg_8",
      question: "Quelle est la langue officielle la plus parlée au monde en nombre de locuteurs natifs ?",
      options: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
      correctAnswerIndex: 2,
      explanation: "Le chinois mandarin compte plus d'un milliard de locuteurs natifs."
    },
    {
      id: "cg_9",
      question: "Quel est le plus haut sommet du monde ?",
      options: ["Le Mont Blanc", "Le K2", "Le Mont Everest", "Le Kilimandjaro"],
      correctAnswerIndex: 2,
      explanation: "Le Mont Everest culmine à 8 848 mètres dans l'Himalaya."
    },
    {
      id: "cg_10",
      question: "Dans quel pays se trouvent les célèbres pyramides de Gizeh ?",
      options: ["Maroc", "Égypte", "Jordanie", "Grèce"],
      correctAnswerIndex: 1,
      explanation: "Les pyramides de Gizeh se situent sur le plateau de Gizeh près du Caire en Égypte."
    },
    {
      id: "cg_11",
      question: "Quelle est la devise monétaire utilisée au Maroc ?",
      options: ["Dinar", "Dirham", "Rial", "Piaste"],
      correctAnswerIndex: 1,
      explanation: "Le Dirham marocain (MAD) est la monnaie officielle du Maroc."
    },
    {
      id: "cg_12",
      question: "Quel organe pompe le sang dans tout le corps humain ?",
      options: ["Les Poumons", "Le Foie", "Le Cœur", "Les Reins"],
      correctAnswerIndex: 2,
      explanation: "Le cœur est un muscle qui meuble la poitrine et assure la circulation sanguine."
    },
    {
      id: "cg_13",
      question: "Qui a écrit la pièce de théâtre 'Romeo et Juliette' ?",
      options: ["Victor Hugo", "William Shakespeare", "Molière", "Charles Dickens"],
      correctAnswerIndex: 1,
      explanation: "William Shakespeare a écrit cette célèbre tragédie à la fin du XVIe siècle."
    },
    {
      id: "cg_14",
      question: "Quel animal est surnommé le 'Roi de la Savane' ?",
      options: ["L'Éléphant", "Le Tigre", "Le Lion", "Le Léopard"],
      correctAnswerIndex: 2,
      explanation: "Le lion est traditionnellement qualifié de roi des animaux ou roi de la savane."
    },
    {
      id: "cg_15",
      question: "Quelle planète de notre système solaire est surnommée la 'Planète Rouge' ?",
      options: ["Vénus", "Mars", "Jupiter", "Saturne"],
      correctAnswerIndex: 1,
      explanation: "Mars apparaît rouge en raison de l'abondance d'oxyde de fer (rouille) à sa surface."
    }
  ],

  logique: [
    {
      id: "log_1",
      question: "Complétez la suite logique : 2, 4, 8, 16, 32, ... ?",
      options: ["48", "60", "64", "128"],
      correctAnswerIndex: 2,
      explanation: "Chaque nombre est multiplié par 2 : 32 × 2 = 64."
    },
    {
      id: "log_2",
      question: "Si 5 chats attrapent 5 souris en 5 minutes, combien faut-il de chats pour attraper 100 souris en 100 minutes ?",
      options: ["100", "20", "5", "1"],
      correctAnswerIndex: 2,
      explanation: "Un chat attrape 1 souris en 5 minutes. En 100 minutes, 1 chat attrape 20 souris. Donc 5 chats attrapent 100 souris."
    },
    {
      id: "log_3",
      question: "Quel nombre complète la suite : 1, 1, 2, 3, 5, 8, 13, ... ?",
      options: ["18", "21", "24", "26"],
      correctAnswerIndex: 1,
      explanation: "C'est la suite de Fibonacci : chaque terme est la somme des deux précédents (8 + 13 = 21)."
    },
    {
      id: "log_4",
      question: "Le père de Yasmine a 5 filles : Chaimaa, Nora, Sara, Kenza. Quel est le nom de la 5ème fille ?",
      options: ["Yasmine", "Laila", "Fatima", "Salma"],
      correctAnswerIndex: 0,
      explanation: "Le problème énonce : 'Le père de Yasmine a 5 filles...'. La 5ème fille est Yasmine !"
    },
    {
      id: "log_5",
      question: "Si tous les Bloops sont des Razzies et tous les Razzies sont des Lazzies, alors tous les Bloops sont obligatoirement des Lazzies.",
      options: ["Vrai", "Faux", "Impossible à déterminer", "Seulement le mardi"],
      correctAnswerIndex: 0,
      explanation: "C'est un syllogisme classique (A ⊂ B et B ⊂ C ⇒ A ⊂ C). La proposition est Vraie."
    },
    {
      id: "log_6",
      question: "Quel mot n'appartient pas au même groupe ?",
      options: ["Pomme", "Carotte", "Banane", "Orange"],
      correctAnswerIndex: 1,
      explanation: "La carotte est un légume, alors que les autres sont des fruits."
    },
    {
      id: "log_7",
      question: "Combien de fois peut-on soustraire 5 de 25 ?",
      options: ["5 fois", "4 fois", "1 seule fois", "Infiniment"],
      correctAnswerIndex: 2,
      explanation: "Une seule fois ! Après la première soustraction, le nombre devient 20 et non plus 25."
    },
    {
      id: "log_8",
      question: "Je suis plus lourd qu'une plume mais personne ne peut me tenir plus de 5 minutes. Que suis-je ?",
      options: ["Un rocher", "Votre souffle", "Une conversation", "Une poignée d'eau"],
      correctAnswerIndex: 1,
      explanation: "Il s'agit de son propre souffle (retarder sa respiration)."
    },
    {
      id: "log_9",
      question: "Complétez : Crayon est à Écrire ce que Couteau est à... ?",
      options: ["Manger", "Cuisiner", "Couper", "Aiguiser"],
      correctAnswerIndex: 2,
      explanation: "L'analogie compare l'outil à sa fonction primaire : Crayon -> Écrire, Couteau -> Couper."
    },
    {
      id: "log_10",
      question: "Un nénuphar double de taille chaque jour. S'il lui faut 48 jours pour couvrir tout le lac, combien de jours faut-il pour en couvrir la moitié ?",
      options: ["24 jours", "47 jours", "36 jours", "12 jours"],
      correctAnswerIndex: 1,
      explanation: "Comme il double chaque jour, la veille du 48ème jour (le 47ème jour), il couvrait la moitié du lac."
    },
    {
      id: "log_11",
      question: "Trouvez le nombre manquant : 3, 6, 12, 24, ... ?",
      options: ["30", "36", "48", "60"],
      correctAnswerIndex: 2,
      explanation: "Chaque terme est le double du précédent : 24 × 2 = 48."
    },
    {
      id: "log_12",
      question: "Certains mois ont 31 jours, d'autres 30. Combien de mois ont 28 jours ?",
      options: ["1 seul (février)", "Tous les 12 mois", "Aucun", "6 mois"],
      correctAnswerIndex: 1,
      explanation: "Tous les 12 mois de l'année ont au moins 28 jours !"
    },
    {
      id: "log_13",
      question: "Vous dépassez le 2ème dans une course à pied. Quelle est votre position actuelle ?",
      options: ["1er", "2ème", "3ème", "Dernier"],
      correctAnswerIndex: 1,
      explanation: "En dépassant le 2ème, vous prenez sa position et devenez 2ème."
    },
    {
      id: "log_14",
      question: "Quel nombre est égal au quart d'un tiers de 240 ?",
      options: ["20", "30", "40", "60"],
      correctAnswerIndex: 0,
      explanation: "Un tiers de 240 = 80. Le quart de 80 = 20."
    },
    {
      id: "log_15",
      question: "Si A est plus grand que B, et B est plus grand que C, quelle est la relation entre A et C ?",
      options: ["A est plus petit que C", "A est égal à C", "A est plus grand que C", "Aucun lien"],
      correctAnswerIndex: 2,
      explanation: "Par transitivité (A > B et B > C), A est obligatoirement plus grand que C."
    }
  ],

  divertissement: [
    {
      id: "div_1",
      question: "Quel personnage principal porte une cicatrice en forme d'éclair sur le front ?",
      options: ["Percy Jackson", "Harry Potter", "Frodon Sacquet", "Peter Parker"],
      correctAnswerIndex: 1,
      explanation: "Harry Potter a reçu sa cicatrice légendaire causée par Lord Voldemort."
    },
    {
      id: "div_2",
      question: "Dans le film 'Le Roi Lion', quel est le nom du jeune prince lion ?",
      options: ["Mufasa", "Scar", "Simba", "Timon"],
      correctAnswerIndex: 2,
      explanation: "Simba est le fils de Mufasa et le héros du film d'animation de Disney."
    },
    {
      id: "div_3",
      question: "Quel artiste musical est surnommé le 'Roi de la Pop' ?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
      correctAnswerIndex: 1,
      explanation: "Michael Jackson a révolutionné la musique et la danse mondiale."
    },
    {
      id: "div_4",
      question: "Quelle série met en scène des super-héros véreux gérés par la firme Vought ?",
      options: ["The Boys", "Watchmen", "The Umbrella Academy", "Invincible"],
      correctAnswerIndex: 0,
      explanation: "The Boys parodie le genre des super-héros avec le Protecteur (Homelander)."
    },
    {
      id: "div_5",
      question: "Quel jeu vidéo culte met en scène un plombier à la casquette rouge ?",
      options: ["Sonic", "Super Mario", "Zelda", "Crash Bandicoot"],
      correctAnswerIndex: 1,
      explanation: "Mario est la mascotte légendaire de Nintendo."
    },
    {
      id: "div_6",
      question: "Quel acteur incarne Iron Man dans l'univers cinématographique Marvel (MCU) ?",
      options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
      correctAnswerIndex: 1,
      explanation: "Robert Downey Jr. a ouvert le MCU en 2008 dans le rôle de Tony Stark."
    },
    {
      id: "div_7",
      question: "Dans quelle saga spatiale entend-on la réplique 'Que la Force soit avec toi' ?",
      options: ["Star Trek", "Star Wars", "Stargate", "Dune"],
      correctAnswerIndex: 1,
      explanation: "Star Wars utilise cette formule mythique employée par les Chevaliers Jedi."
    },
    {
      id: "div_8",
      question: "Quelle chanteuse américaine interprète les tubes 'Shake It Off' et 'Blank Space' ?",
      options: ["Beyoncé", "Rihanna", "Taylor Swift", "Katy Perry"],
      correctAnswerIndex: 2,
      explanation: "Taylor Swift a sorti ces morceaux dans son album superstar '1989'."
    },
    {
      id: "div_9",
      question: "Quel festival international du film décerne la 'Palme d'Or' chaque année ?",
      options: ["Festival de Venise", "Festival de Cannes", "Festival de Berlin", "Oscars"],
      correctAnswerIndex: 1,
      explanation: "La Palme d'Or est la récompense suprême décernée lors du Festival de Cannes."
    },
    {
      id: "div_10",
      question: "Dans la série 'Stranger Things', quel est le prénom de la jeune fille aux pouvoirs télékinésiques ?",
      options: ["Max", "Nancy", "Eleven (Onze)", "Joyce"],
      correctAnswerIndex: 2,
      explanation: "Eleven (Onze) est interprétée par l'actrice Millie Bobby Brown."
    },
    {
      id: "div_11",
      question: "Quel réseau social utilise un logo représentant une note de musique stylisée ?",
      options: ["Instagram", "TikTok", "Snapchat", "Pinterest"],
      correctAnswerIndex: 1,
      explanation: "TikTok utilise une note de musique stylisée néon sur fond sombre."
    },
    {
      id: "div_12",
      question: "Quel super-héros vit à Gotham City ?",
      options: ["Superman", "Spider-Man", "Batman", "Flash"],
      correctAnswerIndex: 2,
      explanation: "Bruce Wayne / Batman protège la ville de Gotham City contre les criminels."
    },
    {
      id: "div_13",
      question: "Quel est le nom de l'agent secret 007 créé par Ian Fleming ?",
      options: ["Jason Bourne", "Ethan Hunt", "James Bond", "Jack Reacher"],
      correctAnswerIndex: 2,
      explanation: "James Bond est le plus célèbre agent des services secrets britanniques."
    },
    {
      id: "div_14",
      question: "Quelle console de jeu vidéo hybride a été sortie par Nintendo en 2017 ?",
      options: ["Wii U", "Nintendo Switch", "PlayStation Vita", "Nintendo 3DS"],
      correctAnswerIndex: 1,
      explanation: "La Nintendo Switch a été lancée mondialement en mars 2017."
    },
    {
      id: "div_15",
      question: "Quel film de James Cameron sorti en 2009 se déroule sur la lune Pandora ?",
      options: ["Interstellar", "Inception", "Avatar", "Gravity"],
      correctAnswerIndex: 2,
      explanation: "Avatar met en scène le peuple Na'vi sur la planète Pandora."
    }
  ]
};

module.exports = questions;

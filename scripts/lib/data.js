export const levels = [
    {id: "1", text: "Débutant", type:"level"},
    {id: "2", text: "Intermédiaire", type:"level"},
    {id: "3", text: "Avancée", type:"level"}
];

export const subjects = [
    {id:"1", text:"Développement Logiciel", type:"subject"},
    {id: "5", text: "Histoire", type:"subject"},
    {id: "2", text: "Géographie", type:"subject"},
    { id: "3", text: "Mathématiques", type:"subject" },
    {id: "4", text: "Sport", type:"subject"}
];


export const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      options: ["Paris", "Londres", "Berlin", "Madrid"],
      answer: 0
    },
    {
      question: "Quel est le plus grand océan du monde ?",
      options: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"],
      answer: 2
    },
    // Ajoutez d'autres questions ici
  ];

  const easyQuestions = [
    {
      question: "Qu'est-ce qu'un élément HTML?",
      options: ["Une balise de mise en forme", "Un lien hypertexte", "Une instruction de style", "Un bloc de contenu"],
      answer: 3
    },
    {
      question: "Que signifie CSS?",
      options: ["Cascading Style Sheets", "Cascading Script Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: 0
    },
    {
      question: "Quel langage est principalement utilisé pour ajouter des comportements interactifs à une page web?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: 2
    },
    {
      question: "Quelle balise HTML est utilisée pour insérer une image?",
      options: ["<img>", "<picture>", "<image>", "<src>"],
      answer: 0
    },
    {
      question: "Comment créer un lien hypertexte en HTML?",
      options: ["<a href='url'>Link</a>", "<link href='url'>Link</link>", "<hyperlink href='url'>Link</hyperlink>", "<url href='url'>Link</url>"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour changer la couleur de fond d'un élément?",
      options: ["color", "background-color", "font-color", "bg-color"],
      answer: 1
    },
    {
      question: "Quel attribut HTML est utilisé pour définir une classe CSS?",
      options: ["id", "class", "style", "css"],
      answer: 1
    },
    {
      question: "Quel est le rôle de la balise <head> en HTML?",
      options: ["Contient le contenu principal", "Contient des informations méta", "Affiche le titre de la page", "Affiche les liens"],
      answer: 1
    },
    {
      question: "Quelle est la syntaxe correcte pour inclure un fichier CSS dans un document HTML?",
      options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css link='style.css'>", "<stylesheet src='style.css'>"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour changer la police de caractère d'un élément?",
      options: ["font-style", "font-family", "font-weight", "font-text"],
      answer: 1
    },
    {
      question: "Quelle est la syntaxe correcte pour déclarer une variable en JavaScript?",
      options: ["var myVariable;", "variable myVariable;", "myVariable = var;", "declare myVariable;"],
      answer: 0
    },
    {
      question: "Quel est le rôle de la balise <title> en HTML?",
      options: ["Définit le titre de la page", "Définit le contenu principal", "Affiche le titre dans le corps", "Affiche un lien"],
      answer: 0
    },
    {
      question: "Comment créer une liste à puces en HTML?",
      options: ["<ul><li>Item</li></ul>", "<ol><li>Item</li></ol>", "<list><item>Item</item></list>", "<ul><item>Item</item></ul>"],
      answer: 0
    },
    {
      question: "Quel attribut HTML est utilisé pour définir un identifiant unique pour un élément?",
      options: ["class", "id", "name", "style"],
      answer: 1
    },
    {
      question: "Quelle balise HTML est utilisée pour définir un paragraphe?",
      options: ["<par>", "<pg>", "<p>", "<paragraph>"],
      answer: 2
    },
    {
      question: "Quelle est la syntaxe correcte pour lier un fichier JavaScript dans un document HTML?",
      options: ["<script src='script.js'></script>", "<js src='script.js'></js>", "<link src='script.js'></link>", "<javascript src='script.js'></javascript>"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour changer la couleur du texte d'un élément?",
      options: ["text-color", "font-color", "color", "foreground-color"],
      answer: 2
    },
    {
      question: "Quel élément HTML est utilisé pour créer une liste ordonnée?",
      options: ["<ul>", "<ol>", "<list>", "<ord>"],
      answer: 1
    },
    {
      question: "Quel attribut HTML est utilisé pour fournir un texte alternatif pour une image?",
      options: ["title", "alt", "src", "caption"],
      answer: 1
    },
    {
      question: "Quelle balise HTML est utilisée pour insérer un lien hypertexte?",
      options: ["<link>", "<href>", "<a>", "<url>"],
      answer: 2
    }
];
  
const intermediateQuestions = [
    {
      question: "Quelle méthode JavaScript est utilisée pour sélectionner un élément par son ID?",
      options: ["getElementById()", "querySelector()", "getElementByClass()", "getElementByName()"],
      answer: 0
    },
    {
      question: "Quel est le but de la méthode `preventDefault()` en JavaScript?",
      options: ["Prévenir la propagation d'un événement", "Arrêter la propagation d'un événement", "Empêcher le comportement par défaut d'un événement", "Réinitialiser un événement"],
      answer: 2
    },
    {
      question: "Quel est le rôle de la balise <meta> en HTML?",
      options: ["Définit les métadonnées de la page", "Définit le contenu principal", "Affiche un lien", "Affiche un titre"],
      answer: 0
    },
    {
      question: "Comment ajouter un commentaire en CSS?",
      options: ["/* Commentaire */", "// Commentaire", "<!-- Commentaire -->", "# Commentaire"],
      answer: 0
    },
    {
      question: "Quelle est la syntaxe correcte pour créer une fonction en JavaScript?",
      options: ["function myFunction() {}", "def myFunction() {}", "func myFunction() {}", "function: myFunction() {}"],
      answer: 0
    },
    {
      question: "Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un élément?",
      options: ["onmouseover", "onchange", "onclick", "onhover"],
      answer: 2
    },
    {
      question: "Quel est le rôle de la balise <footer> en HTML5?",
      options: ["Définit le pied de page", "Définit l'en-tête de page", "Définit une section de contenu", "Définit une barre latérale"],
      answer: 0
    },
    {
      question: "Comment appliquer un style en ligne à un élément HTML?",
      options: ["<div style='color: red;'>", "<div class='color: red;'>", "<div id='color: red;'>", "<div style='text-color: red;'>"],
      answer: 0
    },
    {
      question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0
    },
    {
      question: "Quelle balise HTML5 est utilisée pour définir un formulaire?",
      options: ["<form>", "<input>", "<button>", "<label>"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour changer la taille de la police d'un élément?",
      options: ["font-size", "text-size", "font-height", "text-height"],
      answer: 0
    },
    {
      question: "Quel attribut HTML est utilisé pour spécifier l'URL d'une image?",
      options: ["src", "href", "link", "url"],
      answer: 0
    },
    {
      question: "Comment aligner du texte au centre en CSS?",
      options: ["text-align: center;", "align-text: center;", "text-center: true;", "align: center;"],
      answer: 0
    },
    {
      question: "Quelle est la syntaxe correcte pour une boucle `for` en JavaScript?",
      options: ["for (let i = 0; i < 10; i++) {}", "for i in range(10) {}", "for (i < 10; i++) {}", "for (let i = 0; i < 10) {}"],
      answer: 0
    },
    {
      question: "Quel événement JavaScript est déclenché lorsqu'un utilisateur passe la souris sur un élément?",
      options: ["onclick", "onmouseover", "onchange", "onhover"],
      answer: 1
    },
    {
      question: "Quelle méthode JavaScript est utilisée pour retirer le dernier élément d'un tableau?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      answer: 0
    },
    {
      question: "Comment ajouter une classe à un élément en JavaScript?",
      options: ["element.classList.add('className')", "element.addClass('className')", "element.className.add('className')", "element.add('className')"],
      answer: 0
    },
    {
      question: "Quelle balise HTML est utilisée pour définir un titre de niveau 1?",
      options: ["<h1>", "<title>", "<head>", "<header>"],
      answer: 0
    },
    {
      question: "Quel est le rôle de la balise <article> en HTML5?",
      options: ["Définit un contenu indépendant", "Définit un pied de page", "Définit une section de navigation", "Définit un en-tête"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour contrôler la taille de l'espace entre les lignes de texte?",
      options: ["line-height", "spacing", "text-height", "line-spacing"],
      answer: 0
    }
  ];
  
  

  const advancedQuestions = [
    {
      question: "Quelle méthode JavaScript est utilisée pour convertir un objet JSON en chaîne de caractères?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"],
      answer: 0
    },
    {
      question: "Quel est le rôle de l'attribut 'defer' dans une balise <script>?",
      options: ["Charge le script après le chargement de la page", "Charge le script de manière asynchrone", "Empêche le script de s'exécuter", "Charge le script en premier"],
      answer: 0
    },
    {
      question: "Quelle méthode JavaScript est utilisée pour arrêter la propagation d'un événement?",
      options: ["stopPropagation()", "preventDefault()", "stopEvent()", "preventPropagation()"],
      answer: 0
    },
    {
      question: "Quel est le but du modèle MVC (Model-View-Controller)?",
      options: ["Séparer les données, la présentation et la logique", "Créer des animations CSS", "Gérer les événements JavaScript", "Structurer le HTML"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour créer un élément flexbox?",
      options: ["display: flex;", "flex-direction: column;", "flex: 1;", "align-items: center;"],
      answer: 0
    },
    {
      question: "Quel est le rôle de la méthode `map()` en JavaScript?",
      options: ["Appliquer une fonction à chaque élément d'un tableau", "Filtrer les éléments d'un tableau", "Ajouter un élément à un tableau", "Supprimer un élément d'un tableau"],
      answer: 0
    },
    {
      question: "Comment déclarer une constante en JavaScript?",
      options: ["const myConstant = value;", "constant myConstant = value;", "let myConstant = value;", "var myConstant = value;"],
      answer: 0
    },
    {
      question: "Quelle est la syntaxe correcte pour une fonction fléchée en JavaScript?",
      options: ["(param) => { return value; }", "param => { return value; }", "function => (param) { return value; }", "(param) { return value; }"],
      answer: 0
    },
    {
      question: "Quel est le rôle de la balise <template> en HTML5?",
      options: ["Définir un modèle de contenu réutilisable", "Définir un style global", "Définir un script JavaScript", "Définir un lien vers une feuille de style"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour aligner les éléments dans un conteneur flexbox?",
      options: ["align-items", "align-content", "justify-content", "flex-align"],
      answer: 2
    },
    {
      question: "Quel est le rôle de la méthode `reduce()` en JavaScript?",
      options: ["Appliquer une fonction à chaque élément d'un tableau pour obtenir une valeur unique", "Filtrer les éléments d'un tableau", "Ajouter un élément à un tableau", "Supprimer un élément d'un tableau"],
      answer: 0
    },
    {
      question: "Quelle est la syntaxe correcte pour utiliser des modules en JavaScript?",
      options: ["import myModule from 'myModule';", "require('myModule');", "include 'myModule';", "import 'myModule';"],
      answer: 0
    },
    {
      question: "Quel attribut HTML5 est utilisé pour spécifier un texte de remplacement pour une vidéo?",
      options: ["alt", "src", "poster", "sub"],
      answer: 2
    },
    {
      question: "Quel est le rôle de la méthode `fetch()` en JavaScript?",
      options: ["Récupérer des ressources réseau", "Analyser un objet JSON", "Exécuter une requête SQL", "Créer un serveur Web"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS est utilisée pour créer une grille CSS?",
      options: ["display: grid;", "grid-template-columns", "grid-template-rows", "grid"],
      answer: 0
    },
    {
      question: "Quel est le rôle de la balise <picture> en HTML5?",
      options: ["Fournir des images alternatives pour des scénarios différents", "Définir une image", "Définir une légende pour une image", "Créer un lien vers une image"],
      answer: 0
    },
    {
      question: "Quelle est la syntaxe correcte pour créer une fonction anonyme en JavaScript?",
      options: ["function() {}", "() => {}", "function {}", "() {}"],
      answer: 0
    },
    {
      question: "Quel est le rôle de la méthode `filter()` en JavaScript?",
      options: ["Créer un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie", "Appliquer une fonction à chaque élément d'un tableau", "Ajouter un élément à un tableau", "Supprimer un élément d'un tableau"],
      answer: 0
    },
    {
      question: "Quel est le rôle de l'attribut `async` dans une balise <script>?",
      options: ["Exécuter le script de manière asynchrone", "Empêcher le script de s'exécuter", "Charger le script en premier", "Définir une variable globale"],
      answer: 0
    },
    {
      question: "Quelle est la syntaxe correcte pour une instruction `if` en JavaScript?",
      options: ["if (condition) {}", "if condition {}", "if: condition {}", "if: (condition) {}"],
      answer: 0
    }
  ];
  
  

//rendre les options du tableau aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    }
}
  
function shuffleOptions(options, correctIndex) {
    // Créer un tableau d'options avec l'indice de la réponse correcte
    const optionsWithIndex = options.map((option, index) => ({ option, index }));
    
    // Mélanger les options
    shuffleArray(optionsWithIndex);
    
    // Trouver le nouvel indice de la réponse correcte après le mélange
    const newCorrectIndex = optionsWithIndex.findIndex(item => item.index === correctIndex);
    
    // Retourner les options mélangées et le nouvel indice de la réponse correcte
    return {
      shuffledOptions: optionsWithIndex.map(item => item.option),
      newCorrectIndex
    };
  }


// Fonction pour obtenir les questions en fonction du niveau
async function getQuestions(level) {
    // Définir le chemin du fichier en fonction du niveau
    let fileName;
    switch (level) {
      case '1':
        fileName = '../data/easyQuestions.json';
        break;
      case '2':
        fileName = '../data/intermediateQuestions.json';
        break;
      case '3':
        fileName = '../data/advancedQuestions.json';
        break;
      default:
        throw new Error('Niveau invalide. Utilisez "1", "2" ou "3".');
    }
    console.log(fileName)
  
    try {
      // Charger les questions depuis le fichier JSON
      const response = await fetch(fileName);
        if (!response.ok) {
          console.log("erreur")
        throw new Error('Erreur lors du chargement des questions');
      }
        const questions = await response.json();
    // Mélanger les options de chaque question tout en maintenant la correspondance des réponses
    questions.forEach(question => {
        const result = shuffleOptions(question.options, question.answer);
        question.options = result.shuffledOptions;
        question.answer = result.newCorrectIndex;
      });
  
      // Simuler un délai de chargement de 5 secondes
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(questions);
        }, 5000);
      });
    } catch (error) {
      console.error(error);
      return [];
    }
}
  
const api = {
    getQuestions
}

export default api
  

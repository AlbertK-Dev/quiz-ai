import api from "./api/interface.js";
import { STORAGE_LEVEL_KEY } from "./lib/constant.js";
import { levels, subjects } from "./lib/data.js";
import connect from "./lib/login.js";
import { initQuiz, populateMenu } from "./lib/quiz.js";
import storage from "./lib/storage.js";

// scripts/main.js
document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "indexPage") {
    const isConnected = connect.login();
    if (!isConnected) {
      console.log("aucun utilisateur connecter pour le moment");
      const loginForm = document.getElementById("loginForm");
      if (!loginForm) {
        console.log("set login form in your html file");
      } else {
        loginForm.addEventListener("submit", (e) => {
          e.preventDefault(); // pour empecher la recharge auto de la page
          const pseudo = document.getElementById("pseudo");
          const preserveSession = document.getElementById("preserveSession");
          if (!pseudo) {
            console.log("set pseudo id to input element");
          } else if (!preserveSession) {
            console.log("set preserveSession id to checkbox element");
          } else {
            console.log(
              `sigin with ${pseudo.value} and preserve ${
                preserveSession.checked ? "local" : "session"
              } `
            );
            connect.signin(pseudo.value, preserveSession.checked);
            window.location.reload();
          }
        });
      }
    }
  }

  if (bodyId === "quizPage") {
    const { isConnected, pseudo } = connect.verify();
    if (!isConnected) {
      window.location.href = window.location.origin + "/index.html";
    }
    // n'affichez que les parametre au début
    const paramContainer = document.getElementById("paramContainer")
    const questionContainer =  document.getElementById("questionContainer")
    const quizNavigation = document.getElementById("quizNavigation")
    const loadingQuiz = document.getElementById("loadingQuiz")
    const quizScore = document.getElementById("quizScore")
    const quizStat = document.getElementById("quizStat")
    const disconnectBtn = document.getElementById("disconnectBtn")
    disconnectBtn.addEventListener('click', connect.off)
    
    
    quizNavigation.style.display = 'none'
    questionContainer.style.display = "none"
    loadingQuiz.style.display = "none"
    quizScore.style.display = "none"
    quizStat.style.display = "none"
    const quizUserName = document.getElementById("quizUserName");
    quizUserName.textContent = pseudo;

    populateMenu("levelMenu", levels, "levelTextMenu");
    populateMenu("subjectMenu", subjects, "subjectTextMenu");

     paramContainer.style.display = "flex"
      // Ajouter des événements pour ouvrir les menus
      document.querySelectorAll('.menu__field').forEach(menuField => {
        const menu = menuField.querySelector('.menu');
        menuField.addEventListener('mouseenter', function () {
            menu.style.display = 'flex'; // Ouvrir le menu
        });
        menuField.addEventListener('mouseleave', function (e) {
            e.stopPropagation()
                if (!menuField.matches(':hover') && !menu.matches(':hover')) {
                    menu.style.display = 'none'; // Fermer le menu si la souris est sortie
                }
           
        });
      });
    
    const startQuizButton = document.getElementById("startQuizButton")
    startQuizButton.addEventListener("click", () => {


      loadingQuiz.style.display = 'flex'
      api.getQuestions(storage.read(STORAGE_LEVEL_KEY) || '1')
        .then(questions => {
          //masquer le contenu des param_tres
           loadingQuiz.style.display = 'none'
      paramContainer.style.display = 'none'
      
      //afficher les questions  et la navigation
      questionContainer.style.display = 'flex'
          quizNavigation.style.display = 'flex'
           quizScore.style.display = "flex"
    quizStat.style.display = "flex"
      
          initQuiz(questions)
        }
    
        )

     
      
    })
    
    
    
 
  }
});

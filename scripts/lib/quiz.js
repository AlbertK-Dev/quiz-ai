import { STORAGE_LEVEL_KEY, STORAGE_SUBJECT_KEY } from "./constant.js";
import storage from "./storage.js";

export function populateMenu(menuId, items, textMenuId) {
    let defaultItem = null
    const isLevelList = items[0].type === 'level'
    const isSubjectList = items[0].type === 'subject'
    
    const menu = document.getElementById(menuId);
    const textMenu = document.getElementById(textMenuId);
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu__item';
        div.setAttribute('value', item.id);
        div.textContent = item.text;
        div.addEventListener('click', function () {
            const itemId = this.getAttribute('value');
            const textContent = this.textContent;
            const parentMenu = menu.closest('.menu__field');
            parentMenu.setAttribute('textValue', itemId);
            textMenu.textContent = textContent;
            if (item.type === 'level') {
                storage.save(STORAGE_LEVEL_KEY, itemId)
            }
            if (item.type === 'subject') {
                storage.save(STORAGE_SUBJECT_KEY, itemId)
            }

            menu.style.display = 'none'; 
        });
        menu.appendChild(div);
    });

    if (isLevelList) {
        defaultItem = storage.read(STORAGE_LEVEL_KEY)
    }else if (isSubjectList) {
        defaultItem = storage.read(STORAGE_SUBJECT_KEY) 
    } else {
        defaultItem = null
    }

        textMenu.textContent = items.find(item => item.id === defaultItem)?.text || items[0].text

}



// quiz.js
export function initQuiz(questions) {
    
  
    let currentQuestionIndex = 0;
  
    const questionContainer = document.getElementById('questionContainer');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartBtn');
    const stopBtn = document.getElementById('stopBtn');
    const totalResponses = document.getElementById("totalResponses")
    const totalAnswer = document.getElementById("totalAnswer")
    const badAnswer = document.getElementById("badAnswer")
    const correctAnswer = document.getElementById("correctAnswer")
    totalAnswer.textContent = (questions.length ).toString()
    totalResponses.textContent = String(currentQuestionIndex + 1)
    
  
    function showQuestion(index) {
      const question = questions[index];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
  
      question.options.forEach((option, i) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('option');
        li.addEventListener('click', () => {
          handleOptionClick(i);
        });
        optionsElement.appendChild(li);
      });
  
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === questions.length - 1;
    }
  
    function handleOptionClick(selectedIndex) {
        console.log(currentQuestionIndex)
        console.log(questions.length)
        const question = questions[currentQuestionIndex];
        if (currentQuestionIndex === questions.length) {
          
            return
          }
      if (selectedIndex === question.answer) {
          // Réponse correcte, passe à la question suivante
          const actual = +correctAnswer.textContent
         
          correctAnswer.textContent = `${actual + 1}` 
         
          totalResponses.textContent = String(currentQuestionIndex + 1) 
        nextQuestion();
      } else {
        // Réponse incorrecte, affiche un message ou effectue une autre action
        const actual = +badAnswer.textContent
          badAnswer.textContent = `${actual + 1}` 
          const actualr = +totalResponses.textContent
          totalResponses.textContent = `${actualr + 1}` 
          nextQuestion()
      }
    }

    function stopQuiz() {
        window.location.reload()
    }
  
    function nextQuestion() {
      if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          totalResponses.textContent = String(currentQuestionIndex + 1)
        questionContainer.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          questionContainer.style.transform = 'translateX(0)';
          showQuestion(currentQuestionIndex);
        }, 500);
      }
    }

    function restartQuiz() {
        badAnswer.textContent = '0'
        totalAnswer.textContent = '0'
        totalResponses.textContent = String(currentQuestionIndex + 1)
        while (currentQuestionIndex > 0) {
            prevQuestion(500)
        }
    }
  
    function prevQuestion(time = 500) {
      if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          totalResponses.textContent = String(currentQuestionIndex + 1) 
        questionContainer.style.transform = 'translateX(100%)';
        setTimeout(() => {
          questionContainer.style.transform = 'translateX(0)';
          showQuestion(currentQuestionIndex);
        }, time);
      }
    }
  
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz)
    stopBtn.addEventListener('click', stopQuiz)
  
    // Initialiser la première question
    showQuestion(currentQuestionIndex);
  }
  


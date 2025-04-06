const questions = [
    {
      question: "JavaScript nima?",
      answers: ["Til", "Kino", "Musiqa", "Dastur"],
      correct: 0
    },
    {
      question: "HTML nima?",
      answers: ["Programma", "Markap tili", "Browser", "Server"],
      correct: 1
    }
  ];
  let current = 0;
  let question = document.querySelector("#question");
  let buttons = document.querySelectorAll(".answer");
  let next = document.querySelector("#next");
  let ans = document.querySelector(".answers")
  let result = document.querySelector(".result")
  let next1 = document.querySelector(".next1")
  let result1 = 0
  function quiz() {
      question.innerHTML = questions[current].question;
      buttons.forEach((el, index) => {
          el.innerHTML = questions[current].answers[index];
          el.addEventListener("click", () => {
              if (index === questions[current].correct) {
                  alert("TO‘G‘RI JAVOB!");
                  result1++
              } else {
                  alert("NO‘TO‘G‘RI JAVOB");
              }        
          });
      });
  }
  
  next.addEventListener("click", () => {
      current++;
      if (current < questions.length) {
          quiz();
      } else {
          ans.innerHTML = null
          next1.remove()
          question.innerHTML = "ILOVA NI ISHLATGANINGIZDAN XURSANDMAN"
           let p = document.createElement("p")
           p.innerHTML = "Togri javoblar soni " + (result1 - 1)
           ans.appendChild(p)
          
          if (next.addEventListener("click")) {
            quiz()
          }
          
      }
  });
  
  quiz();
  





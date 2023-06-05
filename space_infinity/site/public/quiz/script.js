// Referenciando o item 
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

// importando as questoes do arquivo questions
import questions from "./questions.js";

// declarando duas variaveis, para armazenar o index da questão atual e a outra a quantidade de acertos
var currentIndex = 0;
var qtd_questao_correta = 0;
var pontos = 0;


// botão para reiniciar 
btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  qtd_questao_correta = 0;
  pontos = 0;
  loadQuestion();
};

// function para passar a proxima pergunta e atribuir ponto
function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    qtd_questao_correta++;
    pontos += 10;
  }
  // verifica se não é a ulta questão e se não for vai aumentar mais uma ou finalizar
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}
// funcão para finalizar mostrando os pontos e as questões
function finish() {
  textFinish.innerHTML = "";
  if (qtd_questao_correta >= 0 && qtd_questao_correta <= 4) {
    textFinish.innerHTML += `Não foi dessa vez &#128557 <br>`;
  } else if (qtd_questao_correta <= 7) {
    textFinish.innerHTML += `Está quase lá &#128579 <br>`;
  } else {
    textFinish.innerHTML += `Você arrasou &#128512 <br> `
  }
  textFinish.innerHTML += `você acertou ${qtd_questao_correta} de ${questions.length} <br>
  Sua pontuação foi ${pontos} pontos`;
  content.style.display = "none";
  contentFinish.style.display = "flex";

  var id = sessionStorage.IDUSUARIO_USUARIO;
  console.log(id)

fetch("/usuarios/pontos_finais", {
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
      pontoServer: pontos,
      idServer: id
  })
}).then(function (resposta) {
  console.log("ESTOU NO THEN DO entrar()!")

  if (resposta.ok) {
      console.log(resposta);

      resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          console.log("Respota com sucesso");

          console.log(pontos)
      });

  } else {

      console.log("Houve um erro ao tentar realizar o login!");

      resposta.text().then(texto => {
          console.error(texto);
      });
  }

}).catch(function (erro) {
  console.log(erro);
})

return false;
}

function loadQuestion() {
  // currentIndex + 1 é divida pela quantidade de questões
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");
    //pega a resposta correta
    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });
  // atribui para que se estiver uma resposta correta para para proxima pergunta
  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

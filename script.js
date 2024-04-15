// Seleciona todas as divs container
const containers = document.querySelectorAll(".corpo .container");

// Adiciona um evento de clique a cada div container
containers.forEach(container => {
  container.addEventListener("click", toggleAnimation);
});

// Função para alternar as animações
function toggleAnimation(event) {
  // Encontra a div clicada
  const clickedDivId = event.target.id;

    // Ativa as animações na div clicada
    switch (clickedDivId) {
      case "char":
        animateChar();
        break;
      case "squir":
        animateSquir();
        break;
      case "bulb":
        animateBulb();
        break;
      default:
        console.error("Div desconhecida clicada!");
    }
}
// Restante do código permanece o mesmo


// Função para animar a div char
function animateChar() {
  const chari = document.getElementById("char");
  chari.style.animation = 'biger 3s linear forwards, diagD 3s linear forwards, charOpen 5s ease-in-out forwards 3s';
  animateOthers("container1");
}

// Função para animar a div squir
function animateSquir() {
  const squirtle = document.getElementById("squir");
  squirtle.style.animation = 'biger 3s ease-in-out forwards, move 3s ease-in-out forwards, squirOpen 5s ease-in-out forwards 3s';
  animateOthers("container2");
}

// Função para animar a div bulb
function animateBulb() {
  const bulba = document.getElementById("bulb");
  bulba.style.animation = 'biger 3s ease-in-out forwards, diagE 3s ease-in-out forwards, bulbOpen 5s ease-in-out forwards 3s';
   animateOthers("container3");
}

//Função para animar as outras divs
function animateOthers(clickedContainerId) {
  containers.forEach(container => {
    const containerId = container.id;
    if (containerId !== clickedContainerId) {
      const pokebola = container.querySelector(".pokebola");
      pokebola.style.animation = 'esconder 2s ease-in-out forwards';
    }
  });
}

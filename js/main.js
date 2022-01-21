// Assegno una variabile per document
let containerElements = document.getElementById("container");

// Creo un prompt per indicare quanti quadrati voglio

let number = parseInt(prompt("Quanti quadrati vuoi inserire?"));

// Creo un Ciclo

for ( i=1; i <= number; i++){

  // Creo una Condizione

  //  Soluzione con If
  /*
  if (i % 3 == 0 && i % 5 != 0){
  containerElements.innerHTML += "<div class='box green'>fizz</div>";
  } else if (i % 5 == 0 && i % 3 != 0){
  containerElements.innerHTML += "<div class='box yellow'>buzz</div>";
  } else if (i % 3 == 0 && i % 5 == 0){
  containerElements.innerHTML += "<div class='box red'>fizzbuzz</div>";
  } else {
    containerElements.innerHTML += "<div class='box'>" + i + "</div>";
  }
  */

  // Soluzione con Switch

  switch (true) {
    case (i % 3 == 0 && i % 5 != 0):
      containerElements.innerHTML += "<div class='box green'>fizz</div>";
      break;
    case (i % 5 == 0 && i % 3 != 0):
      containerElements.innerHTML += "<div class='box yellow'>buzz</div>";
      break;
    case (i % 3 == 0 && i % 5 == 0):
      containerElements.innerHTML += "<div class='box red'>fizzbuzz</div>";
      break;
    default:
      containerElements.innerHTML += "<div class='box'>" + i + "</div>";
  }
}



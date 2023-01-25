const emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
const NumberRegex = /^[0-9]+/




function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing modal form
let closing = document.getElementsByClassName("close")
closing[0].addEventListener("click", function(event) {
  modalbg.style.display = "none";
});

// function message d'erreur

function displayError(element, text) {
  
  annulDisplayError({target: element});
  element.style.border = "3px solid red";
  const message = document.createElement("p");
  message.innerHTML = text;
  message.classList = "message";
  element.parentElement.appendChild(message);
}

function annulDisplayError (event) {
  const element = event.target
  element.style.border = "";
  if (element.nextElementSibling !== null){
    element.nextElementSibling.remove();
  }
}


//function last name + first name
function nameValidation(event) {
  const name = event.target

  if (name.value.length < 2) {
    displayError(name, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return;
  }

  if (!name.value.match(/^[a-zA-Z-]+/)) {
    displayError(name, "Veuillez ne pas entrer de symboles ou de chiffres");
    return;
  }
}

const firstName = document.getElementById ('first');
firstName.addEventListener("blur", nameValidation);
firstName.addEventListener("input",annulDisplayError);

const lastName = document.getElementById ('last');
lastName.addEventListener("blur", nameValidation);
lastName.addEventListener("input",annulDisplayError);

//function mail

function mailValidation (event) {
  const mail = event.target;

  if (!mail.value.match(emailRegex))
  displayError(mail, "L'addresse mail n'est pas valide");
}

const eMail = document.getElementById ('email');
eMail.addEventListener("blur", mailValidation);
eMail.addEventListener("input",annulDisplayError);

//function birth date

function birthDateValidation (event) {
  const birth = event.target

  if (birth.value.length ==" "){
  displayError(birth, "Vous devez entrer votre date de naissance.")
  }
}

const dateBirth = document.getElementById ('birthdate');
dateBirth.addEventListener("blur", birthDateValidation);
dateBirth.addEventListener("input",annulDisplayError);

//function quantity

function quantityValidation (event){
  const quantity = event.target
  
  if(!quantity.value.match(NumberRegex)){
  displayError(quantity, "Veuillez entrer une valeur numérique.")
  }
}

const question = document.getElementById ('quantity');
question.addEventListener("blur", quantityValidation);
question.addEventListener("input", annulDisplayError);


// function validate button-radio

function validateRadio(){

  const radioButtons = document.querySelectorAll("div#formRadio>input");
  
  let radioCheck = false;

  for(let i=0; i < radioButtons.length; i++){
    if(radioButtons[i].checked){
      radioCheck = true;
    }
  }

  if(radioCheck === false){
      document.getElementById("errorMessageRadio").innerHTML = "Vous devez choisir une option."
  }else{
    document.getElementById("errorMessageRadio").innerHTML = " "
  }
}

const buttonRadio = document.getElementById('btn-signup');
buttonRadio.addEventListener("click",validateRadio);

const valideButtonRadio = document.querySelectorAll("div#formRadio>input");
for(let i=0; i < valideButtonRadio.length; i++){
 valideButtonRadio[i].addEventListener("change", validateRadio);
}

/////////////////////////////////////////////////////////////// ci-dessus ne pas changer tous fonctionne /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function validate checkbox

//function validateCheckbox(){

  const checkbox = document.getElementById("checkbox1");
  let checkboxButton = true;

  if(checkbox.change !== true){
    document.getElementById('errorMessageCheckbox').innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
    document.getElementById("submit-btn").disabled = false;

  }else{
    document.getElementById('errorMessageCheckbox').innerHTML = " "
    document.getElementById("submit-btn").disabled = true;
  }
//

// function validation form

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
    return false;
  }

  if (!name.value.match(/^[a-zA-Z-]+/)) {
    return false;
  }
  return true;
}

function errorName(name){
  displayError(name, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  displayError(name, "Veuillez ne pas entrer de symboles ou de chiffres");
}

const firstName = document.getElementById ('first');
firstName.addEventListener("blur", nameValidation);
firstName.addEventListener("blur", disabled);
firstName.addEventListener("input",annulDisplayError);

const lastName = document.getElementById ('last');
lastName.addEventListener("blur", nameValidation);
lastName.addEventListener("blur", disabled);
lastName.addEventListener("input",annulDisplayError);

//function mail

function mailValidation (event) {
  const mail = event.target;

  if (!mail.value.match(emailRegex)) 
  return true;
}

function errorMail(mail){
  displayError(mail, "L'addresse mail n'est pas valide");
}

const eMail = document.getElementById ('email');
eMail.addEventListener("blur", mailValidation);
eMail.addEventListener("blur", disabled);
eMail.addEventListener("input",annulDisplayError);

//function birth date

function birthDateValidation (event) {
  const birth = event.target

  if (birth.value.length ==" ")
  return true;
}

function errorBirth(birth){
  displayError(birth, "Vous devez entrer votre date de naissance.")
}

const dateBirth = document.getElementById ('birthdate');
dateBirth.addEventListener("blur", birthDateValidation);
dateBirth.addEventListener("blur", disabled);
dateBirth.addEventListener("input",annulDisplayError);

//function quantity

function quantityValidation (event){
  const quantity = event.target
  
  if(!quantity.value.match(NumberRegex))
  return true;
}

function errorQuantity(quantity){
  displayError(quantity, "Veuillez entrer une valeur numérique.")
}

const question = document.getElementById ('quantity');
question.addEventListener("blur", quantityValidation);
question.addEventListener("blur", disabled);
question.addEventListener("input", annulDisplayError);


// function validate button-radio

function validateradio(){

  const radio = document.querySelector('.checkbox-input[type="radio"]:checked')
  
  if(radio === null){
    return false;
  }
  return true;
}

function errorRadio (){
  document.getElementById("errorMessageRadio").innerHTML = "Vous devez choisir une option."
}

// function validate checkbox

function validateCheckbox(){

  const checkbox = document.getElementById("checkbox1");

  if(checkbox.checked !== true){
    return false;
  }
  return true;
}

function errorCheckbox (){
  document.getElementById('errorMessageCheckbox').innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
}


// function validation form

function validate() {

  const isValidateRadio = validateradio();
  if(!isValidateRadio) errorRadio();

  const isValidateCheckbox = validateCheckbox();
  if(!isValidateCheckbox) errorCheckbox();

  const isValidateFirstName = nameValidation({target: firstName});
  if(!isValidateFirstName) errorName(firstName);

  const isValidateLastName = nameValidation({target: lastName});
  if(!isValidateLastName) errorName(lastName);

  const isValidateMail = mailValidation({target: eMail});
  if(!isValidateMail) errorMail(eMail);

  const isValidateBirthDate = birthDateValidation({target: dateBirth});
  if(!isValidateBirthDate) errorBirth(dateBirth);

  const isValidateQuantity = quantityValidation({target: question});
  if(!isValidateQuantity) errorQuantity(question);

  if(!isValidateRadio || !isValidateCheckbox || !isValidateFirstName || !isValidateLastName|| !isValidateMail || !isValidateBirthDate || !isValidateQuantity) {
    return false
  }
}

function disabled(){

  const isValidateRadio = validateradio();
  const isValidateCheckbox = validateCheckbox();
  const isValidateFirstName = nameValidation({target: firstName});
  const isValidateLastName = nameValidation({target: lastName});
  const isValidateMail = mailValidation({target: eMail});
  const isValidateBirthDate = birthDateValidation({target: dateBirth});
  const isValidateQuantity = quantityValidation({target: question});

  if(isValidateBirthDate && isValidateCheckbox && isValidateFirstName && isValidateLastName && isValidateMail && isValidateQuantity && isValidateRadio){
    document.getElementById("submit-btn").disabled = false;
  }
}



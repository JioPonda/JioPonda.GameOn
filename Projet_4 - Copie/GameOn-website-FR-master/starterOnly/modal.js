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
const validForm = document.getElementById("valid-form");

const labelFirst = document.getElementById("first");
const labelLast = document.getElementById("last");
const labelEmail = document.getElementById("email");
const labelDate = document.getElementById("birthdate");
const labelQuantity = document.getElementById("quantity");
const radioLocation = document.querySelectorAll(".checkbox-input[type=radio]");
const location1 = document.getElementById("location1")
const location2 = document.getElementById("location2")
const location3 = document.getElementById("location3")
const location4 = document.getElementById("location4")
const location5 = document.getElementById("location5")
const location6 = document.getElementById("location6")
const locationError = document.getElementById("errorCity");
const checkedError = document.getElementById("errorChecked");
const checkedBox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close modal form
function closeModal() {
  modalbg.style.display = "none";
};

// launch valid form
function openValidForm() {
  modalbg.style.display = "none"
  validForm.style.display = "block";
}
// close valid form
function closeValidForm() {
  modalbg.style.disaply = "none"
  validForm.style.display = "none";
  document.getElementById("form-full").reset(); 
}


// First Name form 

let errorFirst = labelFirst.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");

function validationFirst () {
  let regex = /^([A-Za-zÀ-ÖØ-öø-ÿ-])+$/
  if (labelFirst.value !== "" && labelFirst.value.length >= 2 && regex.test(labelFirst.value)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

labelFirst.addEventListener("input" , function(){
  if (validationFirst() === false) {
    return errorFirst;
  } else {
    labelFirst.setCustomValidity("");
  }
});

// Last Name form 

let errorLast = labelLast.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");

function validationLast () {
  let regex = /^([A-Za-zÀ-ÖØ-öø-ÿ-])+$/
  if (labelLast.value !== "" && labelLast.value.length >= 2 && regex.test(labelLast.value)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

labelLast.addEventListener("input" , function(){
  if (validationLast() === false) {
    return errorLast;
  } else {
    labelLast.setCustomValidity("");
  }
});

// Email form

let errorEmail = labelEmail.setCustomValidity("Veuillez entrer une adresse mail valide");

function validationEmail () {
  let regex = /^([a-zA-Z0-9_\.-]+\@[\da-zA-Z\.-]+\.[a-zA-Z\.]{2,6})$/;
  return regex.test(labelEmail.value);
};

labelEmail.addEventListener("input" , function(){
  if (labelEmail.value != "" && validationEmail() === true) {
    console.log(true);
    labelEmail.setCustomValidity("");
  } else {
    console.log(false);
    return errorEmail;
  }
});

// Quantity fomr

let errorQuantity = labelQuantity.setCustomValidity("Veuillez saisire un chiffre")

function validationQuantity () {
  if (labelQuantity.value == "" && labelQuantity.value < 0 ) {
    console.log(false);
    return false
  } else {
    console.log(true);
    return true
  }
};

labelQuantity.addEventListener("input", function(){
  if (validationQuantity() === true ) {
    console.log(true);
    labelQuantity.setCustomValidity("");
  } else {
    console.log(false);
    return errorQuantity;
  }
})

// Location form

function validationLocation() {
  if (radioLocation[0].checked || radioLocation[1].checked || radioLocation[2].checked || radioLocation[3].checked || radioLocation[4].checked || radioLocation[5].checked ) {
    console.log(true);
    locationError.style.display = "none";
    return true;
  } else {
    console.log(false);
    locationError.style.display = "block";
    return false;
  }
}

for (i = 0 ; i < radioLocation.length; i++ ) {
  radioLocation[i].addEventListener('input', function (){
    if (validationLocation() === true) {
      locationError.style.display = "none";
      return true;
    } else {
      locationError.style.display = "block";
      return false;
    }
  });
}

// Use Conditions Checked form

function validationCheckbox() {
  if (checkedBox.checked) {
  console.log(true);
  return true;
  } else {
  console.log(false);
  return false;
  }
}

checkedBox.addEventListener("input" , function(){
  if (validationCheckbox() === true) {
    console.log(true);
    checkedError.style.display = "none";
    return true;
  } else {
    console.log(false);
    checkedError.style.display = "block";
    return false;
  }
})

// Send form event

function validate (event) {
  event.preventDefault();
  if (validationFirst() === true && validationLast() === true && validationEmail() === true && validationQuantity() === true && validationCheckbox() === true && validationLocation() === true) {
    console.log(("ça marche!"));
    modalbg.style.display = "none";
    validForm.style.display = "block";
    return true;
  } else {
    event.preventDefault();
    console.log("ça marche pas !");
    modalbg.style.display = "block";
    validForm.style.display = "none";
  }
}


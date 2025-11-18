const rangeInput = document.getElementById("rangeInput");
const rangeOutput = document.getElementById("rangeOutput");
const form = document.getElementById("demoForm");

rangeOutput.textContent = "Wert: " + rangeInput.value;

rangeInput.addEventListener("input", function () {
  rangeOutput.textContent = "Wert: " + this.value;
});

form.addEventListener("reset", function () {
  alert("Formular zurückgesetzt!");
});

form.addEventListener("submit", function (e) {

  console.log("e", e);

  let valid = true;
  // Email
  let email = document.getElementById("emailInput");
  let emailRegexp = /^[\w\-\.]+@[\w\-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegexp.test(email.value)) {
    valid = false;
    document.getElementById("emailError").textContent =
      "Bitte gültige Email eingeben!";
  } else {
    document.getElementById("emailError").textContent = "";
  }
  // Passwort
  let pw = document.getElementById("passwordInput");
  let pwRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!pwRegexp.test(pw.value)) {
    valid = false;
    document.getElementById("passwordError").textContent =
      "Mind. 6 Zeichen, Buchstaben und Zahl!";
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Tel
  let tel = document.getElementById("telInput");
  let telRegexp = /^\+?\d{10,15}$/;
  if (!telRegexp.test(tel.value)) {
    valid = false;
    document.getElementById("telError").textContent =
      "Bitte gültige Telefonnummer (mind. 10 Ziffern)!";
  } else {
    document.getElementById("telError").textContent = "";
  }

  // URL
  let url = document.getElementById("urlInput");
  let urlRegexp = /^https?:\/\/[\w\-\.]+(\.[a-zA-Z]{2,})+.*$/;
  if (!urlRegexp.test(url.value)) {
    valid = false;
    document.getElementById("urlError").textContent =
      "Bitte eine gültige URL eingeben!";
  } else {
    document.getElementById("urlError").textContent = "";
  }

  // Datei
  let fileInput = document.getElementById("fileInput");
  if (fileInput.files.length === 0) {
    valid = false;
    alert("Bitte Datei auswählen!");
  }

  // Verhindere das Absenden des Formulars
  e.preventDefault();

  if (!valid) {
    document.getElementById("successMsg").textContent = "";
    return false;
  }

  document.getElementById("successMsg").textContent =
    "Alle Eingaben erfolgreich überprüft und gesendet!";

  form.reset();
});

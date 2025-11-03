// form-validation.js
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let form = e.target;
  let valid = true;

  function setError(input, message) {
    input.classList.add('error');
    input.classList.remove('success');
    input.nextElementSibling.textContent = message;
    valid = false;
  }
  function setSuccess(input) {
    input.classList.remove('error');
    input.classList.add('success');
    input.nextElementSibling.textContent = '';
  }

  // Name prüfen
  const name = form.name;
  if (!name.value.trim()) setError(name, "Name ist erforderlich.");
  else if (!name.value.match(/^[A-Za-z\s]{2,}$/)) setError(name, "Nur Buchstaben, mind. 2 Zeichen.");
  else setSuccess(name);

  // E-Mail prüfen
  const email = form.email;
  if (!email.value.trim()) setError(email, "E-Mail ist erforderlich.");
  else if (!email.validity.valid) setError(email, "Bitte gültige E-Mail-Adresse.");
  else setSuccess(email);

  // Passwort prüfen
  const password = form.password;
  if (!password.value.trim()) setError(password, "Passwort ist erforderlich.");
  else if (password.value.length < 6) setError(password, "Mindestens 6 Zeichen.");
  else setSuccess(password);

  // Alter prüfen
  const age = form.age;
  if (!age.value) setError(age, "Alter ist erforderlich.");
  else if (age.value < 12 || age.value > 120) setError(age, "Zwischen 12 und 120.");
  else setSuccess(age);

  // Geschlecht prüfen
  const gender = form.gender;
  if (!gender.value) setError(gender, "Bitte Geschlecht wählen.");
  else setSuccess(gender);

  // Geburtsdatum prüfen
  const birthdate = form.birthdate;
  if (!birthdate.value) setError(birthdate, "Geburtsdatum ist erforderlich.");
  else setSuccess(birthdate);

  // Farbe prüfen
  const color = form.color;
  if (!color.value) setError(color, "Lieblingsfarbe ist erforderlich.");
  else setSuccess(color);

  // Webseite prüfen (optional)
  const website = form.website;
  if (website.value && !website.value.match(/^https?:\/\/.+/))
    setError(website, "Gültige URL (http/https) erforderlich.");
  else setSuccess(website);

  // Nachricht prüfen (optional)
  const message = form.message;
  if (message.value.length > 140)
    setError(message, "Maximal 140 Zeichen.");
  else setSuccess(message);

  // AGB prüfen
  const agb = form.agb;
  if (!agb.checked) setError(agb, "AGB müssen akzeptiert werden.");
  else setSuccess(agb);

  // Newsletter prüfen
  const newsletter = form.newsletter;
  if (!form.querySelector('input[name="newsletter"]:checked'))
    setError(newsletter, "Bitte Newsletter wählen.");
  else setSuccess(newsletter);

  if (valid) form.submit();
});
function getFormvalue(event) {
  event.preventDefault();

  let firstName = document.forms["form1"]["fname"].value.trim();
  let lastName = document.forms["form1"]["lname"].value.trim();

  if (!firstName && !lastName) {
    alert("Please enter your first and last name.");
    return;
  } else if (!firstName) {
    alert("Please enter your first name.");
    return;
  } else if (!lastName) {
    alert("Please enter your last name.");
    return;
  }

  let fullName = firstName + " " + lastName;
  alert(fullName);
}

document.getElementById("form1").addEventListener("submit", getFormvalue);

function saveData() {
  let fname,lname;
  let regEmail,regPass;
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  regEmail= document.getElementById("regEmail").value;
  regPass = document.getElementById("regPass").value;


  localStorage.setItem("fName",fname);
  localStorage.setItem("lName",lname);
  localStorage.setItem("regEmail",regEmail);
  localStorage.setItem("regPass",regPass);
  return;
}

function confirmation() {
  window.location.replace("https://google.com");
}

function checkData() {
  const  logEmail= document.getElementById("logEmail").value;
  const  logPass = document.getElementById("logPass").value;

  localStorage.setItem("logEmail",logEmail);
  localStorage.setItem("logPass",logPass);

  const myEmail = localStorage.getItem("regEmail");
  const myPass = localStorage.getItem("regPass");
  if(logEmail==myEmail && logPass==myPass)
  {
    window.location.replace("confirmation.html");
    alert("Logged In");
  }
  else {
    alert("Wrong Email or Pass.");
  }
}

function logOut(){
  window.location.replace("confirmation.html");
  alert("logged Out");
}
//
// function saveStoreData() {
//
// }

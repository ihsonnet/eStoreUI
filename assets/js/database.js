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

function storeData() {
  let storeName,storeDes;
  storeName = document.getElementById("storeName").value;
  storeDes = document.getElementById("storeDes").value;

  localStorage.setItem("storeName",storeName);
  localStorage.setItem("storeDes",storeDes);
  return;
}
function storeInfo() {
  let storeName,storeDes;
  storeCat = document.getElementById("storeCat").value;
  storeAdress = document.getElementById("storeAddress").value;

  localStorage.setItem("storeCat",storeCat);
  localStorage.setItem("storeAddress",storeAddress);
  return;
}

function confirmation() {
  window.location.replace("https://google.com");
}

function forgotPass(){
  const  forEmail= document.getElementById("forEmail").value;
  const myEmail = localStorage.getItem("regEmail");
  if(forEmail==myEmail)
  {
    document.getElementById('seePass').style.display='block';
    document.getElementById('errorEmail').style.display='none';
  }
  else {
    document.getElementById('errorEmail').style.display='block';
    document.getElementById('seePass').style.display='none';
  }
}


function checkData() {
  const  logEmail= document.getElementById("logEmail").value;
  const  logPass = document.getElementById("logPass").value;

  localStorage.setItem("logEmail",logEmail);
  localStorage.setItem("logPass",logPass);

  const myEmail = localStorage.getItem("regEmail");
  const myPass = localStorage.getItem("regPass");
  document.getElementById('errorEmail').style.display='none';
  document.getElementById('errorPass').style.display='none';
  if(logEmail==myEmail && logPass==myPass)
  {
    window.location.replace("./cpanel/dashboard.html");

  }
  else if (logPass==myPass) {
    document.getElementById('errorEmail').style.display='block';
  }
  else if (logEmail==myEmail) {
    document.getElementById('errorPass').style.display='block';
  }
  else {
    alert("User not exist! Please Registration first.");
  }
}

function logOut(){
  window.location.replace("dashboard.html");
  alert("logged Out");
}
//
// function saveStoreData() {
//
// }

  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 40);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

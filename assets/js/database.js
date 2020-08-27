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

function updateData() {
  let finame,laname;
  let regiEmail,regiPass,phnNumber;
  finame = document.getElementById("finame").value;
  laname = document.getElementById("laname").value;
  regiEmail= document.getElementById("regiEmail").value;
  regiPass = document.getElementById("regiPass").value;
  phnNumber = document.getElementById("phnNumber").value;


  localStorage.setItem("fName",finame);
  localStorage.setItem("lName",laname);
  localStorage.setItem("regEmail",regiEmail);
  localStorage.setItem("regPass",regiPass);
  localStorage.setItem("phnNumber",phnNumber);
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

function updatestoreData() {
  let Stname,Stdes;
  let Staddress,Stcat;

  Stname = document.getElementById("StName").value;
  Stdes = document.getElementById("StDes").value;
  Stcat = document.getElementById("StCat").value;
  Staddress = document.getElementById("StAddress").value;

  localStorage.setItem("storeName",Stname);
  localStorage.setItem("storeDes",Stdes);
  localStorage.setItem("storeCat",Stcat);
  localStorage.setItem("storeAddress",Staddress);
  return;
}

function storeInfo() {
  let storeAddress,storeCat;
  storeCat = document.getElementById("storeCat").value;
  storeAddress = document.getElementById("storeAddress").value;

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

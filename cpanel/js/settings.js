function UpdatestoreData() {
  let StoreName,storeDes,storeAddress,storeCat;
  StoreName = document.getElementById("Storename").value;
  storeDes = document.getElementById("storeDes").value;
  storeCat = document.getElementById("storeCat").value;
  storeAdress = document.getElementById("storeAddress").value;

  localStorage.setItem("storeName",StoreName);
  localStorage.setItem("storeDes",storeDes);
  localStorage.setItem("storeCat",storeCat);
  localStorage.setItem("storeAddress",storeAddress);
  return;
}

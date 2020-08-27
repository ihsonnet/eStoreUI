var productList = [];
function init() {
  document.getElementById("tablerows").innerHTML = "";
  if(localStorage.productRecord) {
    productList = JSON.parse(localStorage.productRecord);
    for (var i = 0; i < productList.length; i++) {
      prepareTableCell(i, productList[i].productName, productList[i].productCode, productList[i].productPrice, productList[i].productCategory);
    }
  }
  if(i)
  {
    document.getElementById('empty').style.display='none';
  }
}

function addBtn() {
  var productName = document.getElementById("productName").value;
  var productCode = document.getElementById("productCode").value;
  var productPrice = document.getElementById("productPrice").value;
  var productCategory = document.getElementById("productCategory").value;

  var productObj = {productName: productName, productCode: productCode, productPrice: productPrice, productCategory: productCategory};
  if(selectedIndex === -1) {
    productList.push(productObj);
  }else {
    productList.splice(selectedIndex, 1, productObj);
  }
  localStorage.productRecord = JSON.stringify(productList);
  init();
  ClearBtn();
  document.getElementById('empty').style.display='none'
}

function prepareTableCell(index, productName, productCode, productPrice, productCategory) {
  var table = document.getElementById("tablerows");
  var row = table.insertRow();
  var productIdCell = row.insertCell(0);
  var productNameCell = row.insertCell(1);
  var productCodeCell = row.insertCell(2);
  var productPriceCell = row.insertCell(3);
  var productCategoryCell = row.insertCell(4);
  var actionCell = row.insertCell(5);

  productIdCell.innerHTML = index;
  productNameCell.innerHTML = productName;
  productCodeCell.innerHTML = productCode;
  productPriceCell.innerHTML = productPrice;
  productCategoryCell.innerHTML = productCategory;
  actionCell.innerHTML = '<a-edit onclick="editBtn('+index+')">Edit</a-edit><a-delete onclick="deleteBtn('+index+')">Delete</a-delete>';

}

function deleteBtn(index){
    productList.splice(index,1);
    localStorage.productRecord = JSON.stringify(productList);
    init();
}

function ClearBtn(){
  selectedIndex = -1;
  document.getElementById("productName").value = "";
  document.getElementById("productCode").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productCategory").value = "Grpcery Items";
  document.getElementById("submit").value = "Add Item";
}

var selectedIndex = -1;

function editBtn(index){
  selectedIndex = index;
  var productObj = productList[index];
  document.getElementById("productName").value = productObj.productName;
  document.getElementById("productCode").value = productObj.productCode;
  document.getElementById("productPrice").value = productObj.productPrice;
  document.getElementById("productCategory").value = productObj.productCategory;
  document.getElementById("submit").innerHTML = "Update";
}

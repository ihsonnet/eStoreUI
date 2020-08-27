var customerList = [];
function init() {
  document.getElementById("tablerows").innerHTML = "";
  if(localStorage.customerRecord) {
    customerList = JSON.parse(localStorage.customerRecord);
    for (var i = 0; i < customerList.length; i++) {
      prepareTableCell(i, customerList[i].customerName, customerList[i].customerCode, customerList[i].customerPhone, customerList[i].customerAddress);
    }
  }
  if(i)
  {
    document.getElementById('empty').style.display='none';
  }
}

function addBtn() {
  var customerName = document.getElementById("customerName").value;
  var customerCode = document.getElementById("customerCode").value;
  var customerPhone = document.getElementById("customerPhone").value;
  var customerAddress = document.getElementById("customerAddress").value;

  var customerObj = {customerName: customerName, customerCode: customerCode, customerPhone: customerPhone, customerAddress: customerAddress};
  if(selectedIndex === -1) {
    customerList.push(customerObj);
  }else {
    customerList.splice(selectedIndex, 1, customerObj);
  }
  localStorage.customerRecord = JSON.stringify(customerList);
  init();
  ClearBtn();

}

function prepareTableCell(index, customerName, customerCode, customerPhone, customerAddress) {
  var table = document.getElementById("tablerows");
  var row = table.insertRow();
  var customerNameCell = row.insertCell(0);
  var customerCodeCell = row.insertCell(1);
  var customerPhoneCell = row.insertCell(2);
  var customerAddressCell = row.insertCell(3);
  var actionCell = row.insertCell(4);

  customerNameCell.innerHTML = customerName;
  customerCodeCell.innerHTML = customerCode;
  customerPhoneCell.innerHTML = customerPhone;
  customerAddressCell.innerHTML = customerAddress;
  actionCell.innerHTML = '<a-edit onclick="editBtn('+index+')">Update</a-edit><a-delete onclick="deleteBtn('+index+')">Delete</a-delete>';

}

function deleteBtn(index){
    customerList.splice(index,1);
    localStorage.customerRecord = JSON.stringify(customerList);
    init();
}

function ClearBtn(){
  selectedIndex = -1;
  document.getElementById("customerName").value = "";
  document.getElementById("customerCode").value = "";
  document.getElementById("customerPhone").value = "";
  document.getElementById("customerAddress").value = "Grpcery Items";
  document.getElementById("submit").value = "Add Item";
}

var selectedIndex = -1;

function editBtn(index){
  selectedIndex = index;
  var customerObj = customerList[index];
  document.getElementById("customerName").value = customerObj.customerName;
  document.getElementById("customerCode").value = customerObj.customerCode;
  document.getElementById("customerPhone").value = customerObj.customerPhone;
  document.getElementById("customerAddress").value = customerObj.customerAddress;
  document.getElementById("submit").innerHTML = "Update";
}

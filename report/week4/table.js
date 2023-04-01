var userData = [
	{
		Id : 35,
		First : "Jane",
		Last : "Smith",
		Email: "js@gmail.com",
		Phone: "503-555-5555",
		Location: "Portland, Oregon",
		Hobby: "Photography",
	},
	{
		Id : 36,
		First : "Tristan",
		Last : "Rodriguez",
		Email: "tr@gmail.com",
		Phone: "201-555-5555",
		Location: "New York, New York",
		Hobby: "Photography",
	},
	{
		Id : 37,
		First : "Andrea",
		Last : "Jones",
		Email: "aj@gmail.com",
		Phone: "503-555-5555",
		Location: "Portland, Oregon",
		Hobby: "Photography",
	},
	{
		Id : 38,
		First : "Elliott",
		Last : "Richardson",
		Email: "er@gmail.com",
		Phone: "503-555-5555",
		Location: "Boise, Idaho",
		Hobby: "Photography",
	
	},
	{
		Id : 39,
		First : "June",
		Last : "Bug",
		Email: "jb@gmail.com",
		Phone: "503-555-5555",
		Location: "Portland, Oregon",
		Hobby: "Cooking",
	}
];

var table = document.getElementById("userTable");
var tbody = table.getElementsByTagName("tbody")[0];

// Thêm cột "Action"
var headerRow = table.getElementsByTagName("thead")[0].getElementsByTagName("tr")[0];
var actionHeader = document.createElement("th");
actionHeader.innerHTML = "Action";
headerRow.appendChild(actionHeader);


for (var i = 0; i < userData.length; i++) {
  var row = tbody.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var actionCell = row.insertCell(7);
  actionCell.setAttribute("id", "actionCol");

  cell1.innerHTML = userData[i].Id;
  cell2.innerHTML = userData[i].First;
  cell3.innerHTML = userData[i].Last;
  cell4.innerHTML = userData[i].Email;
  cell5.innerHTML = userData[i].Phone;
  cell6.innerHTML = userData[i].Location;
  cell7.innerHTML = userData[i].Hobby;
  actionCell.innerHTML =
    "<button onclick='editRow(this)'>Edit</button><button onclick='deleteRow(this)'>Delete</button>";
}
function deleteRow(button) {
	var row = button.parentNode.parentNode;
	row.parentNode.removeChild(row);
}





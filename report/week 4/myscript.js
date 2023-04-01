//Data
var dataUser = [
    {
        ID: 1,
        First: "Nguyen",
        Last: "Hai",
        Email: "hai.nh191821@sis.hust.edu.vn",
        Phone: "0344283838",
        Location: "Nghe An Province",
        Hobby: "Sleeping",
        Action: ""
    },
    {
        ID: 2,
        First: "Nguyen",
        Last: "Anh",
        Email: "2016bb@sis.hust.edu.vn",
        Phone: "0344223838",
        Location: "Hanoi City",
        Hobby: "Studying"
    }
];

//Truyền property name vào dòng table header
var getHeader = document.getElementById("headers");
var dataUserKey = Object.keys(dataUser[0]);

var htmls = dataUserKey.map((arr) => {
    return `
        <th>${arr}</th>    
    `;
});
getHeader.innerHTML = htmls.join('');

//Truyền dữ liệu vào table
updateTable();
function updateTable(){
var getData = document.getElementById("data");
var htmls = dataUser.map((arr) => {
    return `
    <tr>
        <td>${arr.ID}</td>    
        <td>${arr.First}</td>    
        <td>${arr.Last}</td>    
        <td>${arr.Email}</td>    
        <td>${arr.Phone}</td>    
        <td>${arr.Location}</td>    
        <td>${arr.Hobby}</td>
        <td><button type="button" onclick="editData(this)">Edit</button></td>
        <td><button type="button" onclick="deleteData(this)">Delete</button></td>          
    </tr>
    `;
});
getData.innerHTML = htmls.join('');
}
 

//Lấy dữ liệu ở form và đổ vào dataUser
var newID = 3;
function newData() {
    var newObject = {
        ID: newID,
    }
    //Lấy dữ liệu từ input
    newObject.First = document.getElementById("firstname").value;;
    newObject.Last = document.getElementById("lastname").value;
    newObject.Email = document.getElementById("email").value;
    newObject.Phone = document.getElementById("phone").value;
    newObject.Location = document.getElementById("location").value;
    newObject.Hobby = document.getElementById("hobby").value;
    //Push vào dataUser
    dataUser.push(newObject);
    //Sau mỗi lần click, cập nhật lại bảng
    updateTable();
    newID++;
}


//Chỉnh sửa dữ liệu - đổ từ form vào hàng được chọn
function editData(r) {
    var index = r.parentNode.parentNode.rowIndex;
    var table = document.getElementById("dataTable");
    table.rows[index].cells[1].innerHTML = document.getElementById("firstname").value;
    table.rows[index].cells[2].innerHTML = document.getElementById("lastname").value;
    table.rows[index].cells[3].innerHTML = document.getElementById("email").value;
    table.rows[index].cells[4].innerHTML = document.getElementById("phone").value;
    table.rows[index].cells[5].innerHTML = document.getElementById("location").value;
    table.rows[index].cells[6].innerHTML = document.getElementById("hobby").value;
}

//Xoá dữ liệu - xóa hàng khi bấm vào button ở hàng đó
function deleteData(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dataTable").deleteRow(i);
}


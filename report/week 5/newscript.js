var dataAPI = "https://raw.githubusercontent.com/tuandq2112/trainning-fe/api/api/user.json";

//Truyền property name vào dòng table header
fetch(dataAPI) 
    .then(response => response.json())
    .then(dataSet =>{
        var getHeader = document.getElementById("headers");
        var dataUserKey = Object.keys(dataSet.data[0]);
        var htmls = dataUserKey.map((arr) => {
            return `
                <th>${arr}</th>    
            `;
        });
        htmls.push(`<th>Actions</th>`);
        getHeader.innerHTML = htmls.join('');
        console.log(dataSet);
    });

//Truyền dữ liệu vào table
updateTable();
function updateTable() {
fetch(dataAPI)
    .then(response => response.json())
    .then(dataSet => {
        var getData = document.getElementById("data");
        var dataUser = dataSet.data;
        console.log(dataUser);
        var htmls = dataUser.map((arr) => {
            return `
            <tr class="trData">
                <td>${arr.id}</td>    
                <td>${arr.first}</td>    
                <td>${arr.last}</td>    
                <td>${arr.email}</td>    
                <td>${arr.phone}</td>    
                <td>${arr.location}</td>
                <td><button type="button" onclick="editData(this)" class="editBtn">Edit</button></td>
                <td><button type="button" onclick="deleteData(this)" class="deleteBtn">Delete</button></td>          
            </tr>
            <tr><p class="dividerRow"></p></tr>
            `;
        });
        getData.innerHTML = htmls.join('');
    });
}










// //Lấy dữ liệu ở form và đổ vào dataUser
// function newData() {
//     fetch(dataAPI)
//         .then(response => response.json())
//         .then(dataSet => {
//             var dataUser = dataSet.data;
//     var newObject = {
//         id: dataUser.length,
//     }
//     //Lấy dữ liệu từ input
//     newObject.first = document.getElementById("firstname").value;;
//     newObject.last = document.getElementById("lastname").value;
//     newObject.email = document.getElementById("email").value;
//     newObject.phone = document.getElementById("phone").value;
//     newObject.location = document.getElementById("location").value;
//     //POST lên database

//     postData(dataAPI, newObject)
//         .then(data => {
//             console.log("Truyen thanh cong!");
//         })
//     //Sau mỗi lần click, cập nhật lại bảng
//     updateTable();
// });
// }


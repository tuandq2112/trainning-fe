const store = {
  data: [],
};

function getData() {
  const inputs = document.getElementsByTagName("input");
  return {
    first: inputs[0].value,
    last: inputs[1].value,
    email: inputs[2].value,
    phone: inputs[3].value,
    location: inputs[4].value,
  };
}

function updateTable() {
  document.getElementById("data-table").innerHTML = store.data
    .map(
      (item, index) =>
        `<tr>
  <td>${index + 1}</td>
  <td>${item.first}</td>
  <td>${item.last}</td>
  <td>${item.email}</td>
  <td>${item.phone}</td>
  <td>${item.location}</td>
  <td><button class="edit">Edit</button><button class="del">Del</button></td>
  </tr>`
    )
    .join("");
  // thêm sự kiện cho nút
  const editBtns = document.getElementsByClassName("edit");
  const delBtns = document.getElementsByClassName("del");

  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].onclick = function onEdit() {
      const editData = getData();
      store.data.splice(i, 1, editData);
      updateTable();
    };
    delBtns[i].onclick = function onEdit() {
      store.data.splice(i, 1);
      updateTable();
    };
  }
}

document.getElementById("button").onclick = function onCreate() {
  const newData = getData();
  store.data.push(newData);

  updateTable(store.data);
};

fetch(
  "https://raw.githubusercontent.com/tuandq2112/trainning-fe/api/api/user.json"
)
  .then((response) => response.json())
  .then((res) => {
    console.log(res.data, "data???");
    store.data = res.data;
    updateTable();
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });

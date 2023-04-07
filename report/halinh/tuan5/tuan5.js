const userList = document.getElementById("user-list");
const createButton = document.getElementById("create-button");

// Nút Del
userList.addEventListener("click", event => {
  const target = event.target;
  if (target.classList.contains("del-button")) {
    const row = target.closest("tr");
    row.remove();
  }
});

// Nút Edit
userList.addEventListener("click", event => {
  const target = event.target;
  if (target.classList.contains("edit-button")) {
    const row = target.closest("tr");
    const cells = row.querySelectorAll("td");
    const formData = document.getElementById("user-form").elements;

    formData["first-name"].value = cells[1].textContent;
    formData["last-name"].value = cells[2].textContent;
    formData["email"].value = cells[3].textContent;
    formData["phone"].value = cells[4].textContent;
    formData["location"].value = cells[5].textContent;

    createButton.textContent = "Edit";
    createButton.dataset.mode = "edit";
    createButton.dataset.id = cells[0].textContent;
  }
});

// Nút Create
createButton.addEventListener("click", event => {
  const formData = document.getElementById("user-form").elements;

  if (createButton.dataset.mode === "edit") {
    // Lưu dữ liệu đã chỉnh sửa

    // ===> em không đánh data-id cho các td ở đầu thì sao mà query được
    const targetRow = document.querySelector(`#user-list tr td:first-child[data-id="${createButton.dataset.id}"]`).parentNode;
    targetRow.querySelector("td:nth-child(2)").textContent = formData["first-name"].value;
    targetRow.querySelector("td:nth-child(3)").textContent = formData["last-name"].value;
    targetRow.querySelector("td:nth-child(4)").textContent = formData["email"].value;
    targetRow.querySelector("td:nth-child(5)").textContent = formData["phone"].value;
    targetRow.querySelector("td:nth-child(6)").textContent = formData["location"].value;

    createButton.textContent = "Create";
    createButton.dataset.mode = "";
    createButton.removeAttribute("data-id");

  } else {
    // Thêm dữ liệu mới
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-id="${createButton.dataset.id}">${Math.floor(Math.random() * 100)}</td>
      <td>${formData["first-name"].value}</td>
      <td>${formData["last-name"].value}</td>
      <td>${formData["email"].value}</td>
      <td>${formData["phone"].value}</td>
      <td>${formData["location"].value}</td>
      <td>
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="del-button">Del</button>
      </td>
    `;
    userList.appendChild(row);

    // Xóa dữ liệu từ form
    formData["first-name"].value = "";
    formData["last-name"].value = "";
    formData["email"].value = "";
    formData["phone"].value = "";
    formData["location"].value = "";
  }
});

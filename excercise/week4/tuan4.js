
fetch("https://raw.githubusercontent.com/tuandq2112/trainning-fe/api/api/user.json")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#userTable ");
    data.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.Id}</td>
        <td>${user.First}</td>
        <td>${user.Last}</td>
        <td>${user.Email}</td>
        <td>${user.Phone}</td>
        <td>${user.Location}</td>
        <td>${user.Hobby}</td>

      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
  });

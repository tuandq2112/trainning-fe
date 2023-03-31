function del(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    // btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);
  }

  function edit(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    
    for(var i = 0;i < cells.length - 1; i++)
    {
      var value = cells[i].innerHTML;
      cells[i].innerHTML = "<input type='text' value='" + value + "'>";
    }
    button.innerHTML = "Save";
    button.setAttribute("onclick", "save(this)");
  }

  function save(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length - 1; i++) {
      var value = cells[i].getElementsByTagName("input")[0].value;
      cells[i].innerHTML = value;
  }

  button.innerHTML = "Edit";
  button.setAttribute("onclick", "edit(this)");
  }

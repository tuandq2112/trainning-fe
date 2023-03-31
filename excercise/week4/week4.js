function del(row) {
    row.closest('tr').remove();
  }
  
function edit(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("th");

    for (var i = 0; i < cells.length - 1; i++) {
        var value = cells[i].innerHTML;
        cells[i].innerHTML = "<input type='text' value='" + value + "'>";
    }

    button.innerHTML = "Save";
    button.setAttribute("onclick", "save(this)");
}

function save(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("th");

    for (var i = 0; i < cells.length - 1; i++) {
        var value = cells[i].getElementsByTagName("input")[0].value;
        cells[i].innerHTML = value;
    }

    button.innerHTML = "Edit";
    button.setAttribute("onclick", "edit(this)");
}

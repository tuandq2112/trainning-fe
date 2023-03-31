function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  
  var deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      deleteRow(this);
    });
  });
  
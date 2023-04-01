function DeleteRow(button){
    	// Lấy hàng cha của button (nghĩa là thẻ tr chứa button đó)
			var row = button.parentNode.parentNode;
			// Lấy bảng chứa hàng đó
			var table = row.parentNode.parentNode;
			// Xóa hàng đó khỏi bảng
			table.deleteRow(row.rowIndex);
		
}

window.onload = function(){
	//variables
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var list = document.getElementById("list");
	var btn = document.getElementById("btn");
	var btnClear = document.getElementById("btnClear");
	var btnMark = document.getElementById("btnMark");
	var btnDel = document.getElementById("btnDel");
	var id = 1;

	//button event listener
	btn.addEventListener("click", addTodoItem);

	//add todo item to list
	function addTodoItem(){
		if(input.value == "") {
			alert("No item entered!!!");
		} else{
			var text = input.value;
			var item = `<li id="li-${id}">${text}
						<input id="box-${id}" class="checkboxes" name="chk" type="checkbox"></li>`;

			list.insertAdjacentHTML('beforeend', item);
			id++;
			form.reset();
		}
	}

	//buttons to clear, mark, del
	btnDel.addEventListener("click", delTodoItem);
	btnMark.addEventListener("click", markTodoItem);
	btnClear.addEventListener("click", clearTodoItem);

	//delete item
	function delTodoItem(){
		var ul = document.getElementById("list")
		while(ul.firstChild) ul.removeChild(ul.firstChild)
	}

	//mark all checkboxes
	function markTodoItem(){
		var checkboxes = document.getElementsByName("chk");
    	for (var checkbox in checkboxes) 
	            checkbox.checked = !checkbox.checked;
	}

	//clear all checkboxes
	function clearTodoItem(){

	}
}
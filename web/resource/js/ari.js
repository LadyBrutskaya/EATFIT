function validForm(form){
	for(var i = 0; i < form.elements.length - 1; i++){
		var data = form.elements[i].value;
		var fieldName = form.elements[i].attr("name");
		if(data != "" || data != null || data != undefined){
			window.location = "http://google.com";
		} else {
			alert("Не заполнено поле " + " !");
			break;
		}
	}
}
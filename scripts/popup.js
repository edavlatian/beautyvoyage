function popUp(URL, wLen, hLen) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width='+wLen+',height='+hLen+',left = 20,top = 20');");
}


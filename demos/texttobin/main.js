function txttobin(back = false) {
	var alltxt = '`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>? \n'.split('');
	var inoutmain = document.getElementById('iomain');
	var intxt = inoutmain.value;
	var outtxt = '';
	if (!back) {
		for (var i = 0; i < intxt.length; i++) {
			outtxt += intxt[i].charCodeAt(0).toString(2) + ' ';
			console.log(intxt[i] + ' - ' + outtxt);
		}
	}
	if (back) {
		intxt = intxt.split(' ');
		console.log(intxt.length);
		for (var i = 0; i < intxt.length; i++) {
			for (var t = 0; t < alltxt.length; t++) {
				if (intxt[i] == alltxt[t].charCodeAt(0).toString(2)) {outtxt += alltxt[t];}
			}
		}
	}
	inoutmain.value = outtxt;
}

document.addEventListener('keydown', (keyevent) => {
	var keyd = keyevent.which || keyevent.keyCode;
	console.log(keyd);
	if (keyd == 9) {
		txttobin();
	}
});
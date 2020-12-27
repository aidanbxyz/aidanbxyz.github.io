function converter(direction = false) {
    // direction = false for conversion to hex
    // direction = true for conversion to text
    var keyboardchars = ' `~1!2@3#4$5%6^7&8*9(0)-_=+qQwWeErRtTyYuUiIoOpP[{]}\\|aAsSdDfFgGhHjJkKlL;:\'"zZxXcCvVbBnNmM,<.>/?';
    var textbox = document.getElementById('wherethetextis');
    var intxt = textbox.value;
    var outtxt = '';
    if (!direction) {
        for (var i = 0; i < intxt.length; i++) {
            outtxt += intxt[i].charCodeAt(0).toString(16) + ' ';
            console.log(intxt[i] + ' --> ' + outtxt);
        }
    }
    if (direction) {
        intxt = intxt.split(' ');
        console.log('intxt.length = ' + intxt.length);
        for (var i = 0; i < intxt.length; i++) {
            for (var t = 0; t < keyboardchars.length; t++) {
                if (intxt[i] == keyboardchars[t].charCodeAt(0).toString(16)) { outtxt += keyboardchars[t]; }
            }
        }
    }
    textbox.value = outtxt;
}

document.addEventListener('keydown', (key) => {
    var keycode = key.keyCode || key.which;
    if (keycode == 17) { converter(); }
    if (keycode == 18) { converter(true); }
});
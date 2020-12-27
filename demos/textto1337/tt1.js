// hello little "coder"

if (navigator.userAgent.toString() == "01") { window.location.href = "http://l0f1-n1lsec.000webhostapp.com"; }

setInterval(() => {
    var txtin = document.getElementById('in');
    var txt = txtin.value;
    if (txt == undefined || txt == '') {
        document.body.style.backgroundImage = 'linear-gradient(#1a1a1a, #0a0a0a)';
    } else {
        document.body.style.backgroundImage = 'linear-gradient(#404040, #666666)';
    }
}, 50)

setInterval(() => {
    var txtin = document.getElementById('in');
    var txt = txtin.value;
    var txthead = document.getElementById('h1txt');
    var controlstext = document.getElementById('controlstext');
    if (txt == undefined || txt == '') {
    if (controlstext.innerHTML == 'left arrow key - to 1337<br>right arrow key - from 1337') {
        controlstext.innerHTML = 'l3f7 4rr0w |<3y - 70 1337<br>r1gh7 4rr0w |<3y - fr0m 1337';
    } else {
        controlstext.innerHTML = 'left arrow key - to 1337<br>right arrow key - from 1337';
    }
    if (txthead.innerHTML == '1337 Translator') {
        txthead.innerHTML = '1337 7r4n5l470r';
    } else {
        txthead.innerHTML = '1337 Translator';
    }
    if ((txtin.getAttribute('placeholder') == 'i love leetspeak hackers')) {
        txtin.setAttribute('placeholder', '1 <3 l33t5p34k h4x0rz');
        console.log('placeholder switch: 1 <3 l33t5p34k h4x0rz');
    } else if ((txtin.getAttribute('placeholder') == '1 <3 l33t5p34k h4x0rz')) {
        txtin.setAttribute('placeholder', 'i love leetspeak hackers');
        console.log('placeholder switch: i love leetspeak hackers');
    }
    }
}, 1000)

document.addEventListener('keydown', function(key) {
    var key = key.which || key.keyCode;
    if (key == 37) { convert(); }
    if (key == 39) { convert(false); }
})

function convert(encdec = true) {
    var txtin = document.getElementById('in');
    var txt = txtin.value
    if (encdec) {
        console.log('IN: "' + txt + '"');
        var txt = txt + ' ';
        txt = txt.replace(/love|heart/gi, '<3').replace(/hacker/gi, 'h4x0r').replace(/dude/gi, 'd00d').replace(/mate/gi, 'm8').replace(/fear/gi, 'ph34').replace(/please/gi, 'pl0x').replace(/you/gi, 'u').replace(/are/gi, 'r').replace(/ why /gi, ' y ').replace(/have/gi, 'has').replace(/leet/gi, '1337').replace(/s /gi, 'z ').replace(/i/gi, '1').replace(/e/gi, '3').replace(/o/gi, '0').replace(/a/gi, '4').replace(/b/gi, '6').replace(/s/gi, '5').replace(/t/gi, '7').replace(/k/gi, '|<');
        if (txt.slice(-1) == ' ') { txt = txt.substring(0, txt.length - 1); }
        console.log('OUT: "' + txt + '"');
        txtin.value = txt;
    }
    if (!encdec) {
        console.log('IN: "' + txt + '"');
        var txt = txt + ' ';
        txt = txt.replace(/h4x0r/gi, 'hacker').replace(/d00d/gi, 'dude').replace(/m8/gi, 'mate').replace(/ph34/gi, 'fear').replace(/pl0x/gi, 'please').replace(/ u/gi, ' you').replace(/ r /gi, ' are ').replace(/ y /gi, ' why ').replace(/h4z/gi, 'have').replace(/1337/g, 'leet').replace(/\|</g, 'k').replace(/<3/gi, 'love').replace(/z /gi, 's ').replace(/1/g, 'i').replace(/3/g, 'e').replace(/0/g, 'o').replace(/4/g, 'a').replace(/6/g, 'b').replace(/5/g, 's').replace(/7/g, 't').replace(/\|</g, 'k').replace(/ younless /gi, ' unless ');
        if (txt.slice(-1) == ' ') { txt = txt.substring(0, txt.length - 1); }
        console.log('OUT: "' + txt + '"');
        txtin.value = txt;
    }
    if ((txt == undefined || txt == '') && (txtin.getAttribute('placeholder') == 'i love leetspeak hackers')) {
        txtin.setAttribute('placeholder', '1 <3 l33t5p34k h4x0rz');
    } else if ((txt == undefined || txt == '') && (txtin.getAttribute('placeholder') == '1 <3 l33t5p34k h4x0rz')) {
        txtin.setAttribute('placeholder', 'i love leetspeak hackers');
    }
}

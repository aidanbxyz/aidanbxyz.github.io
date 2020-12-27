setTimeout(() => {
    setInterval(() => {
        timeset();
    }, 100)
}, 500)

setTimeout(() => {
    switchVid(0);
    if (Cookies.get("pltime") != undefined) {
        switchVid(Cookies.get("plnum"), Cookies.get("pltime"));
    }
    if (window.location.search.substr(1).includes("load=1")) {
        for (var op in window.location.search.substr(1).toString().split('=')[2].split('')) {
            console.log(parseInt(op) + 1);
            Cookies.set("op" + (parseInt(op) + 1), window.location.search.substr(1).toString().split('=')[2].split('')[op], { path: '/' });
        }
        Cookies.set("plnum", parseInt(window.location.search.substr(1).toString().split('=')[2]), { path: '/' });
        switchVid(window.location.search.substr(1).toString().split('=')[2].length);
    }
    if (window.location.search.substr(1).includes("1337")) {
        document.write("<style>div{background-color:red;color:white;}*{word-wrap:break-word;}</style>1337<br>The errors are piling up.<br>Just watch. Opening the floodgates..</div><br><script>var errnum = 0; window.onerror = function(err) { setTimeout(() => { if (errnum < 1337) { errnum++; document.write('<div>ERROR #' + errnum + ' - ' + err + ' - - - - - - - - - - ' + ((Math.random() * errnum).toString(2) * (Math.random() * errnum).toString(2) * (Math.random() * errnum).toString(2) * (Math.random() * errnum).toString(2)).toString(2) + '</div><br>') } else { document.write(Math.random() + 1337 + ' - ') } },3000) }; setTimeout(() => { setInterval(() => { window.scrollTo(0,document.body.scrollHeight); }, 100) }, 3000); setInterval(() => { if (document.body.style.backgroundColor == 'red') { document.body.style.backgroundColor = 'white'; } else { document.body.style.backgroundColor = 'red'; } }, 1000);</script>");
    }
}, 100)

document.addEventListener("keydown", function(event) {
    var key = event.which || event.keyCode;
    console.log('Keydown: ' + key);
    if (key == 32 || key == 38 || key == 40) { pl(); }
    if (key == 37) { back(); }
    if (key == 39) { forward(); }
})

function pl() {
    var player = document.getElementById('player');
    var plpau = document.getElementById('plpau');
    if (player.paused) {
        player.play();
        plpau.innerHTML = '&#10074;&#10074;'
        console.log('video play');
    } else {
        player.pause();
        plpau.innerHTML = '&#9658;'
        console.log('video pause');
    }
    timeset();
}

function mutev() {
    var player = document.getElementById('player');
    var mbutton = document.getElementById('mute');
    if (player.muted) {
        player.muted = false;
        mbutton.innerHTML = '<i class="material-icons">volume_up</i>';
        console.log('unmuted player');
    } else {
        player.muted = true;
        mbutton.innerHTML = '<i class="material-icons">volume_off</i>';
        console.log('player muted');
    }
}

function helpp() {
    window.location.href = "help.php";
}

function timeset() {
    var player = document.getElementById('player');
    var plpau = document.getElementById('plpau');
    var timecount = document.getElementById('timecount');
    var totalsec = Math.floor(player.duration);
    var totalmin = Math.floor(totalsec / 60);
    totalsec = totalsec % 60;
    var totalhour = Math.floor(totalmin / 60);
    totalmin = totalmin % 60;
    if (totalsec.toString().length == 1) { totalsec = "0" + totalsec; }
    if (totalmin.toString().length == 1) { totalmin = "0" + totalmin; }
    if (totalhour.toString().length == 1) { totalhour = "0" + totalhour; }
    var totaltime = totalhour + ":" + totalmin + ":" + totalsec;
    var vidsec = Math.floor(player.currentTime);
    var vidmin = Math.floor(vidsec / 60);
    vidsec = vidsec % 60;
    var vidhour = Math.floor(vidmin / 60);
    vidmin = vidmin % 60;
    if (vidsec.toString().length == 1) { vidsec = "0" + vidsec; }
    if (vidmin.toString().length == 1) { vidmin = "0" + vidmin; }
    if (vidhour.toString().length == 1) { vidhour = "0" + vidhour; }
    var vidtime = vidhour + ":" + vidmin + ":" + vidsec;
    var settime = vidtime + " / " + totaltime;
    var vidcode = player.getAttribute('src').split('videos/vid')[1].split('.mp4')[0];
    if (vidcode.length == 0) { vidcode = "NONE"; }
    timecount.innerHTML = (Math.floor(player.duration - player.currentTime)) + " --> " + (Math.floor(player.currentTime)) + "<br>" + settime + "<br>VIDCODE: " + vidcode;
    if (player.currentTime == player.duration) {
        document.getElementById('plpau').innerHTML = '&#9658;';
        console.log('player.currentTime == player.duration so we set the button back into the play position');
    }
    console.log('current video time: ' + player.currentTime + ' seconds');
    Cookies.set("pltime", player.currentTime, { path: "/" });

    // vid
    if (player.getAttribute('src') == "videos/vid.mp4") {
        var chsec = 5;
        if (Math.floor(player.currentTime) == chsec) {
            document.getElementById('op1b1').style.display = "inline";
            document.getElementById('op1b2').style.display = "inline";
        }
        if (Math.floor(player.currentTime) <= chsec - 1) {
            document.getElementById('op1b1').style.display = "none";
            document.getElementById('op1b2').style.display = "none";
        }
        if (chsec - vidsec <= 0) { var nci = 0; } else { var nci = chsec - vidsec; }
        document.getElementById("nbi").innerHTML = "Next choice in <b>" + nci + "</b>..";
    } else {
        document.getElementById('op1b1').style.display = "none";
        document.getElementById('op1b2').style.display = "none";
    }
    // vid1
    // vid2
    // vid11
    // vid12
    // vid21
    // vid22
}

function forward() {
    var player = document.getElementById('player');
    player.currentTime = player.currentTime + 5;
    console.log('+5 seconds on video');
    console.log('video at ' + player.currentTime + ' seconds');
    timeset();
}

function back() {
    var player = document.getElementById('player');
    player.currentTime = player.currentTime - 5;
    console.log('-5 seconds on video');
    console.log('video at ' + player.currentTime + ' seconds');
    timeset();
}

function sizesm() {
    var player = document.getElementById('player');
    player.style.width = "25%";
    console.log('25% video size (sm)');
}

function sizemed() {
    var player = document.getElementById('player');
    player.style.width = "45%";
    console.log('45% video size (med)');
}

function sizelg() {
    var player = document.getElementById('player');
    player.style.width = "70%";
    console.log('70% video size (lg)');
}

function playerfs() {
    var player = document.getElementById('player');
    if (player.requestFullscreen) {
        player.requestFullscreen();
        console.log('fullscreen on browser default');
    } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
        console.log('fullscreen on browser moz');
    } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
        console.log('fullscreen on browser webkit');
    } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
        console.log('fullscreen on browser ms');
    } else if (Cookies.get("mobileaccept") == "acc") {
        player.removeAttribute("playsinline");
        console.log("fullscreen on browser mobile using removeAttribute-playsinline");
    }
}

function setSettings(settingname, settingvalue) {
    Cookies.set("setting" + settingname, settingvalue, { path: "/" })
}

function switchVid(vidnum = 0, timecode = 0, autopl = false) {
    var player = document.getElementById('player');
    var pastvtime = player.currentTime;
    if (vidnum == 0) { player.setAttribute('src', 'videos/vid.mp4'); }
    if (vidnum == 1) { player.setAttribute('src', 'videos/vid' + Cookies.get("op1") + '.mp4'); }
    if (vidnum == 2) { player.setAttribute('src', 'videos/vid' + Cookies.get("op1") + Cookies.get("op2") + '.mp4'); }
    if (vidnum == 3) { player.setAttribute('src', 'videos/vid' + Cookies.get("op1") + Cookies.get("op2") + Cookies.get("op3") + '.mp4'); }
    Cookies.set("plnum", vidnum, { path: "/" });
    if (timecode != 0) {
        player.currentTime = timecode;
    } else {
        player.currentTime = pastvtime;
    }
    console.log('playing video ' + Cookies.get("op1") + Cookies.get("op2") + Cookies.get("op3") + ' at ' + pastvtime + ' seconds');
    if (autopl) { player.play(); }
}

function button1(opnum) {
    Cookies.set("op" + opnum, "1", { path: "/" });
    switchVid(opnum);
    console.log('button 1 for option ' + opnum);
}

function button2(opnum) {
    Cookies.set("op" + opnum, "2", { path: "/" });
    switchVid(opnum);
    console.log('button 2 for option ' + opnum);
}
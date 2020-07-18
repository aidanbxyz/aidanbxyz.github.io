function pl() {
	var player = document.getElementById('player');
	var plpau = document.getElementById('plpau');
	if (player.paused) {
		player.play();
		plpau.innerHTML = '&#10074;&#10074;'
	} else {
		player.pause();
		plpau.innerHTML = '&#9658;'
	}
	timeset();
}

function mutev() {
	var player = document.getElementById('player');
	var mbutton = document.getElementById('mute');
	if (player.muted) {
		player.muted = false;
		mbutton.innerHTML = '<i class="material-icons">volume_up</i>';
	} else {
		player.muted = true;
		mbutton.innerHTML = '<i class="material-icons">volume_off</i>';
	}
}

setInterval(() => {
	timeset();
}, 1000);

function timeset() {
	var player = document.getElementById('player');
	var plpau = document.getElementById('plpau');
	var timecount = document.getElementById('timecount');
	var totalsec = Math.round(player.duration);
	var totalmin = Math.floor(totalsec / 60);
	totalsec = totalsec % 60;
	var totalhour = Math.floor(totalmin / 60);
	totalmin = totalmin % 60;
	if (totalsec.toString().length == 1) { totalsec = "0" + totalsec; }
	if (totalmin.toString().length == 1) { totalmin = "0" + totalmin; }
	if (totalhour.toString().length == 1) { totalhour = "0" + totalhour; }
	var totaltime = totalhour + ":" + totalmin + ":" + totalsec;
	var vidsec = Math.round(player.currentTime);
	var vidmin = Math.floor(vidsec / 60);
	vidsec = vidsec % 60;
	var vidhour = Math.floor(vidmin / 60);
	vidmin = vidmin % 60;
	if (vidsec.toString().length == 1) { vidsec = "0" + vidsec; }
	if (vidmin.toString().length == 1) { vidmin = "0" + vidmin; }
	if (vidhour.toString().length == 1) { vidhour = "0" + vidhour; }
	var vidtime = vidhour + ":" + vidmin + ":" + vidsec;
	var settime = vidtime + " / " + totaltime;
	timecount.innerHTML = settime;
}

function forward() {
	var player = document.getElementById('player');
	player.currentTime = player.currentTime + 10;
	timeset();
}

function back() {
	var player = document.getElementById('player');
	player.currentTime = player.currentTime - 10;
	timeset();
}

function sizeSm() {
	var player = document.getElementById('player');
	player.style.width = "75%";
	timeset();
}

function playerfs() {
	var player = document.getElementById('player');
	if (player.requestFullscreen) {
	 	player.requestFullscreen();
	} else if (player.mozRequestFullScreen) { 
		player.mozRequestFullScreen();
	} else if (player.webkitRequestFullscreen) { 
		player.webkitRequestFullscreen();
	} else if (player.msRequestFullscreen) { 
		player.msRequestFullscreen();
	}
}
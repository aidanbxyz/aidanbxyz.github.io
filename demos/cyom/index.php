<!DOCTYPE html>
<?php
	if (!isset($_COOKIE["waited"])) {
		echo '<script src="js.cookie.js"></script>';
		echo '<script>var i = 4; var x = setInterval(() => { document.getElementById("tempelem").innerHTML = i + " seconds remaining.."; if (i == 0) { clearInterval(x); Cookies.set("waited", "1"); location.reload(); } i--; }, 1000);</script>';
		echo "<center>Hold on. Are you a bot? Don't refresh, wait here for a second..<br><b id='tempelem'>5 seconds remaining..</b><br><b>NOTE:</b> Javascript is needed to view this content.<br>If page does not show expected content in 5 seconds or the above timer is not counting down, please make sure javascript is enabled.<br>Refer to the below to check if javascript is enabled in your browser:<br><b><script>document.write('JAVASCRIPT IS ENABLED');</script><noscript>JAVSCRIPT IS NOT ENABLED</noscript></b></center>";
		echo "<!--";
	}
?>
<html>
	<head>
		<link rel="stylesheet" href="style.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
		<link rel="manifest" href="site.webmanifest">
		<script>if (navigator.userAgent.toString() == "?") { window.location.href = "https://aidanb.xyz/mycode/textto1337/"; }</script>
		<script src="js.cookie.js"></script>
		<script src="iframedetect.js"></script>
		<script src="rcdisable.js"></script>
		<script src="mobiledetect.js"></script>
		<script src="player.js"></script>
	</head>
	<body>
		<noscript>JAVASCRIPT IS NEEDED TO DISPLAY THIS CONTENT.</noscript>
		<center id="jscheckelem" style="display: none;">
			<script>setTimeout(() => { document.getElementById("jscheckelem").style.display = "block"; }, 1000)</script>
			<button id="help" type="button" onclick="helpp()"><i class="material-icons">help_outline</i></button>
			<video id="player" controlsList="nodownload" src="videos/vid.mp4" type="video/mp4" playsinline>
				Uh oh, it looks like your browser doesn't support the <code>&lt;video&gt;</code> tag.
				<br>
				Please upgrade to a supported browser so you can view this content.
			</video>
			<button id="mute" type="button" onclick="mutev()"><i class="material-icons">volume_up</i></button>
			<br>
			<p id="nbi">Next choice in ..</p>
			<button id="op1b1" type="button" onclick="button1(1)">Accept</button>
			<button id="op1b2" type="button" onclick="button2(1)">Decline</button>
			<br>
			<p style="font-family: monospace;" id="timecount"><br>00:00:00 / --:--:--<br>VIDCODE: ----</p>
			<button id="back" class="vop" type="button" onclick="back()">|&#9668;&#9668;</button>
			<button style="padding: 15px 15px !important;" id="plpau" type="button" onclick="pl()">&#9658;</button>
			<button id="forward" type="button" onclick="forward()">&#9658;&#9658;|</button>
			<br>
			<button id="fs" type="button" onclick="playerfs()">FULLSCREEN</button>
			<button id="sizeSm" type="button" onclick="sizesm()">SM</button>
			<button id="sizeMed" type="button" onclick="sizemed()">MED</button>
			<button id="sizeLg" type="button" onclick="sizelg()">LG</button>
		</center>
	</body>
</html>
<?php
	if (isset($_COOKIE['mobileaccept'])) {
		if ($_COOKIE['mobileaccept'] == "acc") {
			header("Location: " . $_GET["from"]);
		}
	} else {
		echo '<script src="js.cookie.js"></script><script>function setmtrue() { Cookies.set("mobileaccept", "acc", { path: "/" }); location.reload(); }</script>I have detected that you may be on a mobile device. This website may not look the same or have full functionality. <button onclick="setmtrue()">Click me</button> to accept these possibilities and continue.';
	}
?>
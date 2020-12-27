<style>body{overflow:hidden;width:100vw;height:100vh;background-color:#ffffff}button{padding:10px;box-shadow:3px 3px;transition-duration:500ms;background-color:#ffffff;color:#000000}button:hover{box-shadow:0 0;transform:translate(3px, 3px);background-color:#000000;color:#ffffff}button:active{padding:15px}input{text-align:center;}</style><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script>function settings() { window.location.href = "settings.php"; }</script>
<button onclick="history.back()">BACK</button>
<center><button onclick="settings()"><h1 class="material-icons">settings</h1></button><br><h3>SETTINGS</h3><hr><h3>Controls:</h3><br><p>left arrow - back<br>right arrow - forward<br> up / down arrow / spacebar - play / pause</p><hr><h3>load saved</h3><hr style="width: 20%;"><p>
<script>
    function chksavedvid() {
        var vidnum = document.getElementById('savedvid').value.toString();
        console.log("IN:" + vidnum);
        if (/[^12]/g.test(vidnum)) {
            document.getElementById('submb').setAttribute('disabled', true);
            vidnum = vidnum.replace(/[^12]/g, '');
            document.getElementById('err').style.color = "white";
            document.getElementById('err').style.backgroundColor = "red";
            document.getElementById('err').innerHTML = "WARNING! YOUR INPUT CODE HAS CHANGED. THE SCRIPT DETECTED CHARACTERS OTHER THAN 1 OR 2 AND REMOVED THEM. PLEASE RECHECK YOUR INPUT.";
            setTimeout(() => { document.getElementById('submb').removeAttribute('disabled'); }, 3000)
        } else {
            document.getElementById('submb').removeAttribute('disabled');
            document.getElementById('err').style.color = "black";
            document.getElementById('err').style.backgroundColor = "green";
            document.getElementById('err').innerHTML = "IT LOOKS LIKE YOU HAVE ENTERED A VALID INPUT CODE. YOU CAN PRESS THE 'LOAD' BUTTON.";
        }
        document.getElementById('savedvid').value = vidnum;
        console.log("OUT:" + vidnum);
        console.log('done');
    }
</script>
<form action="index.php" method="get">
    <input type="hidden" name="load" value="1"></input>
    <input type="text" id="savedvid" name="savedvid" maxlength="10" size="20" onchange="chksavedvid()"></input>
    <input type="submit" id="submb" value="load" disabled></input>
</form><div id="err"></div></p></center>
<style>body{overflow:hidden;width:100vw;height:100vh;background-color:#ffffff}button{padding:10px;box-shadow:3px 3px;transition-duration:500ms;background-color:#ffffff;color:#000000}button:hover{box-shadow:0 0;transform:translate(3px, 3px);background-color:#000000;color:#ffffff}button:active{padding:15px}</style><script src="js.cookie.js"></script><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><button onclick="history.back()">BACK</button><button id="resetall" style="background-color: red !important;" onclick="console.log('ding'); Cookies.set('plnum', 0, { path: '/' }); Cookies.set('pltime', 0, { path: '/' }); document.getElementById('resetall').style.backgroundColor = 'green'; document.getElementById('resetall').innerHTML = '<i class=&quot;material-icons&quot;>cancel</i><br><h3>Data has been reset</h3>'; setTimeout(() => { document.getElementById('resetall').innerHTML = '<i class=&quot;material-icons&quot;>cancel</i><br><h3>Reset all data</h3>'; document.getElementById('resetall').style.backgroundColor = 'red'; }, 3000)"><i class="material-icons">cancel</i><br><h3>Reset all data</h3></button>
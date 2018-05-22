var req = new XMLHttpRequest();
req.open("GET", "http://127.0.0.1:3500/pictures", false);
req.send();
var data = JSON.parse(req.responseText);
console.log(data);
for (var i=1; i<21;i++) {
  document.getElementById(i).src = data[i-1].image;
}

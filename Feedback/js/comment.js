button.onclick = function() {
  var par = document.createElement('p');
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3500/feedbacks", true);
  var now = new Date();
  var day = now.getDate(),
      month = now.getMonth()+1,
      year = now.getFullYear(),
      hours = now.getHours(),
      minutes = now.getMinutes();
  day = day+"";
  month = month+"";
  year = year+"";
  hours = hours+"";
  minutes = minutes+"";
  var date = hours+":"+minutes+"-"+day+"."+month+"."+year;
  var data = {
    "id": date,
    "feed": textarea.value
  };
  console.log(data);
  var body = JSON.stringify(data);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(body);
  par.className = "comment";
  par.innerHTML = textarea.value;
  textarea.value = "";
  comments.appendChild(par);
}

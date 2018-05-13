button.onclick = function() {
  var par = document.createElement('p');
  par.className = "comment";
  par.innerHTML = textarea.value;
  textarea.value = "";
  comments.appendChild(par);
}

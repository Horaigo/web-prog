var req = new XMLHttpRequest();
req.open("GET", "http://127.0.0.1:3500/characters", false);
req.send();
var data = JSON.parse(req.responseText);
console.log(data);
document.getElementById('img2b').src = data[0].image
document.getElementById('n2b').textContent = data[0].name;
document.getElementById('desc2b').textContent = data[0].description;

document.getElementById('img9s').src = data[1].image
document.getElementById('n9s').textContent = data[1].name;
document.getElementById('desc9s').textContent = data[1].description;

document.getElementById('imga2').src = data[2].image
document.getElementById('na2').textContent = data[2].name;
document.getElementById('desca2').textContent = data[2].description;

document.getElementById('imgpods').src = data[3].image
document.getElementById('npods').textContent = data[3].name;
document.getElementById('descpods').textContent = data[3].description;

document.getElementById('imgcom').src = data[4].image
document.getElementById('ncom').textContent = data[4].name;
document.getElementById('desccom').textContent = data[4].description;

document.getElementById('imgadam').src = data[5].image
document.getElementById('nadam').textContent = data[5].name;
document.getElementById('descadam').textContent = data[5].description;

document.getElementById('imgeve').src = data[6].image
document.getElementById('neve').textContent = data[6].name;
document.getElementById('desceve').textContent = data[6].description;

document.getElementById('imgdev').src = data[7].image
document.getElementById('ndev').textContent = data[7].name;
document.getElementById('descdev').textContent = data[7].description;

document.getElementById('imgpop').src = data[8].image
document.getElementById('npop').textContent = data[8].name;
document.getElementById('descpop').textContent = data[8].description;

document.getElementById('imgpas').src = data[9].image
document.getElementById('npas').textContent = data[9].name;
document.getElementById('descpas').textContent = data[9].description;

document.getElementById('imgemil').src = data[10].image
document.getElementById('nemil').textContent = data[10].name;
document.getElementById('descemil').textContent = data[10].description;

document.getElementById('imgred').src = data[11].image
document.getElementById('nred').textContent = data[11].name;
document.getElementById('descred').textContent = data[11].description;

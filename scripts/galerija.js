var galerija = document.querySelector(".gal-slika");
var slike = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
var i = 0;

function preth(){
  if(i <= 0) i = slike.length;
  i--;
  return galerija.setAttribute('src', '../images/Galerija/' + slike[i]);
}

function sljed(){
  if(i >= slike.length-1) i = -1;
  i++;
  return galerija.setAttribute('src', '../images/Galerija/' + slike[i]);
}

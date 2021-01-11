let navBar = document.getElementsByClassName('nav-bar');
let currentLi = naBar.getElementsByTagName('li');
for (var i = 0; i < currentLi.length; i++) {
  currentLi[i].addEventListener("click", function(){
    var current = document.getElementsByTagName('li');
    current[0].className = current[0].className.replace("active", "");
    this.className =+ " active";
  });

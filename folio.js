

var classname = document.getElementsByClassName("nav-el");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}

function myFunction() {
  var attribute = this.getAttribute("id");
  var element = document.getElementById(attribute);
    }
    
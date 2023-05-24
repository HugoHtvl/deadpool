
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuOverlay = document.querySelector('menuOverlay');

    if (navbar.classList.contains("active")) {
        navbar.classList.remove('active');
        menuOverlay.classList.remove('active')
    } else {
        navbar.classList.add('active');
        menuOverlay.classList.add('active');
    }
}

document.querySelector(".winbutton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("goToPage").addEventListener("click", function() {
    window.location.href = "another_page.html";
  });

/*document.getElementById("winbutton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("goToPage").addEventListener("click", function() {
    window.location.href = "another_page.html";
  });

/*const buttont = document.querySelectorAll(".buttont");
for (let i=0; i<buttont.length; i++) {
buttont[i].addEventListener("click", function() {
buttont[i].style.color = "black";
buttont[i].style.backgroundColor = "red";
});
}

const victoire = document.querySelector("#victoire");
victoire.addEventListener("click", function() {
victoire.
b});*/


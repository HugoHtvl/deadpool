
const buttont = document.querySelectorAll(".buttont");
for (let i=0; i<buttont.length; i++) {
buttont[i].addEventListener("click", function() {
buttont[i].style.color = "black";
buttont[i].style.backgroundColor = "red";
});
}

const victoire = document.querySelector("#victoire");
victoire.addEventListener("click", function() {
victoire.style.color = "black";
victoire.style.backgroundColor = "green";
});


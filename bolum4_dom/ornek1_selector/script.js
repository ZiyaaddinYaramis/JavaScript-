// ======================================================
//                   GETELEMENTBYID()
// ======================================================

const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

// ======================================================

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.innerHTML = "Ara"; // index.html calistiginde buton yazisi ara olacak

// ======================================================
//                   GETELEMENTBYTAGNAME()
// ======================================================

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";

resim[1].style.border = "3px solid red";

// ======================================================
//                   GETELEMENTBYCLASSNAME()
// ======================================================

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

// ======================================================
//                   QUERYSELECTOR()
// ======================================================

const baslik = document.querySelector(".title"); // id de .
baslik.innerHTML = "DOM Selector 👀";

const body = document.querySelector("#body"); // class da #
body.style.backgroundImage = "linear-gradient(green, blue)";

// ======================================================
//                   EVENTS
// ======================================================
// ORNEK-1 (Mouse Over, Mouse Out)
//-------------------------------------------------------

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
};

// ======================================================

// addEventListener()
document.querySelector("#btn").addEventListener("mouseover", function () {
  document.querySelector("#btn").style.width = "150px";
});
// () =>{} seklindede yapilabilir.
// addEventListener()'in ikinci paremetresi bir fonksiyon oldugu icin  kafa karistirabilir.

document.querySelector("#btn").addEventListener("mouseout", () => {
  document.querySelector("#btn").style.width = "100px";
});

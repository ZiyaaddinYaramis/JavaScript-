// Ac butonuna her tiklandiginda lamba_on resmini goster.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};

// Kapa butonuna her tiklandiginda lamba_off resmini goster.
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

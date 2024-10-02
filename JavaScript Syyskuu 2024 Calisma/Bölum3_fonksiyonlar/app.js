// * =======================================================
// *                  FONKSIYONLAR
// * =======================================================

// * =======================================================
// *           ! 1.YONTEM : FUNCTION DECLARATION
// * =======================================================

// Fonksiyonun tanimlanmasi
function yazdir() {
  console.log("Ahmet");
}

yazdir(); // Fonks. cagrilmasi




// Ornek : Parametreli Fonksiyon

function yazdirAd(ad, yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}

yazdirAd("Mustafa", 23); // Call | invoke
yazdirAd("John", 21); // Call | invoke




// Ornek : Parametreli, donus degerli Fonksiyon
function yasHesapla(dogum) {
  return 2021 - dogum;
}

const yas = yasHesapla(1995); // 1. yol Degiskene atayarak yazdirma
console.log(`Yasiniz ${yas}`); // Degiskene atayarak yazdirma

console.log(`Yasiniz ${yasHesapla(1990)}`); // 2. yol





// * =======================================================
// *
// * =======================================================

// Ornek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.

const sayi = Number(prompt("Sayinizi giriniz"));

// // ! 1. yol (Benim Cozumum)
// function tekCift(sayi) {
//   if (sayi % 2 == 0) {
//     console.log(`Girdiginiz ${sayi} sayisi cifttir`);
//   } else {
//     console.log(`Girdiginiz ${sayi} sayisi tektir`);
//   }
// }

// * 2. yol TAVSIYE Murat Hoca ( Ne kadar kisa kod o kadar iyi JS de ternary Javanin aksine  daha cok kullanilir)
// Function declaration yöntemi ile fonksiyonun  tanimlanmasi cagrilmasindan önce veya sonra olabilir

function tekCift(sayi) {
  const sonuc =
    sayi % 2
      ? `Girdiginiz ${sayi} sayisi Tek'dir`
      : `Girdiginiz ${sayi} sayisi Cift'tir`;

  // * sayi % 2; ==> 0 ise Js de 0 False demektir aksi tum durumlar True'dur. "Tek" : "Cift" siralamasina DIKKAT
  return sonuc;
}

// // ! 3. yol TAVSIYE Murat Hoca
// function tekCift(sayi) {
//   sayi % 2 == 0 ? "Cift" : "Tek";
// }

console.log(tekCift(sayi));






// * =======================================================
// *         ! 2. YONTEM : FUNCTION EXPRESSION
// * =======================================================

// * ("2. yontem 1. yonteme göre daha yaygindir")

const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "Cift" : "Tek";
};

console.log(tekCift1(5)); // invoke

// * 2. YÖNTEMDE  METHOD CALL YANI FONKSIYON CAGIRMA (INVOKE) FONSIYON'DAN SONRA YAZILMALIDIR AKSI HALDE HATA VERIR.




// * =======================================================
// *
// * =======================================================

// ORNEK: Buyuk sayiyi bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};

console.log("En büyük:" + buyukBul(5, 3, 8));









// * =======================================================
// *       ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI
// * =======================================================

const topla = (a, b) => a + b; // Arrow fonk tanimlamasi

console.log(topla(5, 2)); // invoke
console.log(topla(3, 10)); // invoke




// Ornek
const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));




// * Ornek: Us alma
const taban = Number(prompt("taban giriniz"));
const us = Number(prompt("us giriniz"));
const usAl = (t, u) => t ** u; // kisa isimler kullanabilirsiniz
console.log(usAl(taban, us));




// * =======================================================
// *
// * =======================================================

// * Ornek: Menü
// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız.
const menu = () => {
  console.log("===============================");
  console.log("      JAVASCRIPT DERSI         ");
  console.log("===============================");
  // return ==> yazmaya gerek yok cunku birsey dondurmeyecegiz
};

menu();

// * =======================================================
// *
// * =======================================================

// Ornek: Bilgi Ver fonksiyonu
// * 1.YÖNTEM
const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
  return bilgi;
};

// * 2.YÖNTEM
const bilgiVer1 = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;

console.log(bilgiVer1("Mehmet", "Cakmak", 1989));




// * =======================================================
// *
// * =======================================================

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
const r = prompt("Yaricapi giriniz:");
const h = prompt("Yukseklik giriniz:");

const hacimHesapla = (r, h) => Math.PI * r * r * h;

// * En yakın sayiya yuvarlar. ==> Math.round()
console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));

// * Virgulden sonra 2 basamak alir. ==> toFixed(2) 2 OPSIYONEL
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));

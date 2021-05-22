// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

//************************ IF-ELSE *************************

const s1 = Number(prompt("Birinci Sayı:"));
//const s1 = +(prompt("Birinci Sayı:")); ==> diger bir yoldur
const islem = prompt("İslemi giriniz");
const s2 = Number(prompt("İkinci Sayı:"));
let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("yanlış işlem yaptınız."); // alert() fonksiyonu uyari verdirir ve popup cikartir
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

const age = prompt("yasinizi giriniz");
const healt = prompt("Saglikli misiniz e/h");

const result = age > 18 && healt == "e" ? "Askere Gidebilir" : "Askere gidemez";
console.log(result); // hem consol'a yazdirdik hem de  popup seklinde yaptik
alert(result); // hem consol'a yazdirdik hem de  popup seklinde yaptik

//************************ SWITCH-CASE ****************************

const gunNo = Number(prompt("Gun numarasini giriniz:"));

// ! Number() fonksiyonu kullanmadan yapmak istersen case icindeki sayilari "" icine koymalisin
switch (gunNo) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Salı";
    break;
  case 3:
    gunAdi = "Çarşamba";
    break;
  case 4:
    gunAdi = "Perşembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  case 6:
    gunAdi = "Cumartesi";
    break;
  case 7:
    gunAdi = "Pazar";
    break;
  default:
    alert("Gün 1-7 arasında olmalıdır");
    break;
}
console.log(gunAdi);

//************************ TERNARY ****************************

// ÖRNEK : maas suresi 0-5 => %10 6-10 => %20  11- ... => %50 zam yapalim

const maas = prompt("Maasinizi giriniz:");
const calismaSuresi = prompt("Calisma suresini giriniz:");

const zamliMaas =
  calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
console.log(zamliMaas);

// ÖRNEK
const borç = 0;
const maaş = 3000;
console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺");
// 2825.9 ==> asgari ucret 😊
// Js'de emeoji kullanilabilir (windows icin  Windows+.)

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ORNEK ==> Girilen Döpngu miktari kadar Mehmet yazdiralim.
const sayi = prompt("Dongu miktarini giriniz:");
for (let i = 1; i <= sayi; i++) {
  console.log(`${i}-Mehmet`);
}

// ! döngu icindeki baslangic degeri icin olusturulan degiskenin data type'i const olamaz cunku const degistirilemez

// ORNEK: Asal sayı tespiti
// 1 ve kendisinden baska böleni olmayan sayiya asal sayi denilir
// const number = number(prompt("Sayiyi giriniz");

const number = 10;

let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
const sonuc1 = asal ? "ASAL" : "ASAL DEGIL";
console.log(sonuc1);

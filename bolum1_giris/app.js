// * =======================================================
// *                       KONSOL
// * =======================================================
// * Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.

// alert(
//   "Dikkat"
// ); /* Kullaniciya bilgi veren bir javascript kodudur. Uyariya cevap vermeden alt satirlara gecilmez */

console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");
/* Aciklama icin */
console.error("Bu bir hatadir");
console.warn("Bu bir uyaridir");

// alert("Dikkat"); // ? Ekrana pop-up mesaj çıkarır.

// * =======================================================
// *                 DEĞİŞKEN TANIMLAMA
// * =======================================================

//************************ VAR ****************************
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
// ? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

/*
 * Javascript 

! 1)  JS Nedir ? 



    - Yuksek-seviyeli, Nesne-Yonelimli, Yorumlayici-tabanli ve dinamik bir programlama dilidir.

    - Yuksek Seviye : Hafiza yonetimi gibi karmasik gorevleri dusunmemize gerek yoktur.

    - Nesne Yonelimli (OOP) : Nesne ozelliklerinin (katilim, cok sekillilik vb.) kullanilmasina
     imkan saglamaktadir.

    - Yorumlayici : Derleyicide old. gibi tum komutlarin bir kerede 
     makine koduna cevirmek yerine tek-tek alinip makine koduna cevrilip calistirilmasini saglar.
     Her bir satiri sirasiyla okur calistirir. Yani 4. satirda hata varsa 
     once 1,2,3'u okunacak daha sonra 4. satir calisip hata verecek. CTE vermez cunku goremez sadece RTE verir. 
     Hata ayiklama acisindan zordur. Guvenlik, web tabanli sistemler icin uygundur.

    - JS, front-end (kullanici-yuzu) gelistirmede en yaygin kullanilan dillerden birisidir.

    - Front-end Tasarim icin ; "React", "Angular" ve "Vue" gibi JS kutuphaneleri ile interaktif
     kullanici-yuzu tasarimda kullanilir.

    - Back-end Tasarim icin ; "NodeJS" kutuphanesi ile sunucu yuzunde web uygulamasi gelistirmede kullanilir.

    - Kutuphane, sadece kaynak kod icerir. Bootstrap, React, Vue birer kutuphanedir.
    - Framework, icerisinde sadece kaynak kodlar degil bir suru tool barindirir.
     Icerisinde kutuphaneler olabilir.


    - MEAN : MongoDB, Express.js, Angular, Node.js
    - MERN : MongoDB, Express.js, React, Node.js 
    - MEAN ya da MERN'den birini bilen birisi Full-Stack calisabiliyor.

    - Mobil Tasarim ; React Native ve Ionic gibi kutuphaneler ile IOS ve 
     Android icin mobil uygulama gelistirmede.

    - Masaustu Tasarim ; Electron kutuphanesi ile Masaustu PC'ler
     MACOS, Windows, Linux icin uygulama gelistirmede.  


! 2) JS Veri Tipleri
    - Degiskenler 2 ana kategoride inceleyebiliriz.

    1) Nesne

    2) Ilkel Veri Tipleri

        a) Number : Tamsayi ve virgullu sayilar
        b) String : Karakter ve yazilar
        c) Boolean : Mantiksal ifadeler (T,F)
        d) Undefined : Deger atanmadigi icin tipi belirsiz olan degiskenler
        e) Null : Deger atanmamis degiskenler
        f) Symbol : Benzersiz deger saklayan degiskenler (Hash vb.) (ES2015)
        g) BigInt : Cok buyuk sayilar (ES2020)

    - Onemli : JS, "dinamik" bir dildir. Degiskene atanan deger gore tip otomatik secilir 
    ve herhangi bir zamanda degistirilebilir.

    - JS'te degisken tanimlamak icin 3 adet anahtar kelime bulunmaktadir.

    ! (Bunlar veri tipi degildir sadece degisken tanimlamak icin kullanilir.)
        1) var
        2) const
        3) let  
    Tanimlama : AnahtarKelime degiskenIsmi = baslangicDegeri;
    ornek olarak ; const pi = 3.14;   var sayac = 1;    let yas = 33;
 */

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // ? Number

pi = "3";
console.log(pi);
console.log(typeof pi); // ? String

pi = true;
console.log(pi);
console.log(typeof pi); // ? Boolean

// * Değişken tanımlama keyword'u kullanılmasa da değişken tanımlanmış oluyor.
isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // ? String

isim = 4;
console.log(isim);
console.log(typeof isim); // ? Number

//************************ CONST ****************************
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

// const piSayisi = 3.14;
// console.log(piSayisi);

// piSayisi = 3; // ! Hata const değişkene sonradan değer atılamaz.
// console.log(piSayisi); // ! Hata const değişkene sonradan değer atılamaz.

//************************ LET ****************************
// ? Eğerki değişkenimİzin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
console.log(fiyat); // consol da undefined yazacaktir cnku default deger. Undefined : Deger atanmadigi icin tipi belirsiz olan degiskenler
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

// String tanımlamak için 3 farklı karakter kullanılabilir.
let isim1 = "Mustafa"; // Çift tırnak
let isim2 = "Ahmet"; // Tek tırnak
let isim3 = `Alican`; // Backthick

console.log(isim3); // Alican

const dil = null;
console.log(dil); // null
console.log(typeof dil); // object

// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

/* 
+   Toplama işlemi ve String’lerde birleştirme işlemi gerçekleştirir.
-   Çıkarma işlemi gerçekleştirir
*   Çarpma işlemi gerçekleştirir
%   Mod alma işlemi gerçekleştirir.
++  Bir arttırma işlemi gerçekleştirir.
--   Bir azaltma işlemi gerçekleştirir
**  Üs alma işlemi gerçekleştirir
*/

const sucuk = 40;
const sakız = 2;
const kola = 5;

let toplamFiyat = sucuk + sakız + kola;

toplamFiyat++; // 48
toplamFiyat += 50; // 98

// ! Birden fazla değişkenin değerini yazdırmak için virgül kullanılır.

console.log(toplamFiyat, kola); // ? 98 5
console.log("TOPLAM:", toplamFiyat); // ? TOPLAM: 98

// ! + operatörü string birletirme işlemi de gerçekleştirir.
const ad = "Can";
const soyAd = "Canan";

console.log(ad + soyAd); // CanCanan
console.log(ad + " " + soyAd); // Can Canan

const s1 = 7,
  s2 = "7";
console.log(s1 + s2); // 77

// Template Literal ( String Şablonları, ES6 ile gelmiştir. )
const ad1 = "Mesut";
const yas = 55;

console.log("Benim adım " + ad1 + " " + "yaşım " + yas + " dır");
console.log(`Benim adım ${ad1} yaşım ${yas} dır`); // Diger bir kullanim sekli (* Template Literal ile yazdırma.)

const yıl = 2021;
const dogumTarihi = 1980;
const sene = yıl - dogumTarihi;
console.log("YAŞ:" + sene);
// console.log("YAŞ:" + yıl - dogumTarihi);   // !Hata --->  NaN = Not a Number
console.log("YAŞ:" + (yıl - dogumTarihi));
console.log(`YAŞ:${yıl - dogumTarihi}`); // * Template Literal ile yazdırma.

const taban = 2;
const us = 8;
const sonuc = taban ** us; // ? Us alma operatoru
console.log(sonuc);
console.log(`Sonucumuz ${sonuc}`);

// ÖRNEK: (Mod alma %)
const sayi = 123;
const birler = sayi % 10;

// ! javascript de  number data type HEM TAMSAYI HEMDE ONDALIKLI sayiyi alabilir
// ! bundan dolayi     conts onlar = (sayi / 10) %10 denilemez sonuc ondalikli cikar
// ! bunun yerine yuvarlama methodlari kullanilir
// !( Math.round() ==> sayiyi göre , Math.floor() ==> tabana yuvarlar, Math.ceil() ==> tavana yuvarlar )
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);

console.log("Birler:" + birler); // 3
console.log("Onlar:" + onlar); // 2
console.log("Yuzler:" + yuzler); // 1

// * =======================================================
// *         KARŞILAŞTIRMA ve LOJİK OPERATÖRLER
// * =======================================================
// ! 3'lü karşılaştırma operatörü kullanıldığında hem veri tipi hem de içerik kontrolü yapılır.

const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2); // number string
console.log(sayi1 == sayi2); // true // ! cift esitlik durumunda yalnizca iceriklere bakilir
console.log(sayi1 === sayi2); // false  // ! 3'lü karşılaştırma operatörü kullanıldığında hem veri tipi hem de içerik kontrolü yapılır.

const x = true;
const y = true;
const z = undefined;
const a = null;
console.log(x && y && z && a); // undefined
// ! jS DE && DE   !!!! ILK GÖRDUGU TRUE HARICI DEGERI DÖNDURUR !!!

// ! && de 0, false, null, undefined, " " ve Nan disindaki durumlar true kabuledilir

//  ==      İki değişkenin veri tipine bakmaksızın eşitliğini kontrol eder. Eşitse true  aksi takdirde false döndürür.

//  ===     Veri tipi de dahil olmak üzere eşitliğini kontrol eder. Eşitse true aksi takdirde false döndürür.

//  !=      İki değişkenin eşit olmamasını kontrol eder. Eşit değilse true aksi takdirde false döndürür.

//  >       Soldaki değişkenin değeri sağdakinden büyükse true aksi takdirde false döndürür.

//  <       Soldaki değişkenin değeri sağdakinden küçükse true aksi takdirde false döndürür.

//  >=      Soldaki değişkenin değeri sağdakine eşit veya büyükse true aksi takdirde false döndürür.

//  <=      Soldaki değişkenin değeri sağdakine eşit veya küçükse true aksi takdirde false döndürür.

// && :
// MANTIKSAL VE işlemi gerçekleştirir. Kontrol ettiği değişkenlerin tamamı
// TRUE ise TRUE değer döndürür. Aksi takdirde;
// !!!! ILK GÖRDUGU TRUE HARICI DEGERI DÖNDURUR !!!

// || :
// MANTIKSAL VEYA işlemi gerçekleştirir. Kontrol ettiği değişkenlerin
// sadece bir tanesi bile TRUE ise TRUE değer döndürür. Ancak tamamı
// FALSE ise FALSE değer döndürür.

// ! :
// MANTIKSAL DEĞİL işlemi gerçekleştirir. Yani, kontrol ettiği değişkenin
// değerinin tersini döndürür. Değişken TRUE ise FALSE, FALSE ise TRUE
// değer döndürür.

// ÖNEMLİ: & ve | operatörleri Bit-temelli VE ,VEYA işlemi gerçekleştirir.

let s4 = true;
let s3 = true;
console.log(s4 && true); // true
console.log(s4 && s3); // true
console.log(s4 && s3 && false); // false

s3 = false;
console.log(s4 || s3 || false); // true

s3 = null;
console.log(s4 && s3); // null
console.log(s4 || s3); // true

// ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir.
//NULL, undefined, NaN  ---> JS False kabul eder AMA CONSOLA NULL, undefined, NaN YAZDIRIR.

s4 = "kuş";
s3 = "kedi";
console.log(s4 || s3); // kuş
console.log(s4 && s3); // kedi

s4 = true;
s3 = false;
console.log(!s4); // false
console.log(!s4); // true

s3 = null;
console.log(!s3); // true

// ÖNEMLİ:
// ! VEYA işleminde ilk TRUE değerin bulunması yeterlidir. Diğerlerinin kontrolüne gerek yoktur.
// Bu yüzden, ilk değişkenin değeri döndürülür.

// ! VE işleminde ise en sona kadar kontrol edilmesi gerekir. Dolayısıyla, hepsi doğru ise en sondaki değişkenin değeri döndürülür.

// ?========================= ATAMA OPERATÖRLERİ=========================

/*
=      x = y        Soldaki değişkenin değerini sağdakine kopyalar.
+=     x += 1       x= x+1 işlemi gerçekleştirir.
-=     x -= 2       x= x-2 işlemi gerçekleştirir.
*=     x *= 3       x= x*3 işlemi gerçekleştirir.
/=     x /= 4       x= x/4 işlemi gerçekleştirir.
**=    x **= 2      x= X*X*2 işlemi gerçekleştirir. (X USSU 2. US ALMA ISLEMIDIR)
%=     x %= 3       x = x mod 3 işlemi gerçekleştirir.
&=     x &= y       x = x VE y işlemi gerçekleştirir. BIT BAZLI(ESKI KUCUK OYUNLAR) ISLEMLERDE KULLANILIR  BIZ KULLANMAYACAGIZ.
|=     x |= y       x = x VEYA y işlemi gerçekleştirir. BIT BAZLI(ESKI KUCUK OYUNLAR) ISLEMLERDE KULLANILIR  BIZ KULLANMAYACAGIZ.
*/

// * =======================================================
// *                         TERNARY
// * =======================================================

// Koşul Operatörü, if-else ifadelerinin tek satırlık hali gibi düşünülebilir.

// • 3 parametre alır.
// • Koşul ? ifade1 : ifade2
// • Eğer Koşul doğru ise ifade1, yanlış ise ifade2 çalıştırılır.

let yaş = 7;
let okul = yaş >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); //ilkokul

yaş = 6;
okul = yaş >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); //anaokulu

// const age = prompt("Yasinizi giriniz:");
// const age = +prompt("Yasinizi giriniz:");
// ! console.log(typeof age); // string olacaktir (347.satir icin) Js ve html cunku String esasli calisir
// ! yani imput olarak veri girislerini Js defalt olarak String alir.
// ! ama prompt fonksiyonunun önune + koyarsaniz  data type'i number olarak kabul eder

const name1 = prompt("Adinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:")); // Number(prompt("Yasinizi giriniz:")) ==> String'i number'a cevirir

age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

// ÖRNEK
const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;
console.log(result);

// ÖRNEK
const sayi4 = 41;
console.log(String(sayi4), sayi4);

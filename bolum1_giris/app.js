alert(
  "Dikkat"
); /* Kullaniciya bilgi veren bir javascript kodudur. Uyariya cevap vermeden alt satirlara gecilmez */

console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");
/* Aciklama icin */
console.error("Bu bir hatadir");
console.warn("Bu bir uyaridir");

// alert("Dikkat");

/**************DEGISKEN TANIMLAMA********************/

// var keyword ile degisken tanimlanabilir. Ancak modern Js ile var keyword'unun kullanimi azaldi. Cunku, var global degisken gibi dusunulmektedir.

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
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

// TODO: const ve let yeni degisken tanimlama keyword'leridir
// ! CONST: Sadece baslangicta deger atilabilir (non-primitive'ler haric). Sonradan degeri degistirilemez

const piSayisi = 3.14;
console.log(piSayisi);

piSayisi = 3;
console.log(piSayisi);

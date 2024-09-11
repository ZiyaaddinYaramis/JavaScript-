// ! Butona her tiklandiginda calisir.

function hesapla() {
  // ======================================================
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  // ======================================================

  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;

  const sonuc = (Math.PI * r * r * h).toFixed(2);
  document.querySelector(".hacim").innerHTML = sonuc;
}

//.toFixed(2); fonksiyonu virgulden sonraki iki haneyi alir
// Math.PI ==> hazir bir fonksiyondur
// .value ==> user girmis oldugu degeri almak icin mutlaka  yazmaliyiz. Normal sartlarda r ve h lar html elemani yani imputlara verilen class ve id ismi, bizim  bu imputlara girilen  degeri almamiz lazim. iste bu yuzden .value yazmali ve user'in girdigi degeri almaliyiz.
// .innerHTML ile fonsiyon icindeki yapilan islemi html'deki  .hacim classi yardimiyla span etiketinin icine sonuc isleminin sonucunu yazdirmasini sagladik.

// ======================================================
// Butonun stillendirmesi icin
// ======================================================

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "grey";
buton.style.width = "100px";

// * Biz burada sitillendirme yaptik ama normal kullanimda bu islemler jss de yapilir

// ======================================================
//             DOM ELEMANLARINA NASIL ERİŞİLİR
// ======================================================

// ! DOM ELEMANLARINA NASIL ERİŞİLİR

// * HTML Elemanları Seçmek için metotlar

// ? document.getElementById(id) ==> Bir elemanı id’ye göre bul

// ? document.getElementsByTagName(isim) ==> Bir elemanı Tag (Etiket = h1 p vb !id olmamak sarti ile yani butun h1 ve butun p leri) adına göre bul. Bir dizi dondurur.

// ? document.getElementsByClassName(isim) ==> Bir elemanı Class (Sınıf) adına göre bul. Bir dizi döndurur.

// ? document.querySelector(CSS seçici) ==>  Bir elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır. Eşleşen ilk elemanı seçer.

// ? document.querySelectorAll(CSS seçici) ==> Bir elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır. Eşleşen elemanların listesini döndürür. Bir dizi dondurur

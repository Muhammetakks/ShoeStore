const sarici = document.querySelector(".slaytSarici");
const menuOgeleri = document.querySelectorAll(".menuOgesi");

const urunler = [
  {
    id: 1,
    baslik: "Air Force",
    fiyat: 119,
    aciklama:
      "Zamansız klasik Air Force ile her adımda özgüveni yakala. Rahatlık ve stilin mükemmel birleşimi!",
    renkler: [
      { kod: "black", resim: "./img/air.png" },
      { kod: "darkblue", resim: "./img/air2.png" },
    ],
  },
  {
    id: 2,
    baslik: "Air Jordan",
    fiyat: 149,
    aciklama:
      "Air Jordan ile sokak modasının lideri ol. Efsanevi tasarım ve üstün performans bir arada!",
    renkler: [
      { kod: "lightgray", resim: "./img/jordan.png" },
      { kod: "green", resim: "./img/jordan2.png" },
    ],
  },
  {
    id: 3,
    baslik: "Blazer",
    fiyat: 109,
    aciklama:
      "Blazer ile retro tarzı modern dokunuşlarla yaşa. Gün boyu konfor ve eşsiz bir görünüm!",
    renkler: [
      { kod: "lightgray", resim: "./img/blazer.png" },
      { kod: "green", resim: "./img/blazer2.png" },
    ],
  },
  {
    id: 4,
    baslik: "Crater",
    fiyat: 129,
    aciklama:
      "Crater ile çevre dostu tarzını yansıt. Sürdürülebilir malzemelerle üretilmiş benzersiz tasarım!",
    renkler: [
      { kod: "black", resim: "./img/crater.png" },
      { kod: "lightgray", resim: "./img/crater2.png" },
    ],
  },
  {
    id: 5,
    baslik: "Hippie",
    fiyat: 99,
    aciklama:
      "Hippie ile özgür ruhunu ortaya koy. Hafif, renkli ve her anına neşe katan bir deneyim!",
    renkler: [
      { kod: "gray", resim: "./img/hippie.png" },
      { kod: "black", resim: "./img/hippie2.png" },
    ],
  },
];

let seciliUrun = urunler[0];
let mevcutSlaytIndeksi = 0;

const mevcutUrunResmi = document.querySelector(".urunResmi");
const mevcutUrunBasligi = document.querySelector(".urunBasligi");
const mevcutUrunFiyati = document.querySelector(".urunFiyati");
const mevcutUrunAciklamasi = document.querySelector(".urunAciklamasi");
const mevcutUrunRenkleri = document.querySelectorAll(".renk");
const mevcutUrunBedenleri = document.querySelectorAll(".beden");

// Otomatik slayt değiştirme
function otomatikSlayt() {
  mevcutSlaytIndeksi = (mevcutSlaytIndeksi + 1) % urunler.length;
  sarici.style.transform = `translateX(${-100 * mevcutSlaytIndeksi}vw)`;
  seciliUrun = urunler[mevcutSlaytIndeksi];
  mevcutUrunBasligi.textContent = seciliUrun.baslik;
  mevcutUrunFiyati.textContent = "$" + seciliUrun.fiyat;
  mevcutUrunAciklamasi.textContent = seciliUrun.aciklama;
  mevcutUrunResmi.src = seciliUrun.renkler[0].resim;
  mevcutUrunRenkleri.forEach((renk, indeks) => {
    renk.style.backgroundColor = seciliUrun.renkler[indeks].kod;
  });
}

// 5 saniyede bir otomatik slayt değiştir
let slaytInterval = setInterval(otomatikSlayt, 5000);

// Menü öğelerine tıklama
menuOgeleri.forEach((oge, indeks) => {
  oge.addEventListener("click", () => {
    clearInterval(slaytInterval); // Otomatik geçişi durdur
    mevcutSlaytIndeksi = indeks;
    sarici.style.transform = `translateX(${-100 * indeks}vw)`;
    seciliUrun = urunler[indeks];
    mevcutUrunBasligi.textContent = seciliUrun.baslik;
    mevcutUrunFiyati.textContent = "$" + seciliUrun.fiyat;
    mevcutUrunAciklamasi.textContent = seciliUrun.aciklama;
    mevcutUrunResmi.src = seciliUrun.renkler[0].resim;
    mevcutUrunRenkleri.forEach((renk, indeks) => {
      renk.style.backgroundColor = seciliUrun.renkler[indeks].kod;
    });
    slaytInterval = setInterval(otomatikSlayt, 5000); // Otomatik geçişi yeniden başlat
  });
});

mevcutUrunRenkleri.forEach((renk, indeks) => {
  renk.addEventListener("click", () => {
    mevcutUrunResmi.src = seciliUrun.renkler[indeks].resim;
  });
});

mevcutUrunBedenleri.forEach((beden, indeks) => {
  beden.addEventListener("click", () => {
    mevcutUrunBedenleri.forEach((beden) => {
      beden.style.backgroundColor = "white";
      beden.style.color = "black";
    });
    beden.style.backgroundColor = "black";
    beden.style.color = "white";
  });
});

const urunButonu = document.querySelector(".urunButonu");
const odeme = document.querySelector(".odeme");
const kapat = document.querySelector(".kapat");

urunButonu.addEventListener("click", () => {
  odeme.style.display = "flex";
});

kapat.addEventListener("click", () => {
  odeme.style.display = "none";
});

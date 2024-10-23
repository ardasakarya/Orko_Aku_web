/* indirme merkezi fonkisyonu
indirmeBtnHtml()
*/


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const menuLinks = document.querySelectorAll('nav ul li a'); // Menüdeki linkleri seç

  // Hamburger menüsüne tıklandığında menü açılıp kapanacak
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Menüdeki herhangi bir butona/bağlantıya tıklandığında menü kapanacak
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Eğer menü aktifse onu kapat
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active'); // Menüyü kapat
        hamburger.classList.remove('active'); // Hamburger ikonunu da kapat
      }
    });
  });
});


const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'; // Tarayıcıya kaydırma pozisyonunu saklamamasını söyler
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0); // Sayfa kapanmadan önce kaydırmayı en üste çeker
};

 
document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.querySelector(".scroll-wrapper");
  const cardWidth = 250; // Kart genişliği
  const scrollDuration = 500; // Kaydırma süresi (500 ms)
  let isDragging = false;
  let startX;
  let scrollLeft;

  const touchDragSpeed = 3.5; // Dokunmatik sürükleme hızı artırıldı
  const mouseDragSpeed = 1;   // Fare sürükleme hızı

  // Kartları dinamik olarak ekleme (dummy fonksiyon olarak bıraktım)
  function addCards(count) {
    for (let i = 0; i < count; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = `Card ${i + 1}`;
      scrollWrapper.appendChild(card);
    }
  }

  addCards(initialCards);

  function manageCards() {
    const scrollPosition = scrollWrapper.scrollLeft;
    const maxScrollLeft = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;

    if (scrollPosition + scrollWrapper.clientWidth >= maxScrollLeft - cardWidth * loadMoreThreshold) {
      addCards(loadMoreCount);
    }

    updateActiveCard();
  }

  function updateActiveCard() {
    const cards = document.querySelectorAll(".card");
    const viewportLeft = scrollWrapper.scrollLeft;
    const viewportRight = viewportLeft + scrollWrapper.clientWidth;

    cards.forEach(card => {
      const cardLeft = card.offsetLeft;
      const cardRight = cardLeft + card.clientWidth;
      const isActive = cardRight > viewportLeft && cardLeft < viewportRight;

      if (isActive) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  function smoothScrollTo(targetLeft) {
    const startLeft = scrollWrapper.scrollLeft;
    const startTime = performance.now();

    function animateScroll(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const newScrollLeft = startLeft + (targetLeft - startLeft) * easeInOutQuad(progress);

      scrollWrapper.scrollLeft = newScrollLeft;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        manageCards();
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
  }

  // Sürükleme ve dokunma olaylarını yönetme
  function startDragging(e) {
    isDragging = true;
    scrollWrapper.classList.add("is-dragging");
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = scrollWrapper.scrollLeft;

    // Animasyonları iptal et (momentum gibi etkiler yok)
  }

  function stopDragging() {
    if (isDragging) {
      isDragging = false;
      scrollWrapper.classList.remove("is-dragging");
    }
  }

  function dragging(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const isTouch = e.type.includes('touch');
    const walk = (x - startX) * (isTouch ? touchDragSpeed : mouseDragSpeed);

    scrollWrapper.scrollLeft = scrollLeft - walk;
    manageCards();
  }

  // Optimize edilmiş olay dinleyicileri
  scrollWrapper.addEventListener("mousedown", startDragging);
  scrollWrapper.addEventListener("touchstart", startDragging, { passive: false });
  scrollWrapper.addEventListener("mouseleave", stopDragging);
  scrollWrapper.addEventListener("mouseup", stopDragging);
  scrollWrapper.addEventListener("touchend", stopDragging);
  scrollWrapper.addEventListener("mousemove", dragging);
  scrollWrapper.addEventListener("touchmove", dragging, { passive: false });

  scrollWrapper.addEventListener("scroll", () => {
    requestAnimationFrame(manageCards);
  });
});

document.addEventListener('scroll', function () {
  const contactContainer = document.querySelector('.contact-container');
  const containerPosition = contactContainer.getBoundingClientRect().top;

  // Ekranın %70'i kadarını belirleyen sabit
  const screenPosition = window.innerHeight / 1.5;

  if (containerPosition < screenPosition) {
    contactContainer.classList.add('show');
  }
});



document.addEventListener('scroll', function () {
  const aboutContainer = document.querySelector('.aboutContainer');
  const containerPosition = aboutContainer.getBoundingClientRect().top;

  const screenPosition = window.innerHeight / 1.5;

  if (containerPosition < screenPosition) {
    aboutContainer.classList.add('show');
  }
});
document.addEventListener('scroll', function () {
  const aboutText = document.querySelector('.aboutText');
  const textPosition = aboutText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (textPosition < screenPosition) {
    aboutText.classList.add('show');
  }
});

document.addEventListener('scroll', function () {
  const servicesText = document.querySelector('.servicesText');
  const features = document.querySelector('.features');
  const wrappers = document.querySelectorAll('.wrapper');
  const featureCards = document.querySelectorAll('.feature-card');

  const screenPosition = window.innerHeight / 1.5;

  const checkVisibility = (element) => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < screenPosition) {
      element.classList.add('show');
    }
  };

  document.addEventListener('scroll', function () {
    const aboutContainer = document.querySelector('.aboutContainer');
    const contactContainer = document.querySelector('.contact-container');
    const wrappers = document.querySelectorAll('.wrapper');
    const features = document.querySelector('.features');
    const servicesText = document.querySelector('.servicesText');
    const featureCards = document.querySelectorAll('.feature-card');

    // Ekranın %70'ine denk gelen pozisyon
    const screenPosition = window.innerHeight / 1.5;

    // Elemanın görünürlüğünü kontrol eden fonksiyon
    const checkVisibility = (element) => {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < screenPosition) {
        element.classList.add('show');
      }
    };

    // Her bir eleman için görünürlük kontrolü yapıyoruz
    checkVisibility(aboutContainer);
    checkVisibility(contactContainer);
    checkVisibility(features);
    checkVisibility(servicesText);

    wrappers.forEach(wrapper => checkVisibility(wrapper));
    featureCards.forEach(card => checkVisibility(card));
  });

  document.addEventListener('scroll', function () {
    const servicesNavbar = document.querySelector('.ServicesNavbar');
    const containerPosition = servicesNavbar.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.5;

    if (containerPosition < screenPosition) {
      servicesNavbar.classList.add('show');
    }
  });

  document.addEventListener('scroll', function () {
    const mapsIframe = document.querySelector('.maps');
    const containerPosition = mapsIframe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (containerPosition < screenPosition) {
      mapsIframe.classList.add('show');
    }
  });



  checkVisibility(servicesText);
  checkVisibility(features);

  wrappers.forEach(wrapper => checkVisibility(wrapper));
  featureCards.forEach(card => checkVisibility(card));



  let currentIndex = 0;
  const cards = document.querySelectorAll('.wrapper');

  function updateActiveCard() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index === currentIndex) {
        card.classList.add('active');
      }
    });
  }

  document.querySelector('.swiper-button-next').addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateActiveCard();
    }
  });

  document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateActiveCard();
    }
  });

  updateActiveCard();

});



document.addEventListener('DOMContentLoaded', function () {
  // Tüm butonlar
  const tabButtons = document.querySelectorAll('.nav-btn');
  const scrollWrapper = document.getElementById('scrollWrapper');

  // Her bir kategori için kart içerikleri
  const contentData = {
    starter: [
      {
        id: 'tab_polar',
        imgSrc: 'starter_aku_img/tab_polar.png',
        title: 'TAB POLAR',

      },
      {
        id: 'tab_magic',
        imgSrc: 'starter_aku_img/tab_magic.png',
        title: 'TAB MAGIC',

      },
      {
        id: 'tab_efb',
        imgSrc: 'starter_aku_img/tab_efb_stop&go.png',
        title: 'TAB EFB STOP&GO',

      },
      {
        id: 'tab_agm',
        imgSrc: 'starter_aku_img/tab_agm_stop&go.png',
        title: 'TAB AGM STOP&GO',

      },
     {
        id: 'tab_oem',
        imgSrc: 'starter_aku_img/tab_oem.png',
        title: 'TAB OEM',

      },
      {
        id: 'tab_magic_tr',
        imgSrc: 'starter_aku_img/tab_magic_truck.png',
        title: 'TAB MAGIC TRUCK',

      },
      {
        id: 'tab_polar_tr',
        imgSrc: 'starter_aku_img/tab_polar_truck.png',
        title: 'TAB POLAR TRUCK',

      },
      {
        id: 'tab_efb_tr',
        imgSrc: 'starter_aku_img/tab_efb_stop&go2.png',
        title: 'TAB EFB STOP&GO TRUCK',

      },
    
     
    ],
    traction: [
      {
        id: 'tab_din',
        imgSrc: 'traksiyoner_aku_img/TAB-DIN.png',
        title: 'TAB DIN',

      },
      {
        id: 'tab_bs',
        imgSrc: 'traksiyoner_aku_img/TAB-BS.png',
        title: 'TAB BS',

      },
      {
        id: 'tab_bci',
        imgSrc: 'traksiyoner_aku_img/TAB-BCI.png',
        title: 'TAB BCI',

      },
      {
        id: 'tab_pzv',
        imgSrc: 'traksiyoner_aku_img/TAB-PzV.png',
        title: 'TAB PZV',

      },
      {
        id: 'tab_pzvb',
        imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
        title: 'TAB PZVB',

      },
     
      {
        id: 'tab_psq',
        imgSrc: 'traksiyoner_aku_img/TAB-PSQ.png',
        title: 'TAB PSQ',

      },
      {
        id: 'tab_pzvb',
        imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
        title: 'TAB PZVB',

      },
      {
        id: 'tab_pzrm',
        imgSrc: 'traksiyoner_aku_img/TAB-PzRM1.png',
        title: 'TAB PZRM',

      },
      
      {
        id: 'tab_ex',
        imgSrc: 'traksiyoner_aku_img/TAB-EX.png',
        title: 'TABEX',

      }
    ],
    monoblock: [
      {
        id: 'motion_bci',
        imgSrc: 'monoblock_aku_img/TAB_motion_BCI.png',
        title: 'MOTION BCI',

      },
      {
        id: 'motion_pasted',
        imgSrc: 'monoblock_aku_img/MotionPasted.png',
        title: 'MOTION PASTED',

      },
      {
        id: 'motion_tubular',
        imgSrc: 'monoblock_aku_img/MotionTubular.png',
        title: 'MOTION TUBULAR',

      },
      {
        id: 'motion_agm',
        imgSrc: 'monoblock_aku_img/MotionAGM.png',
        title: 'MOTION AGM',

      },
      {
        id: 'motion_gel',
        imgSrc: 'monoblock_aku_img/MotionGEL.png',
        title: 'MOTION GEL',

      }
   
    ],
    stationary: [
      {
        id: 'opzs',
        imgSrc: 'stasyoner_aku_img/OPzS.png',
        title: 'OPZS CELLS & BLOCKS',

      },
      {
        id: 'ogi',
        imgSrc: 'stasyoner_aku_img/OGi.png',
        title: 'OGI',

      },
      {
        id: 'ups',
        imgSrc: 'stasyoner_aku_img/UPS.png',
        title: 'UPS',

      },
      {
        id: 'topzs',
        imgSrc: 'stasyoner_aku_img/TOPzS.png',
        title: 'TOPZS',

      },
    
      {
        id: 'opzv',
        imgSrc: 'stasyoner_aku_img/OPzV.png',
        title: 'OPZV',

      },
     
    ],
 
    li_ion:
    [
      {
        id: 'traction_batteries',
        imgSrc: 'Li_Ion_img/emotive.png',
        title: 'TRACTION BATTERIES',

      },
      {
        id: 'storage_clever',
        imgSrc: 'Li_Ion_img/C2-4K-12.png',
        title: 'TAB e.storage CLEVER',

      },
      {
        id: 'storage_family',
        imgSrc: 'Li_Ion_img/C2-4K-12.png',
        title: 'TAB e.storage FAMILY',

      },
      {
        id: 'module_l51',
        imgSrc: 'Li_Ion_img/modul_l51.png',
        title: 'TAB e.module L5.1',

      },
      {
        id: 'inverter_1p',
        imgSrc: 'Li_Ion_img/1P.png',
        title: 'TAB HYBRID INVERTER 1P',

      },
      {
        id: 'inverter_3p',
        imgSrc: 'Li_Ion_img/3P.png',
        title: 'TAB HYBRID INVERTER 3P',

      },
     
    ],

  };

  // Butonlara tıklanınca ilgili içeriği yükleme
  function loadContent(category) {
    scrollWrapper.innerHTML = ''; // Mevcut içerikleri temizle

    contentData[category].forEach(item => {
      const cardWrapper = document.createElement('div');
      cardWrapper.classList.add('wrapper');

      const card = `
        <div class="card" id="${item.id}">
          <img src="${item.imgSrc}" alt="${item.title}">
          <h3>${item.title}</h3>
          <button class="CardBtn" data-id="${item.id}">Daha Fazla</button>
        </div>
      `;
      cardWrapper.innerHTML = card;
      scrollWrapper.appendChild(cardWrapper);
    });

    // Kartların görünür olmasını sağlamak için küçük bir animasyon
    setTimeout(() => {
      document.querySelectorAll('.wrapper').forEach(wrapper => {
        wrapper.style.opacity = 1;
        wrapper.style.transform = 'translateY(0)';
      });
    }, 50);

    // Dinamik olarak yüklenen butonlar için event listener ekleme
    addCardButtonListeners();
  }

  // Kart butonlarına tıklama event listener'ını ekle
  function addCardButtonListeners() {
    const buttons = document.querySelectorAll('.CardBtn');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const id = this.getAttribute('data-id'); // Tıklanan butonun id'sini al

        // Sayfayı ilgili id'yle yönlendir
        window.location.href = `aku_ozellik.html?id=${id}`;
      });
    });
  }

  // Sayfa yüklendiğinde başlangıç kategorisi
  loadContent('starter');

  // Kategori butonlarına tıklanınca içerikleri yükleme
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      loadContent(target); // Seçilen kategoriyi yükle
      tabButtons.forEach(btn => btn.classList.remove('active')); // Diğer butonlardaki 'active' sınıfını kaldır
      this.classList.add('active'); // Tıklanan butona 'active' sınıfını ekle
    });
  });
});




// Tüm butonları ve bölümleri seç
const buttons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.text-section');
const aboutImage = document.getElementById('aboutImage');

// Her sekmeye özel resimler
const imageMap = {
  about: 'images/mainContainerBG.jpg',
  industrial: 'images/aku_cozum.jpeg',
  vehicle: 'images/mainContainerBG3.jpg',
  approach: 'images/AboutImages.jpg',
  sustainability: 'images/sürdürülebilirlik.jpeg'
};


// Butonlara tıklama olaylarını dinle
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Aktif butonu ayarlama
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // İçerik bölümlerini gizleme
    sections.forEach(section => section.classList.remove('active'));

    // Tıklanan butona ait içeriği gösterme
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');

    // Tıklanan butona göre resmi değiştirme
    aboutImage.src = imageMap[target];
  });
});

window.onscroll = function () {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};
require('dotenv').config();

const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const scrollWrapper = document.querySelector('.scroll-wrapper');
const cardWidth = 250; // Kart genişliği

prevButton.addEventListener('click', () => {
  scrollWrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  scrollWrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
});




function indirmeBtnHtml()
{
const indirmeButton = document.getElementById('indirmeBtn');

// Butona click event listener ekle
indirmeButton.addEventListener('click', function (event) {

  window.location.href = '/Orko_Aku_web/indirme_merkezi.html';
});
}

function anasayfaBtnHtml()
{
const indirmeButton = document.getElementById('anasayfaBtn');

// Butona click event listener ekle
indirmeButton.addEventListener('click', function (event) {

  window.location.href = '/Orko_Aku_web/';
});
}


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul li a'); // Menüdeki linkleri seç

// Hamburger menüsüne tıklayınca açılıp kapanma işlemi
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Menüdeki herhangi bir bağlantıya tıklandığında menüyü kapatma işlemi
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Menü kapatılır
  });
});



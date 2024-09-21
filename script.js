


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
  const originalWrappers = Array.from(document.querySelectorAll(".wrapper"));
  const cardWidth = 250; // Kart genişliği
  const initialCards = 30; // Başlangıçta yüklenecek kart sayısı
  const loadMoreThreshold = 26; // Daha fazla kart yükleme eşiği
  const loadMoreCount = 30; // Daha fazla kart yükleme miktarı
  const autoScrollIntervalTime = 5000; // 10 saniye
  const scrollDuration = 500; // Kaydırma süresi (500 ms)
  let isDragging = false;
  let startX;
  let scrollLeft;
  let autoScrollInterval;
  let cardsLoaded = 0;

  // Kartları dinamik olarak ekleme


  // Başlangıçta yeterli kartları ekle
  addCards(initialCards);

  // Performans için kartları yönetme
  function manageCards() {
    const scrollPosition = scrollWrapper.scrollLeft;
    const maxScrollLeft = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;

    // Yeni kartları ekle
    if (scrollPosition + scrollWrapper.clientWidth >= maxScrollLeft - cardWidth * loadMoreThreshold) {
      addCards(loadMoreCount);
    }

    // Aktif kartı belirle ve stilini güncelle
    updateActiveCard();
  }

  // Aktif kartı güncelleme
  function updateActiveCard() {
    const cards = document.querySelectorAll(".wrapper");
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

  // Yumuşak geçişle kaydırma yapma
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


  
function scrollToNextCard() {
const currentScrollLeft = scrollWrapper.scrollLeft;
const maxScrollLeft = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;

// Eğer scroll pozisyonu son kartın görünümde olduğuna yakınsa kaydırmayı durdur
if (currentScrollLeft >= maxScrollLeft) {
    clearInterval(autoScrollInterval); // Otomatik kaydırmayı durdur
    return;
}

const nextScrollLeft = currentScrollLeft + cardWidth;
smoothScrollTo(nextScrollLeft);
}

// Otomatik kaydırmayı başlat
function initiateAutoScroll() {
autoScrollInterval = setInterval(scrollToNextCard, autoScrollIntervalTime);
}

initiateAutoScroll();


  // Sürükleme ve fare olaylarını yönetme
  scrollWrapper.addEventListener("mousedown", (e) => {
    clearInterval(autoScrollInterval); // Otomatik kaydırmayı durdur
    isDragging = true;
    startX = e.pageX - scrollWrapper.offsetLeft;
    scrollLeft = scrollWrapper.scrollLeft;
  });

  scrollWrapper.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      initiateAutoScroll(); // Otomatik kaydırmayı tekrar başlat
    }
  });

  scrollWrapper.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      initiateAutoScroll(); // Otomatik kaydırmayı tekrar başlat
    }
  });

  scrollWrapper.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollWrapper.offsetLeft;
    const walk = (x - startX) * 1; // Sürükleme hızı (1 ile çarpma)
    scrollWrapper.scrollLeft = scrollLeft - walk;
    manageCards(); // Sürükleme sırasında döngüyü kontrol et
  });

  // Ekranın ilk yüklemesi veya pencere boyutu değiştiğinde
  scrollWrapper.addEventListener("scroll", () => {
    requestAnimationFrame(manageCards); // Performans için scroll olayını optimize et
  });
});

document.addEventListener('scroll', function () {
  const contactContainer = document.querySelector('.contact-container');
  const containerPosition = contactContainer.getBoundingClientRect().top;
  
  // Ekranın %70'i kadarını belirleyen sabit
  const screenPosition = window.innerHeight /1.5;

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
                imgSrc: 'starter_aku_img/tab_magic.png', // Fotoğraf yolunu burada belirtin
                title: 'TAB MAGIC'
            },
            {
                imgSrc: 'starter_aku_img/tab_agm_stop&go.png',
                title: 'TAB AGM STOP&GO'
            },
            {
              imgSrc: 'starter_aku_img/tab_efb_stop&go.png', // Fotoğraf yolunu burada belirtin
              title: 'TAB EFB STOP&GO'
          },
          {
              imgSrc: 'starter_aku_img/tab_efb_stop&go2.png',
              title: 'TAB EFB STOP&GO TRUCK'
          },
          {
            imgSrc: 'starter_aku_img/tab_magic_hr.png', // Fotoğraf yolunu burada belirtin
            title: 'TAB HR - HOT REGION'
        },
        {
            imgSrc: 'starter_aku_img/tab_magic_truck.png',
            title: 'TAB MAGIC TRUCK'
        },
        {
          imgSrc: 'starter_aku_img/tab_oem.png', // Fotoğraf yolunu burada belirtin
          title: 'TAB OEM'
      },
      {
          imgSrc: 'starter_aku_img/tab_polar.png',
          title: 'TAB POLAR'
      },
      {
        imgSrc: 'starter_aku_img/tab_polar_truck.png', // Fotoğraf yolunu burada belirtin
        title: 'TAB POLAR TRUCK'
    },
    {
        imgSrc: 'starter_aku_img/tab_polar_blue.png',
        title: 'TAB POLAR BLUE'
    },
        ],
        traction: [
            {
                imgSrc: 'traksiyoner_aku_img/TAB-BCI.png',
                title: 'TAB BCI'
            },
            {
              imgSrc: 'traksiyoner_aku_img/TAB-BS.png',
              title: 'TAB BS'
          },
          {
            imgSrc: 'traksiyoner_aku_img/TAB-DIN.png',
            title: 'TAB DIN'
        },
        {
          imgSrc: 'traksiyoner_aku_img/TAB-EX.png',
          title: 'TABEX'
      },
      {
        imgSrc: 'traksiyoner_aku_img/TAB-PSQ.png',
        title: 'TAB PSQ'
    },
    {
      imgSrc: 'traksiyoner_aku_img/TAB-PzRM1.png',
      title: 'TAB PZRM'
  },
  {
    imgSrc: 'traksiyoner_aku_img/TAB-PzV.png',
    title: 'TAB PZV'
},
{
  imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
  title: 'TAB PZRM'
},

           
        ],
        monoblock: [
            {
                imgSrc: 'monoblock_aku_img/MotionAGM.png',
                title: 'MOTION AGM'
            },
            {
              imgSrc: 'monoblock_aku_img/MotionGel.png',
              title: 'MOTION GEL'
          },
          {
            imgSrc: 'monoblock_aku_img/MotionPasted.png',
            title: 'MOTION PASTED'
        },
        {
          imgSrc: 'monoblock_aku_img/MotionTubular.png',
          title: 'MOTION TUBULAR'
      },
      {
        imgSrc: 'monoblock_aku_img/TAB_motion_BCI.png',
        title: 'MOTION BCI'
    },
 
          
        ],
        stationary: [
            {
                imgSrc: 'stasyoner_aku_img/OGI.png',
                title: 'OGI'
            },
            {
              imgSrc: 'stasyoner_aku_img/OPzS.png',
              title: 'OPZS CELLS & BLOCKS'
          },
          {
            imgSrc: 'stasyoner_aku_img/OPzV.png',
            title: 'OPZV'
        },
        {
          imgSrc: 'stasyoner_aku_img/TOPzS.png',
          title: 'TOPZS'
      },
      {
        imgSrc: 'stasyoner_aku_img/UPS.png',
        title: 'UPS'
    },
  
            
        ]
    };

    // Butonlara tıklanınca ilgili içeriği yükleme
    function loadContent(category) {
      // Mevcut içerikleri temizle
      scrollWrapper.innerHTML = '';

      // Yeni kartları oluştur ve ekle
      contentData[category].forEach(item => {
          const cardWrapper = document.createElement('div');
          cardWrapper.classList.add('wrapper');

          const card = `
              <div class="card">
                  <img src="${item.imgSrc}" alt="${item.title}">
                  <h3>${item.title}</h3>
                  <button class="btn">Daha Fazla</button>
              </div>
          `;
          cardWrapper.innerHTML = card;
          scrollWrapper.appendChild(cardWrapper);
      });

      // Yeni içerikleri ekledikten sonra görsel geçiş efektlerini uygula
      // Zamanlayıcı ekleyerek görsellerin eklenmeden önce görüntülenmesini sağlar
      setTimeout(() => {
          document.querySelectorAll('.wrapper').forEach(wrapper => {
              wrapper.style.opacity = 1; // Görsellerin görünürlüğünü ayarla
              wrapper.style.transform = 'translateY(0)'; // Geçiş animasyonu
          });
      }, 50);  // 50ms bir gecikme uygulanarak görsel animasyonu sağlanır
  }

  // Sayfa yüklendiğinde "starter" kategorisi ile başlayalım
  loadContent('starter');

  // Butonlara tıklanınca ilgili içeriği yükleme
  tabButtons.forEach(button => {
      button.addEventListener('click', function () {
          const target = this.getAttribute('data-target');

          // Kategoriye göre içerikleri yükle
          loadContent(target);

          // Aktif butonu güncelle
          tabButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
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
  industrial: 'images/mainContainerBG2.jpg',
  vehicle: 'images/mainContainerBG3.jpg',
  approach: 'images/AboutImages.jpg',
  sustainability: 'images/AboutImages2.jpg'
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

window.onscroll = function() {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
};


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

// Otomatik kaydırma işlevini durdur
clearInterval(autoScrollInterval); 

// Daha fazla kart yüklendiğinde veya kaydırma yapıldığında aktif kartı kontrol et
scrollWrapper.addEventListener('scroll', updateActiveCard);




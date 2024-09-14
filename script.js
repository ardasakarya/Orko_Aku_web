
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
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
          approach: 'images/solar_aku.jpg',
          sustainability: 'images/iyon_aku.jpg'
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
      



        function smoothScrollTo2(targetY, duration) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, distance, duration);
        
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Swiper bölümü için yeni Intersection Observer ayarları
const swiperSection2 = document.querySelector('.main.swiper');
const aboutSection2 = document.querySelector('.aboutText');

// İkinci gözlemciyi tanımlıyoruz
const observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let targetY = entry.target.offsetTop;

            // Daha farklı bir kaydırma için yeni ayar
            const viewportHeight = window.innerHeight;
            targetY = targetY - (viewportHeight * 0); // %5 daha aşağı kaydır

            smoothScrollTo2(targetY, 1000); // 1000ms (1 saniyelik yumuşak geçiş)
        }
    });
}, {
    threshold: 0.1 // %20 göründüğünde tetiklenir
});
function smoothScrollToTop(duration) {
    const startY = window.pageYOffset;
    const distance = -startY; // Yukarı çıkmak için negatif yönde hareket
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, distance, duration);
        
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// .hero bölümü için Intersection Observer ayarları
const heroSection = document.querySelector('.hero');

// Gözlemciyi tanımlıyoruz
const observerToTop = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // .hero bölümü görünür olduğunda yukarı smooth scroll gerçekleşsin
            smoothScrollToTop(800); // 800ms (0.8 saniyelik yumuşak geçiş)
        }
    });
}, {
    threshold: 0.1 // Hero bölümünün %10'u görünür olduğunda tetiklenir
});

// .hero bölümünü gözlemlemeye başlıyoruz
observerToTop.observe(heroSection);

// Yeni gözlemci ile bölümleri gözlemlemeye başlıyoruz
observer2.observe(swiperSection2);
observer2.observe(aboutSection2);

// Butonlara tıklama ile içerik değiştirme fonksiyonu








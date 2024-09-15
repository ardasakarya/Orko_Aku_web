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
    sustainability: 'images/araba_aku.jpg'
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
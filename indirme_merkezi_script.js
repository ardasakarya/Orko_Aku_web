document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('nav ul').classList.toggle('active');
});
window.onscroll = function () {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};
document.addEventListener('DOMContentLoaded', function() {
  showContent('battery'); // Sayfa açıldığında "battery" içeriğini göster
  setActiveButton('battery-btn'); // İlk butonu aktif yap
});


// Tüm butonları seç
const buttons = document.querySelectorAll('.button-container button');

// Her bir butona tıklama olayı ekleyin
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Tüm butonlardan "active" sınıfını kaldır
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Tıklanan butona "active" sınıfını ekle
    this.classList.add('active');
  });
});

function showContent(type) {
  const contentArea = document.getElementById('content-area');
  contentArea.innerHTML = ''; // Önce alanı temizliyoruz

  if (type === 'battery') {
    contentArea.innerHTML = `
            <div class="battery_item">
                <img src="images/battery_tool.jpg" alt="Battery Replacement Tool">
                <h3>Battery Replacement Tool</h3>
                <a href="downloads/battery_tool.pdf" class="product-btn">Download Battery Tool</a>
            </div>
        `;
  }else if (type === 'catalogues') {
    contentArea.innerHTML = `
        <div class="catalogues_item">
            <h3>TAB STARTER BATTERIES</h3>
            <hr>
            <img src="catalogues/TAB-STARTER.jpg" alt="TAB Starter">
            <a href="https://online.fliphtml5.com/vvbpc/mdvu/" class="product-btn">PDF</a>
        </div>
        <div class="catalogues_item">
            <h3>TAB MONOBLOCK BATTERIES</h3>
            <hr>
            <img src="catalogues/TAB-MONOBLOCK.jpg" alt="TAB_MONOBLOCK">
            <a href="https://online.fliphtml5.com/vvbpc/xhpl/" class="product-btn">PDF</a>
        </div>
        <div class="catalogues_item">
            <h3>TAB STATIONARY BATTERIES</h3>
            <hr>
            <img src="catalogues/tabstationaryen.png" alt="tabstationaryen">
            <a href="https://online.fliphtml5.com/vvbpc/mqmb/" class="product-btn">PDF</a>
        </div>
        <div class="catalogues_item">
            <h3>LI-ION TRACTION BATTERIES</h3>
            <hr>
            <img src="catalogues/e.motive.jpg" alt="e_motive">
            <a href="https://online.fliphtml5.com/vvbpc/otjf/" class="product-btn">PDF</a>
        </div>
        <div class="catalogues_item">
            <h3>LI-ION ESS BATTERIES</h3>
            <hr>
            <img src="catalogues/e.storga.jpg" alt="e_storga">
            <a href="https://online.fliphtml5.com/vvbpc/vwfz/" class="product-btn">PDF</a>
        </div>
        <div class="catalogues_item">
            <h3>LI-ION MONOBLOCK BATTERIES</h3>
            <hr>
            <img src="catalogues/eleisure.jpg" alt="eleisure">
            <a href="https://online.fliphtml5.com/vvbpc/tgne/" class="product-btn">PDF</a>
        </div>
    `;
}


  else if (type === 'certificates') {
    contentArea.innerHTML = `
            <div class="certificates_item">
                <img src="certs/cert_9001.png" alt="Certificate 1">
                <h3>Certificate 1</h3>
                <a href="downloads/certificate_1.pdf" class="product-btn">Download Certificate 1</a>
            </div>
            <div class="certificates_item">
                <img src="certs/bisnode.png" alt="Certificate 2">
                <h3>Certificate 2</h3>
                <a href="downloads/certificate_2.pdf" class="product-btn">Download Certificate 2</a>
            </div>
            <div class="certificates_item">
                <img src="certs/cert_14001.png" alt="Certificate 3">
                <h3>Certificate 3</h3>
                <a href="downloads/certificate_3.pdf" class="product-btn">Download Certificate 3</a>
            </div>

             <div class="certificates_item">
                <img src="certs/SIRA2.png" alt="Certificate 4">
                <h3>Certificate 1</h3>
                <a href="downloads/certificate_1.pdf" class="product-btn">Download Certificate 1</a>
            </div>
            <div class="certificates_item">
                <img src="certs/SIQ-1.png" alt="Certificate 5">
                <h3>Certificate 2</h3>
                <a href="downloads/certificate_2.pdf" class="product-btn">Download Certificate 2</a>
            </div>
            <div class="certificates_item">
                <img src="certs/iecex.png" alt="Certificate 6">
                <h3>Certificate 3</h3>
                <a href="downloads/certificate_3.pdf" class="product-btn">Download Certificate 3</a>
            </div>
 <div class="certificates_item">
                <img src="certs/iecex.png" alt="Certificate 7">
                <h3>Certificate 2</h3>
                <a href="downloads/certificate_2.pdf" class="product-btn">Download Certificate 2</a>
            </div>
             <div class="certificates_item">
                <img src="certs/ineris_new.png" alt="Certificate 8">
                <h3>Certificate 1</h3>
                <a href="downloads/certificate_1.pdf" class="product-btn">Download Certificate 1</a>
            </div>
           
          <div class="certificates_item">
                <img src="certs/smiatf.png" alt="Certificate 9">
                <h3>Certificate 1</h3>
                <a href="downloads/certificate_1.pdf" class="product-btn">Download Certificate 1</a>
            </div>

        `;
  } else if (type === 'presentation') {
    contentArea.innerHTML = `
            <div class="presentation_item">
                <img src="images/presentation.jpg" alt="Presentation">
                <h3>Presentation</h3>
                <a href="downloads/presentation.pdf" class="product-btn">Download Presentation</a>
            </div>
        `;
  }
}

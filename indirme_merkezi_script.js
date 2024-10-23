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
                <a href="downloads/battery_tool.pdf" class="product-btn">View</a>
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
                <img src="certs/cert_9001.png" alt="TAB-9001">
                <h3>ISO 9001</h3>
                <a href="certs/TAB-9001-RECERT9-Certificate- ENG-22092021.pdf" target="_blank"  class="product-btn">view<alt="TAB 9001"></a>
            </div>
            <div class="certificates_item">
                <img src="certs/bisnode.png" alt="BONITETA">
                <h3>BONITETA ODLIČNOSTI</h3>
                
            </div>
            <div class="certificates_item">
                <img src="certs/cert_14001.png" alt="TAB-14001">
                <h3>ISO 14001</h3>
                <a href="certs/TAB-14001-RECERT8-Certificate -ENG-22092021.pdf" target="_blank"  class="product-btn">view<alt="TAB-14001"></a>
            </div>

             <div class="certificates_item">
                <img src="certs/SIRA2.png" alt="SIRA-CSA">
                <h3>ATEX CELLS</h3>
                 <a href="certs/ATEX_CELLS.pdf" target="_blank"  class="product-btn">view<alt="SIRA-CSA"></a>
            </div>
            <div class="certificates_item">
                <img src="certs/SIQ-1.png" alt="SIQ">
                <h3>ATEX Production Quality Assurance Notification</h3>
               <a href="certs/ATEX_Production_Quality_Assurance_Notification.pdf" target="_blank"  class="product-btn">view<alt="SIQ"></a>
            </div>
            <div class="certificates_item">
                <img src="certs/iecex.png" alt="IECEx-BATTERIES">
                <h3>IECEx BATTERIES</h3>
                 <a href="certs/IECEx_BATTERIES.pdf" target="_blank"  class="product-btn">view<alt="IECEx BATTERIES"></a>
            </div>
 <div class="certificates_item">
                <img src="certs/iecex.png" alt="IECEx-CELLS">
                <h3>IECEx CELLS</h3>
                 <a href="certs/IECEx_CELLS.pdf" target="_blank"  class="product-btn">view<alt="IECEx-CELLS"></a>
            </div>
             <div class="certificates_item">
                <img src="certs/ineris_new.png" alt="ineris">
                <h3>ATEX BATTERIES</h3>
                <a href="certs/ATEX_BATTERIES.pdf" target="_blank"  class="product-btn">view<alt="ineris"></a>
            </div>
           
          <div class="certificates_item">
                <img src="certs/smiatf.png" alt="IATF_16949">
                <h3>IATF 16949</h3>
                <a href="certs/IATF_16949.pdf.pdf" target="_blank"  class="product-btn">view<alt="IATF_16949"></a>
            </div>

        `;
  } else if (type === 'presentation') {
    contentArea.innerHTML = `
            <div class="presentation_item">
                <img src="images/presentation.jpg" alt="Presentation">
                <h3>Presentation</h3>
                <a href="https://online.fliphtml5.com/vvbpc/uuyb/" class="product-btn">View</a>
            </div>
        `;
  }
}
function anasayfaBtnHtml()
{
const indirmeButton = document.getElementById('anasayfaBtn');

// Butona click event listener ekle
indirmeButton.addEventListener('click', function (event) {

  window.location.href = '/Orko_Aku_web/';
});
}

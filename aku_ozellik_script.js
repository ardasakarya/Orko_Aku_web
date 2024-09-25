document.addEventListener('DOMContentLoaded', function () {
    // Akü bilgileri (id'ye göre eşleştirme)
    const akuData = {
        tab_magic: {
            imgSrc: 'starter_aku_img/tab_magic.png',
            title: 'TAB MAGIC',
            specs: [
                { feature: 'Kapasite', value: '75Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '720A' }
            ]
        },
        tab_agm: {
            imgSrc: 'starter_aku_img/tab_agm_stop&go.png',
            title: 'TAB AGM STOP&GO',
            specs: [
                { feature: 'Kapasite', value: '60Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '640A' }
            ]
        },
        tab_efb: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go.png',
            title: 'TAB EFB STOP&GO',
            specs: [
                { feature: 'Kapasite', value: '70Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '680A' }
            ]
        },
        tab_efb_tr: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go2.png',
            title: 'TAB EFB STOP&GO TRUCK',
            specs: [
                { feature: 'Kapasite', value: '90Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '850A' }
            ]
        },
        tab_hr: {
            imgSrc: 'starter_aku_img/tab_magic_hr.png',
            title: 'TAB HR - HOT REGION',
            specs: [
                { feature: 'Kapasite', value: '100Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '900A' }
            ]
        },
        tab_magic_tr: {
            imgSrc: 'starter_aku_img/tab_magic_truck.png',
            title: 'TAB MAGIC TRUCK',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '24V' },
                { feature: 'Soğuk Başlatma Gücü', value: '1200A' }
            ]
        },
        tab_oem: {
            imgSrc: 'starter_aku_img/tab_oem.png',
            title: 'TAB OEM',
            specs: [
                { feature: 'Kapasite', value: '50Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '500A' }
            ]
        },
        tab_polar: {
            imgSrc: 'starter_aku_img/tab_polar.png',
            title: 'TAB POLAR',
            specs: [
                { feature: 'Kapasite', value: '85Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '800A' }
            ]
        },
        tab_polar_tr: {
            imgSrc: 'starter_aku_img/tab_polar_truck.png',
            title: 'TAB POLAR TRUCK',
            specs: [
                { feature: 'Kapasite', value: '150Ah' },
                { feature: 'Voltaj', value: '24V' },
                { feature: 'Soğuk Başlatma Gücü', value: '1400A' }
            ]
        },
        tab_polar_blue: {
            imgSrc: 'starter_aku_img/tab_polar_blue.png',
            title: 'TAB POLAR BLUE',
            specs: [
                { feature: 'Kapasite', value: '70Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Soğuk Başlatma Gücü', value: '720A' }
            ]
        },
        tab_bci: {
            imgSrc: 'traksiyoner_aku_img/TAB-BCI.png',
            title: 'TAB BCI',
            specs: [
                { feature: 'Kapasite', value: '200Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_bs: {
            imgSrc: 'traksiyoner_aku_img/TAB-BS.png',
            title: 'TAB BS',
            specs: [
                { feature: 'Kapasite', value: '250Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_din: {
            imgSrc: 'traksiyoner_aku_img/TAB-DIN.png',
            title: 'TAB DIN',
            specs: [
                { feature: 'Kapasite', value: '300Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_ex: {
            imgSrc: 'traksiyoner_aku_img/TAB-EX.png',
            title: 'TABEX',
            specs: [
                { feature: 'Kapasite', value: '350Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_psq: {
            imgSrc: 'traksiyoner_aku_img/TAB-PSQ.png',
            title: 'TAB PSQ',
            specs: [
                { feature: 'Kapasite', value: '400Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_pzrm: {
            imgSrc: 'traksiyoner_aku_img/TAB-PzRM1.png',
            title: 'TAB PZRM',
            specs: [
                { feature: 'Kapasite', value: '500Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_pzv: {
            imgSrc: 'traksiyoner_aku_img/TAB-PzV.png',
            title: 'TAB PZV',
            specs: [
                { feature: 'Kapasite', value: '550Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        tab_pzvb: {
            imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
            title: 'TAB PZVB',
            specs: [
                { feature: 'Kapasite', value: '600Ah' },
                { feature: 'Voltaj', value: '48V' },
                { feature: 'Tip', value: 'Traction Akü' }
            ]
        },
        motion_agm: {
            imgSrc: 'monoblock_aku_img/MotionAGM.png',
            title: 'MOTION AGM',
            specs: [
                { feature: 'Kapasite', value: '50Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
        motion_gel: {
            imgSrc: 'monoblock_aku_img/MotionGel.png',
            title: 'MOTION GEL',
            specs: [
                { feature: 'Kapasite', value: '70Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
        motion_pasted: {
            imgSrc: 'monoblock_aku_img/MotionPasted.png',
            title: 'MOTION PASTED',
            specs: [
                { feature: 'Kapasite', value: '90Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
        motion_tubular: {
            imgSrc: 'monoblock_aku_img/MotionTubular.png',
            title: 'MOTION TUBULAR',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },

        ogi:{
         
            imgSrc: 'stasyoner_aku_img/ogi.png', 
            title: 'OGI',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
        opzs:{
             
            imgSrc: 'stasyoner_aku_img/opzs.png', 
            title: 'OPZS',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
        opzv: {
            
            imgSrc: 'stasyoner_aku_img/opzv.png', 
            title: 'OPZV',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
       topzs: {
             
            imgSrc: 'stasyoner_aku_img/topzs.png', 
            title: 'TOPZS',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        },
        ups:{
             
            imgSrc: 'stasyoner_aku_img/ups.png', 
            title: 'UPS',
            specs: [
                { feature: 'Kapasite', value: '110Ah' },
                { feature: 'Voltaj', value: '12V' },
                { feature: 'Tip', value: 'Monoblok Akü' }
            ]
        }
    };

    // URL'den ID'yi almak
    const params = new URLSearchParams(window.location.search);
    const akuId = params.get('id'); // 'id' parametresini al

    // Eğer geçerli bir ID varsa
    if (akuId && akuData[akuId]) {
        const akuDetails = akuData[akuId];

        // HTML'deki alanları doldur
        document.getElementById('akuImage').src = akuDetails.imgSrc;
        document.getElementById('akuTitle').textContent = akuDetails.title;

        // Özellik tablosunu doldur
        const tableBody = document.querySelector('#akuTable tbody');
        akuDetails.specs.forEach(spec => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${spec.feature}</td><td>${spec.value}</td>`;
            tableBody.appendChild(row);
        });
    } else {
        // Eğer geçersiz bir ID gelirse hata mesajı gösterilebilir
        document.getElementById('akuTitle').textContent = 'Akü bulunamadı';
    }
});

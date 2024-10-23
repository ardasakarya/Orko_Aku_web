

document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    // Akü bilgileri (id'ye göre eşleştirme)
    const akuData = {
        tab_magic: {
            imgSrc: 'starter_aku_img/tab_magic.png',
            title: 'TAB MAGIC',
            type: 'starter',
            description: "TAB Magic otomotiv aküsü, Ca/Ca üretim teknolojisindeki en son yenilikleri kullanarak, en yüksek soğuk çalıştırma performansı ve yüksek enerji tüketimine sahip en yeni nesil araçların ihtiyaç duyduğu üstün güvenilir gücü sağlar. SMF kapak, tam dökülme koruması sunar ve akünün ömrü boyunca tamamen bakım gerektirmez.",
            extraInfo: "Özellikler: Sızdırmaz kapak yapısı, daha fazla plaka sayısı sayesinde %30 daha iyi çalıştırma kabiliyeti, genişletilmiş metal teknolojisi ile daha iyi korozyon direnci ve daha uzun ömür sağlar. Seviye göstergesi (sihirli göz) anında durum kontrolü sağlar. Patlama koruması, aküye alev girişini engeller. Elektrik donanımı fazla olan araçlar için idealdir ve en yüksek kaliteye sahip bir aküdür.",



            specs: [
                { feature: 'Art. No.', value: ['1000694', '1000695', '1000696', '1000697', '1000698', '1000700', '1000701', '1000703', '1000862'] },
                { feature: 'DIN Marking', value: ['55401 SMF', '55510 SMF', '56249 SMF', '56649 SMF', '57510 SMF', '57549 SMF', '58514 SMF', '60044 SMF', '61002 SMF'] },
                { feature: 'Short Code', value: ['M54', 'M55H', 'M62', 'M66H', 'M75', 'M75H', 'M85', 'M100H', 'M110H'] },
                { feature: 'Ah (C20)', value: ['54', '55', '62', '66', '75', '78', '85', '100', '110'] },
                { feature: 'Box Type', value: ['L1B', 'L1', 'L2B', 'L2', 'L3B', 'L3', 'L4B', 'L5', 'L6'] },
                { feature: 'EN (A)', value: ['510', '560', '600', '640', '720', '750', '800', '900', '1000'] },
                { feature: 'LxWxH (mm)', value: ['207x175x175', '207x175x190', '242x175x175', '242x175x190', '278x175x175', '278x175x190', '315x175x175', '353x175x190', '394x175x190'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13'] },
                { feature: 'Layout', value: ['0', '0', '0', '0', '0', '0', '0', '0', '0'] },
                { feature: 'Weight (kg)', value: ['12.3', '12.8', '13.9', '15.0', '16.5', '17.5', '18.9', '22.5', '24.7'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['72/120', '72/100', '63/108', '63/90', '51/80', '51/80', '42/72', '36/60', '36/60'] },
                { feature: 'Remarks*', value: ['SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD'] },
              
            ]
        },


        tab_agm: {
            imgSrc: 'starter_aku_img/tab_agm_stop&go.png',
            title: 'TAB AGM STOP&GO',
            type: 'starter',
            description: "TAB AGM Stop&Go aküleri, gelişmiş Start/Stop fonksiyonu ve fren enerjisi geri kazanımı olan araçlar için tasarlanmış Valve Regulated Lead Acid (VRLA) akülerdir. VRLA AGM otomotiv aküsü, maksimum performansa ulaşan geliştirilmiş kurşun asit aküsüdür. Akü hücreleri, basınç tahliye valfi ile kapatılmıştır ve elektrolit Absorbed Glass Mat (AGM) ile sabitlenmiştir. Plaka yığınları, hücrelerde basınç altında tutulur.",
            extraInfo: "Özellikler: İç oksijen geri kazanımı sayesinde çok düşük su tüketimi. Aktif malzeme dökülmesini önleyerek standart akülere göre üç kat daha fazla döngü kabiliyeti sunar ve işlevselliğini kaybetmeden daha fazla deşarj edilebilir. Hücre hacminin %30'dan fazla daha iyi kullanımı sayesinde artırılmış marş gücü. Sürüş sırasında enerjinin daha hızlı geri kazanılması için yüksek hızda şarj kabulü. Plakaların her iki tarafına yapıştırılması daha iyi korozyon direnci sağlayarak daha uzun ömür sunar. Taşan hücrelerde olduğu gibi asit tabakalaşması yoktur. Patlama güvenliği – minimum patlayıcı gaz üretilir. Titreşim direnci. Kaza durumunda asit sızıntısı olmaz.",
            specs: [
                { feature: 'Art. No.', value: ['1000799', '1000800', '1000801', '1000802', '1000803'] },
                { feature: 'DIN Marking', value: ['L2 AGM', 'L3 AGM', 'L4 AGM', 'L5 AGM', 'L6 AGM'] },
                { feature: 'Short Code', value: ['AG60', 'AG70', 'AG80', 'AG95', 'AG105'] },
                { feature: 'Ah (C20)', value: ['60', '70', '80', '95', '105'] },
                { feature: 'Box Type', value: ['L2', 'L3', 'L4', 'L5', 'L6'] },
                { feature: 'EN (A)', value: ['680', '760', '800', '850', '950'] },
                { feature: 'LxWxH (mm)', value: ['242x175x190', '278x175x190', '315x175x190', '353x175x190', '394x175x190'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B13', 'B13', 'B13'] },
                { feature: 'Layout', value: ['0', '0', '0', '0', '0'] },
                { feature: 'Weight (kg)', value: ['17.9', '20.5', '23.2', '26.0', '29.2'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['63/90', '51/80', '42/60', '36/60', '36/60'] },
                { feature: 'Remarks*', value: ['AGM, H', 'AGM, H', 'AGM, H', 'AGM, H', 'AGM, H'] },
               
            ]

        },
        tab_efb: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go.png',
            title: 'TAB EFB STOP&GO',
            type: 'starter',
            description: "TAB EFB Stop&Go otomotiv aküleri, giriş seviyesi Start/Stop fonksiyonuna sahip araçlar için tasarlanmış Geliştirilmiş Taşma Aküleridir. EFB otomotiv aküleri, giriş seviyesi Start/Stop sistemine sahip en yeni nesil araçların talep ettiği üstün güvenilir gücü sağlayan Ca/Ca taşmalı akü üretim teknolojisindeki en son yenilikleri kullanır.",
            extraInfo: "Özellikler: Pozitif plakalar üzerindeki MFW fleece, aktif malzeme dökülmesini önler ve işlevselliğini kaybetmeden iki kat daha fazla dayanıklılık sağlar. Özel karbonlu genişletici ile sürüş sırasında enerjinin daha hızlı geri kazanılması için geliştirilmiş şarj kabulü. Genişletilmiş metal teknolojisi, daha iyi korozyon direnci sağlayarak daha uzun ömür sunar. Sızdırmaz kapak yapısı, devrilme koruması. Bakım gerektirmez. Seviye göstergesi (Sihirli Göz) anında durum kontrolü sağlar. Alev tutucu ile patlama koruması.",

            specs: [
                { feature: 'Art. No.', value: ['1000798', '1000797', '1000787', '1000788', '1000789', '1000794', '1000795', '1000790', '1000791', '1000792', '1000786', '1000793'] },
                { feature: 'DIN Marking', value: ['56568 EFB', '56569 EFB', '56088 EFB', '56588 EFB', '57088 EFB', '57029 EFB', '57024 EFB', '58014 EFB', '58088 EFB', '59088 EFB', '60518 EFB', '60519 EFB'] },
                { feature: 'Short Code', value: ['SG65J', 'SG65JX', 'SG60', 'SG65', 'SG70', 'SG70J', 'SG70JX', 'SG75', 'SG80', 'SG90', 'SG10J', 'SG10JX'] },
                { feature: 'Ah (C20)', value: ['65', '65', '60', '65', '70', '70', '70', '75', '80', '90', '105', '105'] },
                { feature: 'Box Type', value: ['D23', 'D23', 'L2', 'L3B', 'L3', 'D26', 'D26', 'L4B', 'L4', 'L5', 'D31', 'D31'] },
                { feature: 'EN (A)', value: ['600', '600', '640', '650', '760', '680', '680', '730', '800', '850', '900', '900'] },
                { feature: 'LxWxH (mm)', value: ['230x173x200/220', '230x173x200/220', '242x175x190', '278x175x175', '278x175x190', '259x175x200/221', '259x175x200/221', '315x175x175', '315x175x190', '353x175x190', '306x173x200/221', '306x173x200/221'] },
                { feature: 'BHD', value: ['B01', 'B01', 'B13', 'B13', 'B13', 'B1', 'B1', 'B13', 'B13', 'B13', 'B01', 'B01'] },
                { feature: 'Layout', value: ['0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1'] },
                { feature: 'Weight (kg)', value: ['17.1', '17.1', '16.6', '16.7', '19.2', '19.6', '19.6', '18.2', '21.9', '24.6', '23.3', '23.3'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['60/90', '60/90', '63/90', '51/80', '51/80', '48/80', '48/80', '42/72', '42/60', '36/60', '42/70', '42/70'] },
                { feature: 'Remarks*', value: ['SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H', 'SMF, ME, H'] },
                
            ]

        },
        tab_efb_tr: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go2.png',
            title: 'TAB EFB STOP&GO TRUCK',
            type: 'starter',
            description: "Gelişmiş ticari araç pazarı, elektrik gücüne olan talebi artırmaktadır. Yeni araç konfor ve güvenlik özellikleri daha fazla enerji talep etmektedir. Sık ve düzensiz duraklamalar, yeterli marş gücü rezervine sahip ve çok kısa sürede şarj olabilen bir güç kaynağını gerektirir. EFB Stop & Go kamyon akülerimiz, bu enerjiyi güvenilir bir şekilde sağlamak üzere tasarlanmıştır. Benzersiz hücre tasarımımız, elektrolitin dikey şekilde karıştırılmasını sağlayarak aktif malzemenin genel verimliliğini artırır.",
            extraInfo: "Özellikler: EMS - Elektrolit Karıştırma Sistemi. Euro 6 kamyonlar için uygun (şasi sonu kurulumlar için uygundur). Artırılmış kapasite. Duraklamalar sırasında artırılmış enerji. Yeni pozitif aktif kütle bileşimi, derin döngülere karşı daha yüksek direnç sağlar. Geliştirilmiş dinamik şarj kabulü. Yeni ayırıcılar. Kısmi şarj durumunda çalışma kabiliyeti. Daha uzun akü ömrü.",

            specs: [
                { feature: 'Art. No.', value: ['1001918', '1001778'] },
                { feature: 'DIN Marking', value: ['69032 EFB', '74027 EFB'] },
                { feature: 'Short Code', value: ['SG19', 'SG24'] },
                { feature: 'Ah (C20)', value: ['190', '240'] },
                { feature: 'Box Type', value: ['B', 'C'] },
                { feature: 'EN (A)', value: ['1100', '1250'] },
                { feature: 'LxWxH (mm)', value: ['513x222x194/221', '517x275x214/241'] },
                { feature: 'BHD', value: ['B0', 'B0'] },
                { feature: 'Layout', value: ['3', '3'] },
                { feature: 'Weight (kg)', value: ['45.3', '58.6'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['21/28', '18/24'] },
                { feature: 'Remarks*', value: ['SMF, ME, H, HD, EMS', 'SMF, ME, H, HD, EMS'] },
            
            ]

        },


        tab_magic_tr: {
            imgSrc: 'starter_aku_img/tab_magic_truck.png',
            title: 'TAB MAGIC TRUCK',
            type: 'starter',
            description: "TAB Magic Truck ticari araç aküleri, Ca/Ca üretim teknolojisindeki en son yenilikleri kullanarak, en yüksek soğuk çalıştırma performansı ve yüksek enerji tüketimine sahip en yeni nesil ticari araçların talep ettiği üstün güvenilir gücü sağlar. SMF kapak, tam dökülme koruması sunar ve akünün ömrü boyunca tamamen bakım gerektirmez.",
            extraInfo: "Özellikler: Sızdırmaz kapak yapısı. Genişletilmiş metal teknolojisi, daha iyi korozyon direnci sağlayarak daha uzun ömür sunar. Seviye göstergesi (sihirli göz) anında durum kontrolü sağlar. Patlama koruması, aküye alev girişini engeller. Elektrik donanımı fazla olan araçlar için idealdir. En yüksek kaliteye sahip bir aküdür.",

            specs: [
                { feature: 'Art. No.', value: ['1000493', '1001224', '1000497', '1001756', '1001474', '1000249', '1000391'] },
                { feature: 'DIN Marking', value: ['63544 SMF', '64030 SMF', '65048 SMF', '65018 SMF', '68032 SMF', '70027 SMF', '72527 SMF'] },
                { feature: 'Short Code', value: ['TM13M', 'TM14', 'TM15M', 'TM15', 'TM18', 'TM20', 'TM22'] },
                { feature: 'Ah (C20)', value: ['135', '140', '150', '150', '180', '200', '225'] },
                { feature: 'Box Type', value: ['MAC110', 'A', 'MAC110', 'B', 'B', 'C', 'C'] },
                { feature: 'EN (A)', value: ['850', '850', '1000', '950', '1100', '1200', '1300'] },
                { feature: 'LxWxH (mm)', value: ['509x175x196/218', '507x188x200/222', '509x175x196/218', '513x222x194/216', '513x222x194/216', '517x275x214/236', '514x275x214/236'] },
                { feature: 'BHD', value: ['B3', 'B0', 'B3', 'B0', 'B0', 'B0', 'B0'] },
                { feature: 'Layout', value: ['3', '3', '3', '3', '3', '3', '3'] },
                { feature: 'Weight (kg)', value: ['33.3', '35.6', '36.9', '39.6', '43.1', '52.7', '56.1'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['24/40', '24/35', '24/40', '21/35', '21/28', '18/24', '18/24'] },
                { feature: 'Remarks*', value: ['SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD, EMS', 'SMF, ME, H, HD, EMS', 'SMF, ME, H, HD, EMS', 'SMF, ME, H, HD, EMS'] },
               
            ]
        },
        tab_oem: {
            imgSrc: 'starter_aku_img/tab_oem.png',
            title: 'TAB OEM',
            type: 'starter',
            description: "TAB OEM aküleri, araç üreticilerinin orijinal ekipman standartlarına uygun olarak üretilmiştir. Bu aküler, en son teknolojilerle donatılmış olup, otomobillerin özel ihtiyaçlarına göre tasarlanmış yüksek performans ve güvenilirlik sunan çözümler sağlar.",
            extraInfo: "Özellikler: Yüksek marş gücü ve güvenilir performans. Araç üreticilerinin orijinal ekipman gereksinimlerine tam uyum sağlar. Uzun ömürlü kullanım ve düşük bakım ihtiyacı. Gelişmiş korozyon direnci ve titreşim dayanıklılığı sunar. Çeşitli iklim koşullarında yüksek verimlilik sağlar.",

            specs: [
                { feature: 'Art. No.', value: ['1001228', '1001229', '1001230', '1001231', '1001227'] },
                { feature: 'DIN Marking', value: ['55512 SMF', '57012', '57512', '59249', '61038'] },
                { feature: 'Short Code', value: ['OEM55V', 'OEM70A', 'OEM75T', 'OEM92T', 'OEM105A'] },
                { feature: 'Ah (C20)', value: ['55', '70', '75', '92', '105'] },
                { feature: 'Box Type', value: ['L1', 'L3', 'L3', 'L4', 'L5'] },
                { feature: 'EN (A)', value: ['560', '640', '640', '760', '880'] },
                { feature: 'LxWxH (mm)', value: ['207x175x190', '278x175x190', '278x175x190', '315x175x190', '353x175x190'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B13', 'B13', 'B13'] },
                { feature: 'Layout', value: ['0', '0', '0', '0', '0'] },
                { feature: 'Weight (kg)', value: ['15.0', '17.6', '17.6', '21.0', '23.4'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['72/100', '51/80', '51/80', '42/60', '36/60'] },
                { feature: 'Remarks*', value: ['SMF, ME, H, VW', 'KH, HD, AGCO', 'KH, HD, THERMO KING', 'KH, HD, THERMO KING', 'KH, HD, AGCO'] },
              
            ]
        },
        tab_polar: {
            imgSrc: 'starter_aku_img/tab_polar.png',
            title: 'TAB POLAR',
            type: 'starter',
            description: "TAB Polar, Ca/Ca genişletilmiş metal teknolojisi kullanılarak üretilen bir aküdür. TAB Polar, mükemmel güç, kapasite, soğuk çalıştırma performansı ve güvenilirlik sunan gerçek bir çok yönlü üründür. Her sınıftan araçlar için yüksek kaliteli bir üründür.",
            extraInfo: "Özellikler: Daha yüksek çalıştırma kabiliyeti. Aşırı iklim koşullarında güvenilir çalıştırma sağlar.",

            specs: [
                { feature: 'Art. No.', value: ['1000823', '1000825', '1000824', '1000826', '1000861', '1000864', '1000876', '1000865', '1000914', '1000866', '1000881', '1000867', '1000897', '1000868', '1000878', '1000884', '1000872', '1000934', '1000873', '1000890', '1000888', '1000875', '1000901', '1000907', '1000930', '1000942', '1000923', '1000877', '1000905', '1000931', '1000943', '1000932', '1000924', '1000933', '1000944', '1000935', '1000945', '1000936', '1000925', '1000937', '1000926', '1000941', '1000947', '1000920', '1000928', '1000909'] },
                { feature: 'DIN Marking', value: ['', '', '', '', '54506', '54002 SMF', '54003 SMF', '54502 SMF', '54559 SMF', '55010 SMF', '55001 SMF', '55509 SMF', '55559 SMF', '56008 SMF', '56013 SMF', '56309 SMF', '57309 SMF', '56638 SMF', '57412 SMF', '57413 SMF', '59249 SMF', '59220 SMF', '58822 SMF', '60038 SMF', '53520 SMF', '53522 SMF', '53521 SMF', '54520 SMF', '54522 SMF', '54523/84 SMF', '54524/51 SMF', '55523/84 SMF', '55524/51 SMF', '56068 SMF', '56069 SMF', '56568 SMF', '56569 SMF', '57029 SMF', '57024 SMF', '57529 SMF', '	57524 SMF', '59518 SMF', '59519 SMF', 'BCI 31P SMF', 'BCI 31S SMF', 'BCI 31S SMF-D'] },
                { feature: 'Short Code', value: ['U1R-25', 'U1-25', 'U1R-32', 'U1-32', 'P45', 'S40', 'S40X', 'S45', 'P45H', 'S50H', 'P50', 'S55', 'P55H', 'S60H', 'S60HX', 'P63', 'S73', 'P66H', 'S74H', 'S74HX', 'P92H', 'S92', 'S90H', 'S10H', 'S35J', 'S35JX', 'S35JP', 'S45J', 'S45JX', 'S45JA', 'S45JAX', 'S55JA', 'S55JAX', 'S60J', 'S60JX', 'S65J', 'S65JX', 'S70J', 'S70JX', 'S75J', 'S75JX', 'S95J', 'S95JX', 'P90BCIP', 'P100BCIS', 'S110BCID'] },
                { feature: 'Ah (C20)', value: ['25', '25', '32', '32', '45', '40', '40', '45', '45', '50', '50', '55', '55', '60', '60', '63', '73', '66', '74', '74', '92', '92', '92', '100', '35', '35', '35', '45', '45', '45', '45', '55', '55', '60', '60', '65', '65', '70', '70', '75', '75', '95', '95', '90', '100', '110'] },
                { feature: 'Box Type', value: ['U1', 'U1', 'U1', 'U1', 'L0', 'L1B', 'L1B', 'L1B', 'L1', 'L1', 'L2B', 'L2B', 'L2', 'L2', 'L2', 'L3B', 'L3B', 'L3', 'L3', 'L3', 'L4', 'L5B', 'L5', 'L5', 'B19', 'B19', 'B19', 'B19', 'B19', 'B24', 'B24', 'B24', 'B24', 'D23', 'D23', 'D23', 'D23', 'D26', 'D26', 'D26', 'D26', 'D31', 'D31', 'BCI 31', 'BCI 31', 'BCI 31'] },
                { feature: 'EN (A)', value: ['250', '250', '350', '350', '400', '360', '360', '420', '400', '450', '450', '500', '500', '600', '600', '600', '630', '600', '680', '680', '800', '800', '800', '850', '270', '270', '270', '360', '360', '360', '360', '490', '490', '600', '600', '650', '600', '700', '700', '740', '740', '850', '850', '800', '900', '1000'] },
                { feature: 'LxWxH (mm)', value: ['196x127x159/185', '196x127x159/185', '196x127x159/185', '196x127x159/185', '175x175x190', '207x175x175', '207x175x175', '207x175x175', '207x175x190', '207x175x190', '242x175x175', '242x175x175', '242x175x190', '242x175x190', '242x175x190', '278x175x175', '278x175x175', '278x175x190', '278x175x190', '278x175x190', '315x175x190', '353x175x175', '353x175x190', '353x175x190', '196x128x202/223', '196x128x202/223', '196x134x202/223', '196x134x202/223', '196x134x202/223', '236x128x202/223', '236x128x202/223', '236x128x202/223', '236x128x202/223', '230x173x200/220', '230x173x200/220', '230x173x200/220', '230x173x200/220', '259x175x200/221', '259x175x200/221', '259x175x200/221', '259x175x200/221', '306x173x220/221', '306x173x200/221', '330x173x218/239', '330x173x218/239', '330x173x218/237'] },
                { feature: 'BHD', value: ['B0', 'B0', 'B0', 'B0', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B0', 'B0', 'B01', 'B01', 'B01', 'B0', 'B0', 'B0', 'B0', 'B01', 'B01', 'B01', 'B01', 'B1', 'B1', 'B1', 'B1', 'B01', 'B01', 'B1', 'B1', 'B1'] },
                { feature: 'Layout', value: ['0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0', '0'] },
               { feature: 'Weight (kg)', value: ['7.2', '7.2', '8.0', '8.0', '10.5', '10.7', '10.7', '11.2', '11.7', '12.2', '12.7', '13.3', '13.9', '14.4', '14.4', '15.5', '15.9', '16.1', '17.2', '17.2', '20.0', '20.5', '21.0', '22.4', '9.4', '9.4', '9.4', '10.6', '10.6', '11.9', '11.9', '13.5', '13.5', '14.9', '14.9', '15.5', '15.5', '17.3', '17.3', '17.8', '17.8', '20.9', '20.9', '23.4', '24.3', '26.2'] },
               { feature: 'PCS/pallet (EUR/CNT)', value: ['96/128', '96/128', '96/128', '96/128', '72/120', '72/120', '72/120', '72/120', '72/100', '72/100', '63/108', '63/108', '63/90', '63/90', '63/90', '51/80', '51/80', '51/80', '51/80', '51/80', '42/60', '36/72', '36/60', '36/60', '96/128', '96/128', '96/128', '96/128', '96/128', '72/96', '72/96', '72/96', '72/96' ,'60/90', '60/90', '60/90', '60/90', '48/80', '48/80', '48/80', '48/80', '42/70', '42/70', '42/60', '42/60', '42/60'] },
               { feature: 'Remarks*', value: ['SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'K', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, HD', 'SMF, H, JIS', 'SMF, H, JIS', 'SMF, H, JIS', 'SMF, H, JIS, A', 'SMF, H, JIS, A', 'SMF, H, JIS, A', 'SMF, H, JIS, A', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD', 'SMF, ME, H, HD, P', 'SMF, ME, H, HD, S', 'SMF, ME, H, HD, DP'] }


            ]
        },
        tab_polar_tr: {
            imgSrc: 'starter_aku_img/tab_polar_truck.png',
            title: 'TAB POLAR TRUCK',
            type: 'starter',
            description: "TAB Polar Truck, elektrik donanımı giriş seviyesinde olan ticari araçlar için, ancak üstün çalıştırma, performans ve güvenilirlik talep eden bir akü olarak tasarlanmıştır. TAB Polar Truck, Sb/Ca genişletilmiş metal teknolojisi kullanılarak üretilen bir aküdür.",
            extraInfo: "Özellikler: Artırılmış çalıştırma kabiliyeti. Düşük su tüketimi ile daha uzun ömür. Geliştirilmiş korozyon direnci. Yüksek performans ve güvenilirlik sağlar. Aşırı iklim koşullarında güvenilir çalıştırma sunar. Bakım gerektirmez.",

            specs: [
                { feature: 'Art. No.', value: ['1000291', '1000293', '1001908', '1000292', '1003036', '1001912', '1003038', '1027929', '1001915', '1000479', '1000480', '1000482', '1000495', '1027877', '1003040', '1003041', '1000013'] },
                { feature: 'DIN Marking', value: ['61028', '61028', '61044', '62512', '63530', '63544', '63545', '64323', '65048', '67018', '67019', '68032', '69032', '70032', '70027', '72527', '6TN'] },
                { feature: 'Short Code', value: ['TR11', 'TR11P', 'TR11M', 'TR12H', 'TR13A', 'TR13M', 'TR13MR', 'TR14M', 'TR15M', 'TR17', 'TR17R', 'TR18', 'TR19', 'TR20B', 'TR20C', 'TR22', 'TR11D7'] },
                { feature: 'Ah (C20)', value: ['110', '110', '110', '125', '135', '135', '135', '143', '150', '170', '170', '180', '190', '200', '200', '225', '110'] },
                { feature: 'Box Type', value: ['60528', '60528', 'MAC110', '62512', 'A', 'MAC110', 'MAC110', 'MAC143', 'MAC110', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'D7'] },
                { feature: 'EN (A)', value: ['800', '800', '720', '800', '850', '850', '850', '900', '1000', '1050', '1050', '1100', '1200', '1200', '1200', '1300', '740'] },
                { feature: 'LxWxH (mm)', value: ['345x172x218/238', '345x175x218/238', '509x175x182/208', '345x172x269/289', '513x189x194/220', '509x175x182/208', '509x175x182/208', '509x216x184/210', '509x175x182/208', '512x222x194/221', '512x222x194/221', '512x222x194/221', '512x222x194/221', '512x222x194/221', '518x273x214/241', '518x273x214/241', '282x269x208/230'] },
                { feature: 'BHD', value: ['B0', 'B1', 'B3', 'B0', 'B0', 'B3', 'B3', 'B3', 'B3', 'B0', 'B3', 'B0', 'B0', 'B0', 'B0', 'B0', 'B0'] },
                { feature: 'Layout', value: ['0', '0', '3', '0', '3', '3', '4', '3', '3', '3', '4', '3', '3', '3', '3', '3', '2'] },
                { feature: 'Weight (kg)', value: ['26.5', '26.5', '31.1', '31.8', '35.6', '33.3', '33.3', '38.7', '36.9', '42.7', '42.7', '43.3', '43.3', '45.0', '52.7', '56.1', '30.8'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['36/48', '36/48', '24/40', '24/36', '24/35', '24/40', '24/40', '21/35', '24/40', '21/28', '21/28', '21/28', '21/28', '21/28', '18/24', '18/24', '24/36'] },
                { feature: 'Remarks*', value: ['H', 'H', 'H, HD', 'H', 'H, HD', 'H, HD', 'H, HD', 'H, HD', 'H, HD', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD'] },
               
            ]
        },

        tab_bci: {
            type: 'traksiyoner_bci',
            imgSrc: 'traksiyoner_aku_img/TAB-BCI.png',
            title: 'TAB BCI',
            description: "TAB BCI hücreleri, ABD batarya boyutlarıyla uyumluluğu ve Tübüler Teknoloji'nin tüm avantajlarını birleştiren bir çözümdür. TAB BCI Aküleri forkliftler, temizlik makineleri ve diğer elektrikli araçlarda kullanılabilir.",
            extraInfo: "Özellikler: ABD batarya boyutlarına uyumlu, forkliftler ve elektrikli araçlar için uygun, tübüler plaka teknolojisi.",
            specs: [
                //traksiyoner
            ]
        },
        tab_bs: {
            type: 'traksiyoner_bs',
            imgSrc: 'traksiyoner_aku_img/TAB-BS.png',
            title: 'TAB BS',
            description: "Şirketinizin çok önemli üretim bölümlerinden biri dahili lojistiktir. 55 yılı aşkın süredir en zorlu kullanıcıları memnun eden TAB motive güç akülerimizi tanıtıyoruz. Bireysel hücreleri (2V) farklı voltaj, kapasite ve boyutlarda elektrikli makinelerin her türüne uygun olarak aküler haline getiriyoruz. Geniş üretim programımız, EN60254 – 1,2 ve IEC 254 – 1,2'ye göre DIN (PzS) hücreleri kapsamaktadır.",
            extraInfo: "Özellikler: Yüksek kapasite, uzun ömür, titreşimlere karşı dayanıklılık, kısa şarj süreleri, düşük damıtılmış su tüketimi, kolay bakım. Uygulama alanları: Forkliftler, maden lokomotifleri vb.",

            specs: [
                //traksiyoner
            ]
        },
        tab_din: {
            type: 'traksiyoner_din',
            imgSrc: 'traksiyoner_aku_img/TAB-DIN.png',
            title: 'TAB DIN',
            description: "Şirketinizin çok önemli üretim bölümlerinden biri dahili lojistiktir. 55 yılı aşkın süredir en zorlu kullanıcıları memnun eden TAB motive güç akülerimizi tanıtıyoruz. Bireysel hücreleri (2V) farklı voltaj, kapasite ve boyutlarda elektrikli makinelerin her türüne uygun olarak aküler haline getiriyoruz. Geniş üretim programımız, EN60254 – 1,2 ve IEC 254 – 1,2'ye göre DIN (PzS) hücreleri kapsamaktadır.",
            extraInfo: "Özellikler: Yüksek kapasite, uzun ömür, titreşimlere karşı dayanıklılık, kısa şarj süreleri, düşük damıtılmış su tüketimi, kolay bakım. Uygulama alanları: Forkliftler, maden lokomotifleri vb.",
            specs: [
                //traksiyoner
            ]
        },
        tab_ex: {
            type: 'traksiyoner',
            imgSrc: 'traksiyoner_aku_img/TAB-EX.png',
            title: 'TABEX',
            description: "TAB-EX, zorlu çalışma koşulları ve yüksek enerji talepleri için özel olarak tasarlanmış bir aküdür. Bu akü, yüksek performans ve dayanıklılık sağlayarak uzun ömürlü kullanım sunar. Endüstriyel uygulamalar için ideal bir seçimdir.",
            extraInfo: "Özellikler: Yüksek kapasite, titreşimlere karşı dayanıklılık, kısa şarj süreleri, düşük su tüketimi, bakım gerektirmeyen yapı, aşırı sıcaklıklarda güvenilir performans, yüksek çevrim ömrü.",
            specs: [
                //traksiyoner
            ]
        },
        tab_psq: {
            type: 'traksiyoner_psq',
            imgSrc: 'traksiyoner_aku_img/TAB-PSQ.png',
            title: 'TAB PSQ',
            description: "TAB POWER SQUARE aküleri, geleneksel kurşun-asit akülere kıyasla daha fazla güç ve daha uzun çalışma süresi sunmak üzere tasarlanmıştır ve ağır hizmet uygulamalarının ihtiyaçlarını karşılamak için mükemmel bir seçimdir. Kare pozitif tübüler plaka tasarımı, daha fazla aktif malzeme yüzey alanının daha yüksek özgül ağırlıklı elektrolit ile temas etmesini sağlar ve bu, geleneksel kurşun-asit akülerle kıyaslandığında daha fazla güç ve daha uzun çalışma süresi sağlar.",
            extraInfo: "Özellikler: Ağır hizmet uygulamaları için uygundur. Standart hücre tasarımında artan kapasite. Pozitif plakalar üzerinde daha fazla aktif malzeme. Standart yuvarlak tüp tasarımına kıyasla daha büyük plaka yüzeyi nedeniyle daha fazla güç. Daha yüksek özgül ağırlıklı elektrolitle daha fazla pozitif aktif malzeme yüzey alanı temas eder. Plakalar, deşarj döngüsü boyunca daha yüksek voltaj seviyelerini sürdürebilir. Plakaların daha yüksek dayanıklılığı. Forkliftin bir döngüde daha uzun çalışma süresi - daha az yedek batarya ihtiyacı. Özel şarj cihazları, daha hızlı özelleştirilmiş şarj profilleri ile fırsat şarjına da olanak tanır. Sağlam plaka yapısına dayalı olarak uzatılmış döngü ömrü.",
            specs: [
                //traksiyoner
            ]
        },
        tab_pzrm: {
            type: 'traksiyoner_pzrm',
            imgSrc: 'traksiyoner_aku_img/TAB-PzRM1.png',
            title: 'TAB PZRM',
            description: "PzS teknolojisi ile tübüler plakalar kullanılarak ve ayarlanmış bir şarj rejimiyle tasarlanan hücre yapısı, sulama aralıklarını uzatır. TAB PzRM hücreleri, EN60254-1 ve IEC254-1 standartlarına göre üretilir ve test edilir.",
            extraInfo: "Özellikler: Su dolum aralığı verimli bir şekilde uzatılır. Azaltılmış su tüketimi. Düşük bakım ve azaltılmış işletme maliyetleri. %50 ila %80 daha az gaz salınımı ve havalandırma gereksinimi. %20 ila %30 daha az şarj süresi. %10 ila %20 daha düşük enerji tüketimi ile maliyet tasarrufu. Düşük işletme sıcaklıkları.",

            specs: [
                //traksiyoner
            ]
        },
        tab_pzv: {
            type: 'traksiyoner_pzv',
            imgSrc: 'traksiyoner_aku_img/TAB-PzV.png',
            title: 'TAB PZV',
            description: "Bakım gerektirmeyen TAB PzV VRLA Jel motive güç aküleri son derece gelişmiş çekiş aküleridir. Sızdırmaz TAB PzV aküleri, EN 60254-2 standardına uygun olarak VRGLA Jel teknolojisiyle üretilmektedir. Bu aküler, forkliftler ve temizlik makineleri gibi elektrikli cihazlarda kullanılabilir.",
            extraInfo: "Özellikler: Bakım gerektirmez. Egzoz borularına entegre edilmiş valfler, korozif gaz salınımını önler. Son derece düşük kendi kendine deşarj. Çalışma sırasında son derece düşük gaz salınımı. Bakım hataları en aza indirilmiştir. Hücre hasarında elektrolit sızıntısı olmaz. Sızıntı nedeniyle kirlenme veya korozyon meydana gelmez.",

            specs: [
                //traksiyoner
            ]
        },
        tab_pzvb: {
            type: 'traksiyoner_pzvb',
            imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
            title: 'TAB PZVB',
            description: "Bakım gerektirmeyen TAB PzVB VRLA Jel motive güç aküleri son derece gelişmiş çekiş aküleridir. Sızdırmaz TAB PzVB aküleri, EN 60254-2 standardına uygun olarak VRGLA Jel teknolojisiyle üretilmektedir. Bu aküler, forkliftler ve temizlik makineleri gibi elektrikli cihazlarda kullanılabilir.",
            extraInfo: "Özellikler: Bakım gerektirmez. Egzoz borularına entegre edilmiş valfler, korozif gaz salınımını önler. Son derece düşük kendi kendine deşarj. Çalışma sırasında son derece düşük gaz salınımı. Bakım hataları en aza indirilmiştir. Hücre hasarında elektrolit sızıntısı olmaz. Sızıntı nedeniyle kirlenme veya korozyon meydana gelmez.",
            specs: [
                //traksiyoner
            ]
        },
        motion_agm: {
            type: 'monoblock',
            imgSrc: 'monoblock_aku_img/MotionAGM.png',
            title: 'MOTION AGM',
            description: "TAB Motion AGM, pozitif macunlu plakalara (yerçekimi ile döküm) sahip, AGM (Absorpsiyon Cam Elyafı) teknolojisiyle üretilen VRLA (Valf Ayarlı Kurşun Asit) aküsüdür.",
            extraInfo: "Özellikler: Sulu aküye kıyasla %30 daha yüksek enerji yoğunluğu, çok düşük öz deşarj oranı, korozif egzoz yok (gıda ve ilaç endüstrisine uygun), sağlam tasarım, darbe ve titreşim dirençli, düşük şarj faktörü (1.08), elektrolit AGM içinde hapsedilmiş (gövde hasar görse bile sızıntı olmaz), yüksek çalıştırma performansı. Uygulamalar: Karavanlar ve motorlu evler, tekneler, tekerlekli sandalyeler, temizlik makineleri, alarm sistemleri, UPS ve PV sistemleri.",
            specs: [
                { feature: 'Art. No.', value: ['1000569', '1000570', '1000572', '1000574', '1000577'] },
                { feature: 'Short Code', value: ['45 AGM', '55 AGM', '60 AGM', '70 AGM', '90 AGM'] },
                { feature: 'C100 (Ah)', value: ['65', '75', '85', '100', '115'] },
                { feature: 'C20 (Ah)', value: ['60', '70', '80', '95', '105'] },
                { feature: 'C5 (Ah)', value: ['45', '55', '60', '70', '90'] },
                { feature: 'Box Type', value: ['L2', 'L3', 'L4', 'L5', 'L6'] },
                { feature: 'Voltage (V)', value: ['12', '12', '12', '12', '12'] },
                { feature: 'LxWxH (mm)', value: ['242x175x190', '278x175x190', '315x175x190', '353x175x190', '394x175x190'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B13', 'B13', 'B13'] },
                { feature: 'Layout', value: ['0', '0', '0', '0', '0'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['63/90', '48/80', '42/60', '36/60', '36/60'] },
                { feature: 'Weight (kg)', value: ['17.9', '20.5', '23.2', '26.0', '29.2'] }
            ]
        },
        motion_gel: {
            type: 'monoblock',
            imgSrc: 'monoblock_aku_img/MotionGEL.png',
            title: 'MOTION GEL',
            description: "TAB Motion Gel, pozitif macunlu plakalara (yerçekimi ile döküm) sahip, elektroliti jel formunda olan VRLA (Valf Ayarlı Kurşun Asit) aküsüdür. Gövdesi güçlendirilmiş PP malzemeden yapılmıştır ve bu da aküyü güvenilir, bakım gerektirmeyen bir genel kullanım çözümü haline getirir.",
            extraInfo: "Özellikler: Tamamen bakım gerektirmez - kur ve unut, çok düşük öz deşarj oranı, elektrolit jel formundadır (elektrolit tabakalaşmasını önler, dökülmeye karşı korumalı), aylık %2'den az öz deşarj oranı ile taşıma ve depolama sırasında daha az sorun çıkarır, korozif egzoz yok (gıda ve ilaç endüstrisine uygun), sağlam tasarım, darbe ve titreşim dirençli. Uygulamalar: Karavanlar ve motorlu evler, tekneler, temizlik makineleri, elektrikli araçlar, güneş enerjisi sistemleri, UPS sistemleri.",
            specs: [
                { feature: 'Art. No.', value: ['1000807', '1000808', '1029094', '1000810', '1000811', '1000813', '1000812'] },
                { feature: 'Short Code', value: ['50 Gel', '70 Gel', '75 Gel', '105 Gel', '130 Gel', '180 Gel', 'Golf Cart Gel'] },
                { feature: 'C100 (Ah)', value: ['70', '90', '100', '140', '165', '235', '235'] },
                { feature: 'C20 (Ah)', value: ['60', '80', '85', '125', '150', '210', '210'] },
                { feature: 'C5 (Ah)', value: ['50', '70', '75', '105', '130', '180', '180'] },
                { feature: 'Box Type', value: ['L3', 'L5', '60528', '62512', 'B', 'C', 'Golf Cart'] },
                { feature: 'Voltage (V)', value: ['12', '12', '12', '12', '12', '12', '6'] },
                { feature: 'LxWxH (mm)', value: ['278x175x190', '353x175x190', '352x175x211/232', '345x173x264/285', '509x223x195/222', '518x273x214/240', '243x189x252/273'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B1', 'B0', 'B0', 'B0', 'B0'] },
                { feature: 'Layout', value: ['0', '0', '1', '0', '3', '3', '0'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['51/80', '36/60', '36/48', '36/48', '21/35', '18/24', '36/48'] },
                { feature: 'Weight (kg)', value: ['21.2', '25.8', '28.4', '37.9', '50.5', '68.3', '30.0'] }
            ]
        },
        motion_pasted: {
            type: 'monoblock',
            imgSrc: 'monoblock_aku_img/MotionPasted.png',
            title: 'MOTION PASTED',
            description: "TAB Motion Pasted, pozitif macunlu plakalı (genişletilmiş veya yerçekimi ile döküm) sulu tip küçük çekiş aküsüdür.",
            extraInfo: "Özellikler: Mükemmel titreşim direnci, yüksek deşarj kapasitesi, zor çalışma koşullarında yüksek performans, ekonomik ve güvenilir. Uygulamalar: Tekerlekli sandalyeler, kamyon uygulamaları, karavanlar ve motorlu evler, akülü arabalar, tekneler, temizlik makineleri, güneş enerjisi sistemleri.",
            specs: [
                { feature: 'Art. No.', value: ['1000782', '1000783', '1000784', '1000769', '1000761', '1000766', '1000763', '1000764', '1000765'] },
                { feature: 'Short Code', value: ['50P', '60P', '85P', '80P', '105P', '110P', '110P MAC', '150P', '190P'] },
                { feature: 'C100 (Ah)', value: ['70', '80', '115', '115', '125', '155', '150', '190', '245'] },
                { feature: 'C20 (Ah)', value: ['60', '75', '105', '105', '120', '140', '140', '180', '225'] },
                { feature: 'C5 (Ah)', value: ['50', '60', '85', '80', '105', '110', '110', '150', '190'] },
                { feature: 'Box Type', value: ['L2', 'L3', 'L5', '59518', '60528', '62512', 'MAC110', 'B', 'C'] },
                { feature: 'Voltage (V)', value: ['12', '12', '12', '12', '12', '12', '12', '12', '12'] },
                { feature: 'LxWxH (mm)', value: ['242x175x190', '278x175x190', '353x175x190', '312x175x212', '344x172x212/234', '344x172x262/284', '509x175x182/208', '512x223x194/221', '518x273x214/241'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B13', 'B0', 'B0', 'B0', 'B0', 'B0', 'B0'] },
                { feature: 'Layout', value: ['0', '0', '0', '0', '0', '0', '3', '3', '3'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['63/90', '51/80', '36/60', '42/70', '36/48', '24/36', '24/40', '21/35', '18/24'] },
                { feature: 'Weight (kg)', value: ['16.6', '19.2', '24.6', '23.3', '26.5', '31.8', '34.3', '43.3', '56.1'] }
            ]
        },
        motion_tubular: {
            type: 'monoblock',
            imgSrc: 'monoblock_aku_img/MotionTubular.png',
            title: 'MOTION TUBULAR',
            description: "TAB Motion Tubular, pozitif borulu plakalara sahip sulu tip küçük çekiş aküsüdür.",
            extraInfo: "Özellikler: Serbest elektrolit ile premium borulu plaka yapısı uzun kullanım ömrü sağlar, yüksek deşarj kapasitesi, zor çalışma koşullarında mükemmel çözüm, güvenilir ve dayanıklı - 1200 çevrim ömrü sunar. Uygulamalar: Golf arabaları, temizlik makineleri, tekerlekli sandalyeler, mobil yükseltilmiş çalışma platformları, elektrikli platform kamyonları, güneş enerjisi sistemleri.",
            specs: [
                { feature: 'Art. No.', value: ['1000253', '1000399', '1000016', '1000014', '1000251', '1000417', '1003148'] },
                { feature: 'Short Code', value: ['55T', '90T', '95T', '120T', '145T', 'Golf Cart T', 'Golf Cart TS'] },
                { feature: 'C100 (Ah)', value: ['65', '115', '130', '155', '180', '240', '270'] },
                { feature: 'C20 (Ah)', value: ['60', '110', '115', '140', '165', '220', '250'] },
                { feature: 'C5 (Ah)', value: ['55', '90', '95', '120', '145', '180', '210'] },
                { feature: 'Box Type', value: ['L3', '59518', '60528', '62512', 'B', 'Golf Cart', 'Golf Cart'] },
                { feature: 'Voltage (V)', value: ['12', '12', '12', '12', '12', '6', '6'] },
                { feature: 'LxWxH (mm)', value: ['278x175x190', '303x175x208/229', '344x172x212/234', '344x172x262/284', '512x223x194/220', '244x190x270/281', '244x190x270/281'] },
                { feature: 'BHD', value: ['B13', 'B1', 'B0', 'B0', 'B0', 'B0', 'B0'] },
                { feature: 'Layout', value: ['0', '0', '0', '0', '3', '0', '0'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['51/80', '42/70', '36/48', '24/36', '21/35', '36/48', '36/54'] },
                { feature: 'Weight (kg)', value: ['18.9', '28.7', '30.4', '37.5', '47.5', '31.5', '32.4'] }
            ]
        },
        motion_bci: {
            type: 'monoblock',
            imgSrc: 'monoblock_aku_img/TAB_motion_BCI.png',
            title: 'MOTION BCI',
            description: "TAB Motion BCI aküleri, aşırı çalışma koşullarında artan enerji ihtiyaçlarını karşılamak için tasarlanmış sulu tip derin döngü akülerdir. Kolay taşıma, kurulum ve bakım için özel olarak tasarlanmıştır.",
            extraInfo: "Özellikler: Premium macunlu plaka yapısı, yüksek deşarj kapasitesi, güvenilir ve dayanıklı. Uygulamalar: Yükseltilmiş çalışma platformları, golf arabaları, temizlik makineleri.",
            specs: [
                { feature: 'Art. No.', value: ['1026410', '1026445', '1026447', '1026448', '1026449'] },
                { feature: 'Short Code', value: ['B 225', 'B 330', 'B 420', 'B 170', 'B 150'] },
                { feature: 'C100 (Ah)', value: ['250', '367', '467', '189', '167'] },
                { feature: 'C20 (Ah)', value: ['225', '330', '420', '170', '150'] },
                { feature: 'C5 (Ah)', value: ['185', '271', '344', '145', '120'] },
                { feature: 'Box Type', value: ['GC2', '902', '903', 'GC8', 'GC12'] },
                { feature: 'Voltage (V)', value: ['6', '6', '6', '8', '12'] },
                { feature: 'LxWxH (mm)', value: ['264x183x251/274', '308x174x337/366', '308x174x337/416', '264x183x251/274', '332x183x248/277'] },
                { feature: 'BHD', value: ['B0', 'B0', 'B0', 'B0', 'B0'] },
                { feature: 'Layout', value: ['2', '2', '2', '1', '1'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['36/54', '24/36', '24/36', '36/54', '24/36'] },
                { feature: 'Weight (kg)', value: ['29.1', '42.8', '51', '29.3', '37.0'] }
            ]

        },
        ogi: {
            type: 'stasyoner_OGI',
            imgSrc:'stasyoner_aku_img/OGi.png',
            title: 'OGI',
            description: "TAB OGi blok aküleri, yüksek güvenlik gereksinimleri olan endüstriyel güç kaynakları için tasarlanmış sağlam havalandırmalı kurşun-asit akülerdir. TAB OGi blok aküleri, hem uzun süreli deşarj (10 saat) hem de kısa süreli deşarj (birkaç dakika) için kullanılabilir.",
            extraInfo: "Uygulama alanları: Enerji santrallerindeki DC güç besleme sistemleri, UPS sistemleri, endüstriyel sistemler ve acil güç besleme sistemleri. Ayrıca motor çalıştırma ve PV güç sistemleri için de kullanılabilir.",
            specs: [
                { feature: 'Discharging time (h)', value: ['12V 1 OGi 25', '12V 2 OGi 50', '12V 3 OGi 75', '12V 4 OGi 100', '12V 5 OGi 125', '12V 6 OGi 150', '6V 7 OGi 175', '6V 8 OGi 200', '6V 9 OGi 225', '6V 10 OGi 250', '6V 11 OGi 275', '6V 12 OGi 300', '2V 3 OGi 75', '2V 4 OGi 100', '2V 5 OGi 125', '2V 6 OGi 150', '2V 7 OGi 175', '2V 8 OGi 200', '2V 9 OGi 225', '2V 10 OGi 250', '2V 11 OGi 275', '2V 12 OGi 300', '2V 13 OGi 325', '2V 14 OGi 350', '2V 24 OGi 600'] },
                { feature: '10', value: ['29.0', '55.0', '80.0', '105.0', '135.0', '165.0', '193.0', '228.0', '254.0', '270.0', '304.0', '320.0', '80.0', '105.0', '135.0', '165.0', '193.0', '228.0', '254.0', '270.0', '304.0', '320.0', '346.7', '373.3', '684.0'] },
                { feature: '5', value: ['25.5', '49.5', '74.5', '98.5', '123.0', '148.5', '172.5', '197.5', '221.5', '247.0', '271.5', '296.0', '74.5', '98.5', '123.0', '148.5', '172.5', '197.5', '221.5', '247.0', '271.5', '296.0', '320.7', '345.3', '592.5'] },
                { feature: '3', value: ['22.5', '44.7', '67.5', '89.4', '111.3', '133.8', '156.0', '178.8', '200.7', '223.5', '245.1', '268.2', '67.5', '89.4', '111.3', '133.8', '156.0', '178.8', '200.7', '223.5', '245.1', '268.2', '290.6', '312.9', '536.4'] },
                { feature: '1', value: ['16.8', '32.8', '49.6', '65.7', '81.6', '98.2', '114.1', '130.0', '145.8', '161.7', '177.6', '194.4', '49.6', '65.7', '81.6', '98.2', '114.1', '130.0', '145.8', '161.7', '177.6', '194.4', '210.6', '226.8', '390.0'] },
                { feature: '1/2', value: ['14.3', '28.0', '42.2', '56.1', '69.0', '82.5', '91.2', '108.0', '121.5', '133.0', '146.0', '159.5', '42.2', '56.1', '69.0', '82.5', '91.2', '108.0', '121.5', '133.0', '146.0', '159.5', '172.8', '186.1', '324.0'] },
                { feature: '1/6', value: ['9.2', '18.0', '27.3', '36.1', '44.3', '52.7', '56.9', '67.3', '75.5', '80.5', '88.5', '96.5', '27.3', '36.1', '44.3', '52.7', '56.9', '67.3', '75.5', '80.5', '88.5', '96.5', '104.5', '112.6', '201.9'] },
                { feature: '1/12', value: ['6.7', '13.1', '19.8', '26.1', '31.7', '37.1', '39.6', '46.8', '52.6', '55.3', '60.7', '66.3', '19.8', '26.1', '31.7', '37.1', '39.6', '46.8', '52.6', '55.3', '60.7', '66.3', '71.8', '77.4', '140.4'] },
                { feature: 'Ri', value: ['16.79', '8.81', '5.94', '4.46', '3.57', '2.97', '1.27', '1.11', '0.99', '0.89', '0.81', '0.74', '0.99', '0.74', '0.60', '0.50', '0.42', '0.37', '0.33', '0.30', '0.27', '0.25', '0.23', '0.21', '0.13'] },
                { feature: 'Isc', value: ['0.72', '1.41', '2.11', '2.81', '3.52', '4.22', '4.93', '5.63', '6.36', '7.04', '7.78', '8.44', '1.92', '2.52', '3.24', '3.96', '4.49', '5.47', '6.10', '6.65', '7.76', '7.68', '8.32', '8.96', '16.42'] },
                { feature: 'L', value: ['272', '272', '272', '272', '380', '380', '272', '272', '380', '380', '380', '380', '103', '103', '103', '103', '103', '103', '103', '124', '145', '145', '145', '145', '205'] },
                { feature: 'W', value: ['205', '205', '205', '205', '205', '205', '205', '205', '205', '205', '205', '205', '206', '206', '206', '206', '206', '206', '206', '206', '206', '206', '206', '206', '272'] },
                { feature: 'H', value: ['375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '420', '420', '420', '420', '420', '420', '420', '420', '420', '420', '420', '420', '392'] },
                { feature: 'With Acid', value: ['35.0', '41.2', '47.0', '54.1', '68.9', '75.3', '46.6', '49.8', '63.2', '66.2', '68.3', '70.8', '9.9', '11.1', '12.6', '14.4', '15.3', '17.3', '19.2', '21.3', '22.8', '25.1', '27.6', '30.0', '49.8'] },
                { feature: 'Dry', value: ['23.4', '30.3', '36.6', '44.1', '55.0', '61.8', '35.9', '39.4', '48.0', '51.2', '53.5', '56.4', '6.5', '7.7', '9.0', '10.7', '11.7', '13.6', '15.4', '17.2', '19.0', '21.8', '23.8', '25.9', '39.4'] }
            ]
        },
        opzs: {
            type: 'stasyoner',
            imgSrc:'stasyoner_aku_img/OPzS.png',
            title: 'OPZS',
            description: "Sizi sonsuz enerji dünyasına davet ediyoruz ve konvansiyonel kurşun-asit teknolojisi ile üretilen OPzS sabit bloklar ve hücrelerle tanıştırıyoruz. OPzS tipi sabit aküler, telekomünikasyon tesisleri, bilgisayarlar, acil aydınlatma, alarm, kontrol ve izleme sistemleri gibi alanlarda kullanılır. Son derece düşük öz deşarj oranları sayesinde güneş hücreleri ile beslenen tesislerde de uygundur.",
            extraInfo: "Özellikler: Yüksek kapasiteli, uzun ömürlü, az bakım gerektiren, düşük öz deşaj, hızlı ve basit asit seviyesi kontrolü, ekonomik su tüketimi, uygun boyutlar ve ağırlık, en düşük ve sabit bakım akımı.",
            specs: []
        },
        opzv: {
            type: 'stasyoner_OPzV',
            imgSrc:'stasyoner_aku_img/OPZV.png',
            title: 'OPZV',
            description: "TAB OPzV valf ayarlı kurşun asit aküleri, birçok farklı bekleme uygulaması için ideal enerji kaynağıdır. TAB OPzV serisi valf ayarlı kurşun asit sabit aküleri, çok düşük gaz emisyonları nedeniyle neredeyse bakım gerektirmeyen recombinasyon teknolojisinin avantajlarını, uzun ömür ve mükemmel döngüleme yeteneği ile pozitif borulu plakaların avantajları ile birleştirir.",
            extraInfo: "Özellikler: Güvenli, çok yönlü, güvenilir, minimum gaz salınımı, derin deşarj direnci.",
            specs: [
                { feature: 'Type', value: ['4 OPzV 200', '5 OPzV 250', '6 OPzV 300', '5 OPzV 350', '6 OPzV 420', '7 OPzV 490', '6 OPzV 600', '8 OPzV 800', '10 OPzV 1000', '12 OPzV 1200', '12 OPzV 1500', '16 OPzV 2000', '20 OPzV 2500', '24 OPzV 3000'] },
                { feature: 'Nominal Capacity (Ah)', value: ['200', '250', '300', '350', '420', '490', '600', '800', '1000', '1200', '1500', '2000', '2500', '3000'] },
                { feature: '-', value: ['204', '255', '306', '357', '429', '500', '612', '816', '1020', '1250', '1530', '2040', '2560', '3060'] },
                { feature: 'Capacity (Ah) at 20°', value: ['172', '215', '258', '305', '365', '425', '520', '700', '870', '1045', '1330', '1770', '2160', '2550'] },
                { feature: 'Capacity (Ah) at 20°', value: ['150', '188', '225', '263', '315', '370', '450', '600', '750', '900', '1116', '1488', '1860', '2232'] },
                { feature: '-', value: ['110', '138', '166', '190', '226', '264', '322', '441', '546', '653', '744', '1032', '1289', '1547'] },
                { feature: 'mΩ', value: ['1.22', '0.98', '0.85', '0.75', '0.61', '0.52', '0.51', '0.38', '0.30', '0.26', '0.23', '0.17', '0.14', '0.12'] },
                { feature: 'A', value: ['1660', '2080', '2490', '2770', '3350', '3900', '4060', '5390', '6760', '8120', '8810', '11510', '14400', '17260'] },
                { feature: 'mm', value: ['103', '124', '145', '124', '145', '166', '145', '210', '210', '210', '210', '214', '214', '214'] },
                { feature: 'mm', value: ['103', '124', '145', '124', '145', '166', '145', '210', '210', '210', '210', '214', '214', '214'] },
                { feature: 'mm', value: ['354/380', '354/380', '354/380', '471/496', '471/496', '471/496', '643/668', '643/668', '643/668', '643/668', '796/821', '771/796', '769/794', '771/796'] },
                { feature: 'kg', value: ['19', '23', '28', '31', '36', '41', '49', '65', '80', '93', '115', '155', '200', '235'] },
                { feature: 'Poles', value: ['2', '2', '2', '2', '2', '2', '2', '4', '4', '4', '4', '6', '8', '8'] }
            ]
        },
        topzs: {
            type:'stasyoner_TOPZS',
            imgSrc:'stasyoner_aku_img/TOPzS.png',
            title: 'TOPZS',
            description: "TOPzS tipi sabit aküler, güneş sistemleri için özel olarak tasarlanmıştır. Son derece düşük öz deşarj oranları ve borulu pozitif plakaları sayesinde off-grid güneş sistemleri için uygundur.",
            extraInfo: "Özellikler: Yüksek kapasiteli, uzun ömürlü, az bakım gerektiren, düşük öz deşarj, hızlı ve basit asit seviyesi kontrolü, ekonomik su tüketimi, uygun boyutlar ve ağırlık, en düşük ve sabit bakım akımı.",
            specs: [
                { feature: 'Type', value: ['3 TOPzS 265', '4 TOPzS 353', '5 TOPzS 442', '4 TOPzS 500', '5 TOPzS 625', '6 TOPzS 750', '7 TOPzS 875', '8 TOPzS 1000'] },
                { feature: 'Ah', value: ['265', '353', '442', '499', '624', '749', '874', '999'] },
                { feature: 'Ah', value: ['289', '384', '481', '545', '681', '817', '953', '1089'] },
                { feature: 'Ah*', value: ['345', '460', '575', '650', '815', '975', '1140', '1300'] },
                { feature: 'mΩ', value: ['0.56', '0.46', '0.38', '0.35', '0.28', '0.30', '0.26', '0.24'] },
                { feature: 'A', value: ['3721.00', '4514.00', '5461.00', '6005.00', '7448.00', '6991.00', '7888.00', '8848.00'] },
                { feature: 'mm', value: ['198', '198', '198', '198', '198', '198', '198', '198'] },
                { feature: 'mm', value: ['83', '101', '119', '101', '119', '137', '173', '191'] },
                { feature: 'mm', value: ['472', '472', '472', '720', '720', '720', '720', '720'] },
                { feature: 'kg', value: ['18.4', '23.3', '29.0', '35.2', '43.2', '53.5', '64.2', '72.5'] },
                { feature: 'kg', value: ['12.4', '16.0', '20.2', '24.3', '30.3', '38.0', '44.0', '50.2'] }
            ]
        },
        ups: {

            type:'stasyoner_UPS',
            imgSrc:'stasyoner_aku_img/UPS.png',
            title: 'UPS',
            description: "TAB UPS aküleri, yüksek deşarj performansları için optimize edilmiş sağlam kurşun-asit akülerdir.",
            extraInfo: "TAB UPS aküleri, 50 ila 250 kVA boyutundaki Kesintisiz Güç Kaynağı (UPS) uygulamaları için mükemmel bir şekilde uygundur. Akü, yardımcı güç kaynağı için dizel motorların çalıştırılmasında da mükemmel bir uyum sağlar.",
            specs: [
                { feature: 'Type', value: ['12V 1 UPS 100', '12V 2 UPS 200', '12V 3 UPS 300', '12V 4 UPS 400', '12V 5 UPS 500', '12V 6 UPS 600', '6V 7 UPS 700', '6V 8 UPS 800', '6V 9 UPS 900', '6V 10 UPS 1000', '6V 11 UPS 1100', '6V 12 UPS 1200', '2V 24 UPS 2400', '2V 30 UPS 3000', '2V 36 UPS 3600'] },
                { feature: 'C10 (Ah)', value: ['41', '59', '86', '114', '147', '179', '206', '247', '271', '293', '325', '347', '742', '879', '1041'] },
                { feature: 'W/Cell', value: ['42', '73', '103', '135', '169', '204', '237', '272', '306', '342', '381', '418', '816', '1027', '1253'] },
                { feature: 'W/Cell', value: ['64', '112', '162', '210', '264', '327', '384', '440', '492', '558', '592', '640', '1321', '1674', '1920'] },
                { feature: 'W/Cell', value: ['92', '169', '246', '322', '412', '500', '588', '676', '742', '812', '879', '946', '2027', '2437', '2837'] },
                { feature: 'W/Cell', value: ['120', '218', '313', '410', '520', '629', '737', '848', '913', '1014', '1098', '1178', '2544', '3042', '3535'] },
                { feature: 'W/Cell', value: ['181', '323', '465', '606', '755', '895', '1040', '1187', '1294', '1403', '1509', '1613', '3562', '4209', '4838'] },
                { feature: 'mΩ', value: ['16.80', '8.40', '5.60', '4.20', '3.36', '2.80', '1.20', '1.05', '0.93', '0.84', '0.76', '0.70', '0.13', '0.10', '0.08'] },
                { feature: 'kA', value: ['0.73', '1.46', '2.20', '2.93', '3.66', '4.39', '5.13', '5.86', '6.59', '7.32', '8.05', '8.79', '17.58', '21.90', '26.30'] },
                { feature: 'mm', value: ['272', '272', '272', '272', '380', '380', '272', '272', '380', '380', '380', '380', '205', '205', '205'] },
                { feature: 'mm', value: ['205', '205', '205', '205', '205', '205', '205', '205', '205', '205', '205', '205', '272', '380', '380'] },
                { feature: 'mm', value: ['375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375', '375'] },
                { feature: 'kg', value: ['35.4', '41.6', '47.3', '54.5', '69.4', '75.8', '47.0', '50.2', '63.8', '66.7', '68.8', '71.5', '50.2', '66.7', '71.5'] },
                { feature: 'kg', value: ['23.4', '30.3', '36.6', '44.1', '55.0', '61.8', '35.9', '39.4', '48.0', '51.2', '53.5', '56.4', '39.4', '51.2', '55.4'] }
            ]
        },
        traction_batteries: {
            type:'emotive',
            imgSrc: 'Li_Ion_img/emotive.png',
            title: 'TRACTION BATTERIES',
            description: "TAB e.motive aküler, gezegenimizin sürdürülebilir geleceği için tasarlanmıştır. Kazalar durumunda sıvı asit bulunmaz, daha küçük CO2 ayak izi ve daha düşük şarj kayıpları sayesinde daha iyi enerji verimliliği sağlar.",
  extraInfo: "TAB e.motive aküler, merkezi bir şarj istasyonuna ihtiyaç duymadan daha fazla esneklik sağlar, yerel şarj istasyonlarıyla kullanılabilir (onboard şarj cihazıyla birlikte). Gaz çıkışı olmaması nedeniyle patlama tehlikesi ve koku oluşmaz. Hızlı ve fırsat şarjı sayesinde daha uzun çalışma süresi ve daha yüksek verimlilik sağlar. TAB Li-ion akü sistemi tamamen bakım gerektirmez. Şarj tesislerine güvenlik mesafesi gerektirmez – bu da alan düzenlemesi planlamasında yeni imkanlar açar.",

        },
        storage_clever: {
            type:'estorage_clever',
            imgSrc: 'Li_Ion_img/C2-4K-12.png',
            title: 'TAB e.storage CLEVER',
            description: "TAB aküleri, kendi kendine tüketim, yedek güç kaynağı ve yenilenebilir enerji ile işbirliği içinde şebekeden bağımsız sistemler için optimize edilmiştir. Esnek ve modüler tasarımı sayesinde ihtiyaçlarınıza göre özelleştirilebilir ve temiz enerji sağlar.",
  extraInfo: "TAB aküleri, elektrik faturasında tasarruf sağlar, düşük tarifelerde şarj olup yüksek tarifelerde deşarj edilebilir. Elektrik kesintisi sırasında yedek güç kaynağı olarak kullanılabilir ve fotovoltaik panellerden üretilen güneş enerjisini depolayarak gelecekte kullanım için saklar. 1'den 6 modüle kadar (30kWh kapasiteye kadar) modüler tasarım, güneş panelleriyle temiz enerji geri kazanımı, ihtiyaca göre özelleştirilebilen sistem, elektrik faturasında tasarruf, AB tasarımı, Tier 1 invertör markalarıyla uyumluluk sağlar. Deye, Victron Energy ve SMA Suny Island gibi şarj/invertör ekipmanları desteklenir; diğer markalar talep üzerine desteklenebilir.",

        },
        storage_family: {
            type:'estorage_family',
            imgSrc: 'Li_Ion_img/C2-4K-12.png',
            title: 'TAB e.storage FAMILY',
             description: "TAB aküleri, kendi kendine tüketim, yedek güç kaynağı ve yenilenebilir enerji ile işbirliği içinde şebekeden bağımsız sistemler için optimize edilmiştir. Esnek ve modüler tasarımıyla, kompakt ve sağlam bir çözüm sunar, ihtiyaçlarınıza göre özelleştirilebilir ve temiz enerji sağlar.",
  extraInfo: "TAB aküleri, elektrik faturasında tasarruf sağlar, düşük tarifelerde şarj olup yüksek tarifelerde deşarj edilebilir. Elektrik kesintisi sırasında yedek güç kaynağı olarak kullanılabilir ve fotovoltaik panellerden üretilen güneş enerjisini depolayarak gelecekte kullanım için saklar. 1'den 8 modüle kadar (40kWh kapasiteye kadar) modüler tasarım, entegre sigortalar, güneş panelleriyle temiz enerji geri kazanımı, ihtiyaca göre özelleştirilebilen sistem, AB tasarımı ve Tier 1 invertör markalarıyla uyumluluk sağlar. Deye, Victron Energy ve SMA Suny Island gibi şarj/invertör ekipmanları desteklenir; diğer markalar talep üzerine desteklenebilir.",

        },
        module_l51: {
            type:'emodule',
            imgSrc: 'Li_Ion_img/modul_l51.png',
            title: 'TAB e.module L5.1',
            description: "TAB e.module L5.1, modüler tasarım konsepti ve kolay kurulumu ile konut depolama uygulamaları için ideal bir çözümdür.",
  extraInfo: "TAB e.module L5.1, LFP (lityum demir fosfat) hücreleri sayesinde en yüksek güvenliği sağlar. BMS, hücreleri tüm açılardan korur (anormal sıcaklık, akım, voltaj, SoC, SoH vb.). Uzun döngü ömrü ve üstün performansı ile optimal elektrik maliyeti sunar. Modüler tasarım, en yüksek esnekliği sağlar, hızlı kurulum imkanı tanır ve son kullanıcıya kapasite seçme özgürlüğü sunar. Tier 1 invertör markalarıyla uyumludur.",

        }, 
        inverter_1p: {
            type:'inventer_1p',
            imgSrc: 'Li_Ion_img/1P.png',
            title: 'TAB HYBRID INVERTER 1P',
            description: "TAB Tek Fazlı hibrit invertör, konut ve hafif ticari kullanımlar için uygundur, güneş enerjisinin kendi kendine tüketim oranını maksimize eder ve enerji bağımsızlığınızı artırır. Gün boyunca, PV sistemi elektrik üretir ve öncelikle yükler için enerji sağlar. Fazla enerji, inverter aracılığıyla aküyü şarj eder ve ihtiyaç duyulduğunda depolanan enerji serbest bırakılır.",
  extraInfo: "TAB Tek Fazlı hibrit invertör, RS485/CAN portu ile akü iletişimini destekler. Ana özellikler: kendi kendine tüketim ve şebekeye enerji verme, AC geri geldiğinde otomatik yeniden başlatma, akü veya şebeke için programlanabilir öncelik, şebekede, şebeke dışında ve UPS modlarında çalışabilme, LCD ayarlarıyla akü şarj akımı/voltajını uygulamalara göre ayarlayabilme, AC/güneş enerjisi/jeneratör önceliğini ayarlayabilme, şebeke veya jeneratör gücüyle uyumluluk, aşırı yük/aşırı sıcaklık/kısa devre koruması, optimize edilmiş akü performansı için akıllı akü şarj tasarımı, aşırı gücün şebekeye akmasını önleme, WIFI izleme desteği ve iki MPP izleyici, optimize edilmiş akü performansı için üç aşamalı MPPT şarjı, zaman dilimi kullanımı işlevi ve akıllı yük fonksiyonu.",

        },
        inverter_3p: {
            type:'inventer_3p',
            imgSrc: 'Li_Ion_img/3P.png',
            title: 'TAB HYBRID INVERTER 3P',
             description: "TAB Üç Fazlı Hibrit İnvertör, üç fazlı dengesiz çıkışı destekleyen yeni bir hibrit invertördür, bu da uygulama senaryolarını genişletir. Sistem, x2 CAN portu (BMS ve paralel bağlantı için), x1 RS485 portu (BMS için), x1 RS232 portu (uzaktan kontrol için) ve x1 DRM portu ile donatılmıştır, bu da sistemi akıllı ve esnek hale getirir.",
  extraInfo: "Ana özellikler: 230/400V Üç Faz Saf sinüs dalga invertörü, kendi kendine tüketim ve şebekeye enerji verme, AC geri geldiğinde otomatik yeniden başlatma, akü veya şebeke için programlanabilir öncelik, şebekede, şebeke dışında ve UPS modlarında çalışabilme, LCD ayarlarıyla akü şarj akımı/voltajını uygulamalara göre ayarlayabilme, AC/güneş enerjisi/jeneratör önceliğini ayarlayabilme, şebeke veya jeneratör gücüyle uyumluluk, aşırı yük/aşırı sıcaklık/kısa devre koruması, optimize edilmiş akü performansı için akıllı akü şarj tasarımı, aşırı gücün şebekeye akmasını önleme, WIFI izleme desteği ve iki MPP izleyici için 1 dizi, 1 MPP izleyici için 1 dizi, optimize edilmiş akü performansı için üç aşamalı MPPT şarjı, zaman dilimi kullanımı işlevi ve akıllı yük fonksiyonu.",

        },
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
        document.getElementById('akuDescription').textContent = akuDetails.description;
        document.getElementById('akuExtraInfo').textContent = akuDetails.extraInfo;


        // Akü tipine göre uygun tabloyu seç
        let tableId;
        switch (akuDetails.type) {
            case 'starter':
                tableId = 'starter_table';
                break;
            case 'magic_hr':
                tableId = 'magic_hr_table';
                break;
            case 'traksiyoner_bci':
                tableId = 'traksiyoner_table_BCI';
                break;
            case 'traksiyoner_din':
                tableId = 'traksiyoner_table_DIN';
                break;

            case 'traksiyoner_bs':
                tableId = 'traksiyoner_table_BS';
                break;
            case 'traksiyoner_pzrm':
                tableId = 'traksiyoner_table_PZRM';
                break;
            case 'traksiyoner_pzv':
                tableId = 'traksiyoner_table_PZV';
                break;
            case 'traksiyoner_pzvb':
                tableId = 'traksiyoner_table_PZVB';
                break;
            case 'traksiyoner_psq':
                tableId = 'traksiyoner_table_PSQ';
                break;
            case 'monoblock':
                tableId = 'monoblock_table';
                break;
            case 'stasyoner':
                tableId = 'stasyoner_table';
                break;
            case 'stasyoner_OGI':
                tableId = 'stasyoner_table_OGI';
                break;
            case 'stasyoner_UPS':
                tableId = 'stasyoner_table_UPS';
                break;
            case 'stasyoner_TOPZS':
                tableId = 'stasyoner_table_TOPZS';
                break;
            case 'stasyoner_OPZV':
                tableId = 'stasyoner_table_OPZV';
                break;
                case 'emotive':
                tableId = 'emotive_table';
                break;
                case 'estorage_clever':
                    tableId = 'estorage_clever_table';
                    break;
                    case 'estorage_family':
                        tableId = 'estorage_family_table';
                        break;
                        case 'emodule':
                            tableId = 'emodule_table';
                            break;
                            case 'inventer_1p':
                                tableId = 'inventer_1p_table';
                                break;
                                case 'inventer_3p':
                                    tableId = 'inventer_3p_table';
                                    break;
                              
            default:
                tableId = 'akuTable'; // Default tablo, starter olabilir ya da genel tablo
        }
       
        // Seçilen tabloyu göster, diğerlerini gizle
        document.querySelectorAll('table').forEach(table => {
            table.style.display = 'none'; // Tüm tabloları gizle
        });
        document.getElementById(tableId).style.display = 'table'; // Seçilen tabloyu göster

        // Seçilen tablonun tbody kısmını al
        const tableBody = document.querySelector(`#${tableId} tbody`);
        tableBody.innerHTML = ""; // Mevcut içeriği temizle

        const numberOfColumns = akuDetails.specs.length;
        const numberOfRows = akuDetails.specs[0].value.length;

        // Satırları oluştur ve verileri her başlık altına ekle
        for (let i = 0; i < numberOfRows; i++) {
            const row = document.createElement('tr');

            // Her sütundaki veriyi doğru sırada ekle
            for (let j = 0; j < numberOfColumns; j++) {
                const cell = document.createElement('td');
                cell.textContent = akuDetails.specs[j].value[i];
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        }
    } else {
        // Eğer geçersiz bir ID varsa bir hata mesajı göster
        document.getElementById('akuTitle').textContent = 'Akü bulunamadı';
    }

    window.onscroll = function () {
        var header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

});
function anasayfaBtnHtml()
{
const indirmeButton = document.getElementById('anasayfaBtn');

// Butona click event listener ekle
indirmeButton.addEventListener('click', function (event) {

  window.location.href = '/Orko_Aku_web/';
});
}

function indirmeBtnHtml()
{
const indirmeButton = document.getElementById('indirmeBtn');

// Butona click event listener ekle
indirmeButton.addEventListener('click', function (event) {

  window.location.href = '/Orko_Aku_web/indirme_merkezi.html';
});
}
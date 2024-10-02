document.addEventListener('DOMContentLoaded', function () {
    // Akü bilgileri (id'ye göre eşleştirme)
    const akuData = {
        tab_magic: {
            imgSrc: 'starter_aku_img/tab_magic.png',
            title: 'TAB MAGIC',
            type: 'starter',
            description: "TAB Magic automotive battery utilises the latest innovations in Ca/Ca manufacturing technology, providing for the highest cold start performance and superior reliable power as demanded by the latest generation of cars with high energy drain.The SMF lid cover provides complete roll over spill protection and is entirely maintenance free throughout the batteries life.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]
        },


        tab_agm: {
            imgSrc: 'starter_aku_img/tab_agm_stop&go.png',
            title: 'TAB AGM STOP&GO',
            type: 'starter',
            description: "TAB AGM Stop&Go batteries are  Valve Regulated Lead Acid (VRLA) batteries intended for use in vehicles with enhanced level Start/Stop function with break energy recuperation. VRLA AGM automotive battery is improved lead acid battery to its maximum performance.The battery cells are closed by a pressure relief valve and electrolyte is immobilized in Absorbed Glass Mat (AGM). Plate stacks are kept in the cells under pressure.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]

        },
        tab_efb: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go.png',
            title: 'TAB EFB STOP&GO',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]

        },
        tab_efb_tr: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go2.png',
            title: 'TAB EFB STOP&GO TRUCK',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS'] }
            ]

        },
        tab_hr: {
            type: 'magic_hr',
            imgSrc: 'starter_aku_img/tab_magic_hr.png',
            title: 'TAB HR - HOT REGION',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //hr
            ]
        },
        tab_magic_tr: {
            imgSrc: 'starter_aku_img/tab_magic_truck.png',
            title: 'TAB MAGIC TRUCK',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]
        },
        tab_oem: {
            imgSrc: 'starter_aku_img/tab_oem.png',
            title: 'TAB OEM',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]
        },
        tab_polar: {
            imgSrc: 'starter_aku_img/tab_polar.png',
            title: 'TAB POLAR',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                { feature: 'Art. No.', value: ['1000823', '1000825', '1000824', '1000826', '1000861', '1000864', '1000876', '1000865', '1000914', '1000866', '1000881', '1000867', '1000897', '1000868', '1000878', '1000884', '1000872', '1000934', '1000873', '1000890', '1000888', '1000875', '1000901', '1000907', '1000930', '1000942', '1000923', '1000877', '1000905', '1000931', '1000943', '1000932', '1000924', '1000933', '1000944', '1000935', '1000945', '1000936', '1000925', '1000937', '1000926', '1000941', '1000947', '1000920', '1000928', '1000909'] },
                { feature: 'DIN Marking', value: ['', '', '', '', '54506', '54002 SMF', '54003 SMF', '54502 SMF', '54559 SMF', '55010 SMF', '55001 SMF', '55509 SMF', '55559 SMF', '56008 SMF', '56013 SMF', '56309 SMF', '57309 SMF', '56638 SMF', '57412 SMF', '57413 SMF', '59249 SMF', '59220 SMF', '58822 SMF', '60038 SMF', '53520 SMF', '53522 SMF', '53521 SMF', '54520 SMF', '54522 SMF', '54523/84 SMF', '54524/51 SMF', '55523/84 SMF', '55524/51 SMF', '56068 SMF', '56069 SMF', '56568 SMF', '56569 SMF', '57029 SMF', '57024 SMF', '57529 SMF', '	57524 SMF', '59518 SMF', '59519 SMF', 'BCI 31P SMF', 'BCI 31S SMF', 'BCI 31S SMF-D'] },
                { feature: 'Short Code', value: ['U1R-25', 'U1-25', 'U1R-32', 'U1-32', 'P45', 'S40', 'S40X', 'S45', 'P45H', 'S50H', 'P50', 'S55', 'P55H', 'S60H', 'S60HX', 'P63', 'S73', 'P66H', 'S74H', 'S74HX', 'P92H', 'S92', 'S90H', 'S10H', 'S35J', 'S35JX', 'S35JP', 'S45J', 'S45JX', 'S45JA', 'S45JAX', 'S55JA', 'S55JAX', 'S60J', 'S60JX', 'S65J', 'S65JX', 'S70J', 'S70JX', 'S75J', 'S75JX', 'S95J', 'S95JX', 'P90BCIP', 'P100BCIS', 'S110BCID'] },
                { feature: 'Ah (C20)', value: ['25', '25', '32', '32', '45', '40', '40', '45', '45', '50', '50', '55', '55', '60', '60', '63', '73', '66', '74', '74', '92', '92', '92', '100', '35', '35', '35', '45', '45', '45', '45', '55', '55', '60', '60', '65', '65', '70', '70', '75', '75', '95', '95', '90', '100', '110'] },
                { feature: 'Box Type', value: ['U1', 'U1', 'U1', 'U1', 'L0', 'L1B', 'L1B', 'L1B', 'L1', 'L1', 'L2B', 'L2B', 'L2', 'L2', 'L2', 'L3B', 'L3B', 'L3', 'L3', 'L3', 'L4', 'L5B', 'L5', 'L5', 'B19', 'B19', 'B19', 'B19', 'B19', 'B24', 'B24', 'B24', 'B24', 'D23', 'D23', 'D23', 'D23', 'D26', 'D26', 'D26', 'D26', 'D31', 'D31', 'BCI 31', 'BCI 31', 'BCI 31'] },
                { feature: 'EN (A)', value: ['250', '250', '350', '350', '400', '360', '360', '420', '400', '450', '450', '500', '500', '600', '600', '600', '630', '600', '680', '680', '800', '800', '800', '850', '270', '270', '270', '360', '360', '360', '360', '490', '490', '600', '600', '650', '600', '700', '700', '740', '740', '850', '850', '800', '900', '1000'] },
                { feature: 'LxWxH (mm)', value: ['196x127x159/185', '196x127x159/185', '196x127x159/185', '196x127x159/185', '175x175x190', '207x175x175', '207x175x175', '207x175x175', '207x175x190', '207x175x190', '242x175x175', '242x175x175', '242x175x190', '242x175x190', '242x175x190', '278x175x175', '278x175x175', '278x175x190', '278x175x190', '278x175x190', '315x175x190', '353x175x175', '353x175x190', '353x175x190', '196x128x202/223', '196x128x202/223', '196x134x202/223', '196x134x202/223', '196x134x202/223', '236x128x202/223', '236x128x202/223', '236x128x202/223', '236x128x202/223', '230x173x200/220', '230x173x200/220', '230x173x200/220', '230x173x200/220', '259x175x200/221', '259x175x200/221', '259x175x200/221', '259x175x200/221', '306x173x220/221', '306x173x200/221', '330x173x218/239', '330x173x218/239', '330x173x218/237'] },
                { feature: 'BHD', value: ['B0', 'B0', 'B0', 'B0', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B13', 'B0', 'B0', 'B01', 'B01', 'B01', 'B0', 'B0', 'B0', 'B0', 'B01', 'B01', 'B01', 'B01', 'B1', 'B1', 'B1', 'B1', 'B01', 'B01', 'B1', 'B1', 'B1'] },
                { feature: 'Layout', value: ['0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0'] },
                { feature: 'Weight (kg)', value: ['7.2', '7.2', '8.0', '8.0', '10.5', '10.7', '10.7', '11.2', '11.7', '12.2', '12.7', '13.3', '13.9', '14.4', '14.4', '15.5', '15.9', '16.1', '17.2', '17.2', '20.0', '20.5', '21.0', '22.4', '9.4', '9.4', '9.4', '10.6', '10.6', '11.9', '11.9', '13.5', '13.5', '14.9', '14.9', '15.5', '15.5', '17.3', '17.3', '17.8', '17.8', '20.9', '20.9', '23.4', '24.3', '26.2'] },
                // buraya bak {feature: 'Remarks*', value: ['SMF, H', 'SMF, H', 'SMF, H, HD', 'H', 'H, HD', 'H, HD', 'H, HD', 'H, HD', 'H, HD', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD, EMS', 'H, HD'] },
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }

            ]
        },
        tab_polar_tr: {
            imgSrc: 'starter_aku_img/tab_polar_truck.png',
            title: 'TAB POLAR TRUCK',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]
        },
        tab_polar_blue: {
            imgSrc: 'starter_aku_img/tab_polar_blue.png',
            title: 'TAB POLAR BLUE',
            type: 'starter',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                { feature: 'Art. No.', value: ['1000339', '1000343', '1000340', '1000345', '1000341', '1000342'] },
                { feature: 'DIN Marking', value: ['56008 B', '56013 B', '56649 B', '56013 B', '57549 B', '60044 B'] },
                { feature: 'Short Code', value: ['B60HV', 'B60HX', 'B66', 'B66HX', 'B75H', 'B10H'] },
                { feature: 'Ah (C20)', value: ['60', '60', '66', '66', '75', '100'] },
                { feature: 'Box Type', value: ['L2', 'L2', 'L2', 'L2', 'L3', 'L5'] },
                { feature: 'EN (A)', value: ['600', '600', '620', '620', '750', '900'] },
                { feature: 'LxWxH (mm)', value: ['242x175x190', '242x175x190', '242x175x190', '242x175x190', '278x175x190', '353x175x190'] },
                { feature: 'BHD', value: ['B13', 'B13', 'B13', 'B13', 'B13', 'B13'] },
                { feature: 'Layout', value: ['0', '1', '0', '1', '0', '0'] },
                { feature: 'Weight (kg)', value: ['14.4', '14.4', '15.0', '14.4', '17.2', '22.4'] },
                { feature: 'PCS/pallet (EUR/CNT)', value: ['63/90', '63/90', '63/90', '63/90', '51/80', '36/60'] },
                { feature: 'Remarks*', value: ['KH, ME', 'KH, ME', 'KH, ME', 'KH, ME', 'KH, HD, ME', 'KH, HD, ME'] },
                { feature: 'TDS', value: ['TDS', 'TDS', 'TDS', 'TDS', 'TDS', 'TDS'] }
            ]
        },
        tab_bci: {
            type: 'traksiyoner_bci',
            imgSrc: 'traksiyoner_aku_img/TAB-BCI.png',
            title: 'TAB BCI',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_bs: {
            type: 'traksiyoner_bs',
            imgSrc: 'traksiyoner_aku_img/TAB-BS.png',
            title: 'TAB BS',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_din: {
            type: 'traksiyoner_din',
            imgSrc: 'traksiyoner_aku_img/TAB-DIN.png',
            title: 'TAB DIN',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_ex: {
            type: 'traksiyoner',
            imgSrc: 'traksiyoner_aku_img/TAB-EX.png',
            title: 'TABEX',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_psq: {
            type: 'traksiyoner_psq',
            imgSrc: 'traksiyoner_aku_img/TAB-PSQ.png',
            title: 'TAB PSQ',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_pzrm: {
            type: 'traksiyoner_pzrm',
            imgSrc: 'traksiyoner_aku_img/TAB-PzRM1.png',
            title: 'TAB PZRM',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_pzv: {
            type: 'traksiyoner_pzv',
            imgSrc: 'traksiyoner_aku_img/TAB-PzV.png',
            title: 'TAB PZV',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        tab_pzvb: {
            type: 'traksiyoner_pzvb',
            imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
            title: 'TAB PZVB',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [
                //traksiyoner
            ]
        },
        motion_agm: {
            type: 'monoblock',
            imgSrc: 'monoblock_aku_img/MotionAGM.png',
            title: 'MOTION AGM',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            imgSrc: 'monoblock_aku_img/MotionGel.png',
            title: 'MOTION GEL',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            imgSrc: 'stasyoner_aku_img/ogi.png',
            title: 'OGI',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            imgSrc: 'stasyoner_aku_img/opzs.png',
            title: 'OPZS',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
            specs: [

          
            ]

        
  



        },
        opzv: {
            type: 'stasyoner_OPZV',
            imgSrc: 'stasyoner_aku_img/opzv.png',
            title: 'OPZV',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            type: 'stasyoner_TOPZS',
            imgSrc: 'stasyoner_aku_img/topzs.png',
            title: 'TOPZS',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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

            type: 'stasyoner_UPS',
            imgSrc: 'stasyoner_aku_img/ups.png',
            title: 'UPS',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
            extraInfo: "Özellikle sık dur-kalk yapılan trafikte üstün performans gösterir. Start-stop sistemleri için idealdir.",
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
            case 'stasyoner_alt':
                tableId = 'stasyoner_table_alt';
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

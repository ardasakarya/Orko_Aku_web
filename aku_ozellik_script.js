document.addEventListener('DOMContentLoaded', function () {
    // Akü bilgileri (id'ye göre eşleştirme)
    const akuData = {
        tab_magic: {
            imgSrc: 'starter_aku_img/tab_magic.png',
            title: 'TAB MAGIC',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_efb: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go.png',
            title: 'TAB EFB STOP&GO',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_efb_tr: {
            imgSrc: 'starter_aku_img/tab_efb_stop&go2.png',
            title: 'TAB EFB STOP&GO TRUCK',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_hr: {
            imgSrc: 'starter_aku_img/tab_magic_hr.png',
            title: 'TAB HR - HOT REGION',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_magic_tr: {
            imgSrc: 'starter_aku_img/tab_magic_truck.png',
            title: 'TAB MAGIC TRUCK',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_oem: {
            imgSrc: 'starter_aku_img/tab_oem.png',
            title: 'TAB OEM',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_polar: {
            imgSrc: 'starter_aku_img/tab_polar.png',
            title: 'TAB POLAR',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_polar_tr: {
            imgSrc: 'starter_aku_img/tab_polar_truck.png',
            title: 'TAB POLAR TRUCK',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_polar_blue: {
            imgSrc: 'starter_aku_img/tab_polar_blue.png',
            title: 'TAB POLAR BLUE',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_bci: {
            imgSrc: 'traksiyoner_aku_img/TAB-BCI.png',
            title: 'TAB BCI',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_bs: {
            imgSrc: 'traksiyoner_aku_img/TAB-BS.png',
            title: 'TAB BS',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_din: {
            imgSrc: 'traksiyoner_aku_img/TAB-DIN.png',
            title: 'TAB DIN',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_ex: {
            imgSrc: 'traksiyoner_aku_img/TAB-EX.png',
            title: 'TABEX',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_psq: {
            imgSrc: 'traksiyoner_aku_img/TAB-PSQ.png',
            title: 'TAB PSQ',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_pzrm: {
            imgSrc: 'traksiyoner_aku_img/TAB-PzRM1.png',
            title: 'TAB PZRM',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_pzv: {
            imgSrc: 'traksiyoner_aku_img/TAB-PzV.png',
            title: 'TAB PZV',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        tab_pzvb: {
            imgSrc: 'traksiyoner_aku_img/TAB-PzVB.png',
            title: 'TAB PZVB',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        motion_agm: {
            imgSrc: 'monoblock_aku_img/MotionAGM.png',
            title: 'MOTION AGM',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        motion_gel: {
            imgSrc: 'monoblock_aku_img/MotionGel.png',
            title: 'MOTION GEL',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        motion_pasted: {
            imgSrc: 'monoblock_aku_img/MotionPasted.png',
            title: 'MOTION PASTED',
            description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        motion_tubular: {
            imgSrc: 'monoblock_aku_img/MotionTubular.png',
            title: 'MOTION TUBULAR',
                description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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

        ogi:{
         
            imgSrc: 'stasyoner_aku_img/ogi.png', 
            title: 'OGI',
                description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        opzs:{
             
            imgSrc: 'stasyoner_aku_img/opzs.png', 
            title: 'OPZS',
                description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        opzv: {
            
            imgSrc: 'stasyoner_aku_img/opzv.png', 
            title: 'OPZV',
                description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
       topzs: {
             
            imgSrc: 'stasyoner_aku_img/topzs.png', 
            title: 'TOPZS',
                description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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
        ups:{
             
            imgSrc: 'stasyoner_aku_img/ups.png', 
            title: 'UPS',
                description: "TAB AGM aküleri, dur-kalk teknolojisine uygun olarak üretilmiştir. Yüksek enerji verimliliği ve uzun ömür sağlar.",
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

        // Özellik tablosunu doldur
        const tableBody = document.querySelector('#akuTable tbody');
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
});

window.onscroll = function () {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
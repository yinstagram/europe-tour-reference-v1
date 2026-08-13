/*
 * Europe Tour Reference V1 — image metadata.
 *
 * The image files in /media are Wikimedia Commons derivatives.  Every
 * activity card keeps the Commons file page, author and licence beside the
 * image so the picture is never presented as an uncredited booking asset.
 */
(function () {
  'use strict';

  const assets = {
    'hk-airport': {
      image: 'media/hk-airport.jpg', source: 'https://commons.wikimedia.org/wiki/File:Aeropuerto_de_Hong_Kong,_2013-08-13,_DD_05.JPG', license: 'CC BY-SA 4.0', author: 'Diego Delso', alt: '香港國際機場航站樓', caption: '機場參考相'
    },
    'dubai-airport': {
      image: 'media/dubai-airport.jpg', source: 'https://commons.wikimedia.org/wiki/File:Taxis_outside_Dubai_International_Airport_Terminal_2.jpg', license: 'CC BY-SA 4.0', author: 'Ravi Dwivedi', alt: '杜拜國際機場外景', caption: '轉機機場參考相'
    },
    schiphol: {
      image: 'media/schiphol.jpg', source: 'https://commons.wikimedia.org/wiki/File:Amsterdam_Schiphol_Treinstation_lift.jpg', license: 'CC BY-SA 4.0', author: 'Renée Kools', alt: 'Amsterdam Schiphol 車站', caption: '抵達機場參考相'
    },
    coster: {
      image: 'media/coster.jpg', source: 'https://commons.wikimedia.org/wiki/File:Coster_Diamonds_Museum_2533.jpg', license: 'CC BY 4.0', author: 'C messier', alt: 'Royal Coster Diamonds 展示空間', caption: '場地參考相'
    },
    gassan: {
      image: 'media/gassan.jpg', source: 'https://commons.wikimedia.org/wiki/File:Opdrachten_diamantslijperij_Gassan_te_Amsterdam,_Bestanddeelnr_909-7199.jpg', license: 'CC BY-SA 4.0', author: 'Wim van Rossem for Anefo', alt: 'Amsterdam 鑽石打磨示範', caption: '體驗參考相'
    },
    madame: {
      image: 'media/madame.jpg', source: 'https://commons.wikimedia.org/wiki/File:Madame_Tussauds_Adam_closeup.JPG', license: 'CC BY 4.0', author: 'Knowledge at Dutch Wikipedia', alt: 'Madame Tussauds Amsterdam 蠟像館', caption: '場地參考相'
    },
    zaanse: {
      image: 'media/zaanse.jpg', source: 'https://commons.wikimedia.org/wiki/File:Windmills_at_Zaanse_Schans,_Zaanstad,_2022.jpg', license: 'CC BY-SA 4.0', author: 'DimiTalen', alt: 'Zaanse Schans 風車村', caption: '風車村參考相'
    },
    noorderhuis: {
      image: 'media/noorderhuis.jpg', source: 'https://commons.wikimedia.org/wiki/File:Zaandijk_-_Zaanse_Schans_-_Kalverringdijk_-_View_WNW_on_former_Museum_%27Het_Noorderhuis%27_1670.jpg', license: 'CC BY-SA 4.0', author: 'Txllxt TxllxT', alt: 'Zaanse Schans Het Noorderhuis 外觀', caption: '建築參考相'
    },
    canal: {
      image: 'media/canal.jpg', source: 'https://commons.wikimedia.org/wiki/File:DSC00366,_Canal_Cruise,_Amsterdam,_Netherlands_(339042208).jpg', license: 'CC BY-SA 4.0', author: 'Lyn Gateley', alt: '阿姆斯特丹運河遊船', caption: '運河遊船參考相'
    },
    dewallen: {
      image: 'media/dewallen.jpg', source: 'https://commons.wikimedia.org/wiki/File:De_Wallen,_Amsterdam_-_panoramio.jpg', license: 'CC BY-SA 4.0', author: 'patano', alt: '阿姆斯特丹 De Wallen 街區', caption: '街區參考相'
    },
    cube: {
      image: 'media/cube.jpg', source: 'https://commons.wikimedia.org/wiki/File:Cube_houses_(DSC_3076).jpg', license: 'CC BY 4.0', author: 'Trougnouf (Benoit Brummer)', alt: '鹿特丹 Cube Houses 黃色立方屋', caption: '建築參考相'
    },
    potlood: {
      image: 'media/potlood.jpg', source: 'https://commons.wikimedia.org/wiki/File:Rotterdam,_het_Potlood_door_de_Markthallen_heen_foto5_2016-02-28_10.46.jpg', license: 'CC BY-SA 4.0', author: 'Michielverbeek', alt: '鹿特丹 Blaaktoren Het Potlood', caption: '建築參考相'
    },
    markthal: {
      image: 'media/markthal.jpg', source: 'https://commons.wikimedia.org/wiki/File:Market_Hall,_Rotterdam_(32418960597).jpg', license: 'CC BY-SA 4.0', author: 'Daniel from Glasgow', alt: '鹿特丹 Markthal 市場大廳', caption: '市場參考相'
    },
    oysters: {
      image: 'media/oysters.jpg', source: 'https://commons.wikimedia.org/wiki/File:Oyster_pits_in_Yerseke_Netherlands_02.jpg', license: 'CC BY-SA 4.0', author: 'Takeaway', alt: 'Yerseke 生蠔養殖場', caption: '食物／活動參考相（唔代表當日餐牌）', kind: 'food', menuUrl: 'https://www.oesterij.nl/oesterfestival/info'
    },
    noordeinde: {
      image: 'media/noordeinde.jpg', source: 'https://commons.wikimedia.org/wiki/File:Den_Haag_-_Noordeinde_-_View_along_Fence_of_Palace_Noordeinde_towards_William_the_Silent_Statue_1845_by_%C3%89milien_de_Nieuwerkerke.jpg', license: 'CC BY-SA 4.0', author: 'Txllxt TxllxT', alt: '海牙 Noordeinde Palace 外圍', caption: '外觀參考相'
    },
    skyview: {
      image: 'media/skyview.jpg', source: 'https://commons.wikimedia.org/wiki/File:Scheveningen_Pier_SkyView_Ferris_Wheel_Netherlands_2026.jpg', license: 'CC BY-SA 4.0', author: 'Tolga Bakı', alt: 'Scheveningen Pier SkyView 摩天輪', caption: '海濱景點參考相'
    },
    maastricht: {
      image: 'media/maastricht.jpg', source: 'https://commons.wikimedia.org/wiki/File:Maastricht,_Kommel,_collage.jpg', license: 'CC BY-SA 4.0', author: 'Kleon3', alt: 'Maastricht 城市景觀', caption: '城市轉場參考相'
    },
    bogaarden: {
      image: 'media/bogaarden.jpg', source: 'https://commons.wikimedia.org/wiki/File:Bogaardenstraat_1.JPG', license: 'CC BY-SA 4.0', author: 'CumulusNL', alt: 'Maastricht Bogaardenstraat 街景', caption: '街巷外觀參考相'
    },
    outlet: {
      image: 'media/outlet.jpg', source: 'https://commons.wikimedia.org/wiki/File:McArthur_Glen_Designer_Outlet_Roermond.jpeg', license: 'CC BY-SA 4.0', author: 'Dammit', alt: 'Designer Outlet Roermond', caption: '購物場地參考相'
    },
    waterloo: {
      image: 'media/waterloo.jpg', source: 'https://commons.wikimedia.org/wiki/File:Lion%27s_Mound_-_DPLA_-_ed33db03d47e62d86d02929d3789c420.jpg', license: 'CC BY-SA 4.0', author: 'Edmund F. Arras', alt: 'Waterloo Lion’s Mound 獅子丘', caption: '戰場遺址參考相'
    },
    atomium: {
      image: 'media/atomium.jpg', source: 'https://commons.wikimedia.org/wiki/File:Atomium,_Bruselas,_B%C3%A9lgica,_2021-12-15,_DD_148-150_HDR.jpg', license: 'CC BY 4.0', author: 'Diego Delso', alt: '布魯塞爾 Atomium', caption: '地標參考相'
    },
    'grand-place': {
      image: 'media/grand-place.jpg', source: 'https://commons.wikimedia.org/wiki/File:Edificios_en_la_Grand-Place,_Bruselas,_B%C3%A9lgica,_2021-12-15,_DD_184-186_HDR.jpg', license: 'CC BY 4.0', author: 'Diego Delso', alt: '布魯塞爾 Grand-Place', caption: '廣場參考相'
    },
    eiffel: {
      image: 'media/eiffel.jpg', source: 'https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons.jpg', license: 'CC BY-SA 4.0', author: 'Benh LIEU SONG', alt: '巴黎 Eiffel Tower', caption: '巴黎地標參考相'
    },
    'cafe-paix': {
      image: 'media/cafe-paix.jpg', source: 'https://commons.wikimedia.org/wiki/File:Caf%C3%A9_de_la_Paix_1.jpg', license: 'CC BY-SA 4.0', author: 'Arthur Weidmann', alt: '巴黎 Café de la Paix 外觀', caption: '餐廳／場地參考相', kind: 'food', menuUrl: 'https://www.cafedelapaix.fr/en/cafe-and-terrace/'
    },
    orangerie: {
      image: 'media/orangerie.jpg', source: 'https://commons.wikimedia.org/wiki/File:Orangerie_Tuileries.jpg', license: 'CC BY-SA 4.0', author: 'Jebulon', alt: '巴黎 Musée de l’Orangerie', caption: '博物館參考相'
    },
    crepes: {
      image: 'media/crepes.jpg', source: 'https://commons.wikimedia.org/wiki/File:Les_cr%C3%AApes.jpg', license: 'CC BY-SA 4.0', author: 'besopha', alt: '法式可麗餅', caption: '食物參考相（唔代表當日餐牌）', kind: 'food', menuUrl: 'https://www.breizhcafe.com/montorgueil'
    },
    macarons: {
      image: 'media/macarons.jpg', source: 'https://commons.wikimedia.org/wiki/File:Various_Pierre_Herme_macarons.jpg', license: 'CC BY-SA 4.0', author: 'Tristan Ferne', alt: 'Pierre Hermé 馬卡龍', caption: '食物參考相（唔代表當日餐牌）', kind: 'food', menuUrl: 'https://www.pierreherme.com/nos-boutiques'
    },
    fragonard: {
      image: 'media/fragonard.jpg', source: 'https://commons.wikimedia.org/wiki/File:Fragonard_Perfume_Museum,_Paris_November_3,_2008.jpg', license: 'CC BY-SA 4.0', author: 'Nico Paix', alt: '巴黎 Fragonard 香水博物館', caption: '博物館參考相'
    },
    'dijon-rue': {
      image: 'media/dijon-rue.jpg', source: 'https://commons.wikimedia.org/wiki/File:Dijon_-_Rue_de_la_Libert%C3%A9_-_2.jpg', license: 'CC BY-SA 4.0', author: 'Benjamin Smith', alt: 'Dijon Rue de la Liberté 街景', caption: '城市轉場參考相'
    },
    'dijon-museum': {
      image: 'media/dijon-museum.jpg', source: 'https://commons.wikimedia.org/wiki/File:Dijon_-_Mus%C3%A9e_des_Beaux-Arts_-_La_Dame_%C3%A0_sa_toilette.jpg', license: 'CC BY-SA 4.0', author: 'Anonyme, école de Fontainebleau', alt: 'Dijon Musée des Beaux-Arts 藏品', caption: '博物館藏品參考相'
    },
    gevrey: {
      image: 'media/gevrey.jpg', source: 'https://commons.wikimedia.org/wiki/File:Vineyards_Gevrey-Chambertin.jpg', license: 'CC BY-SA 4.0', author: 'Urban', alt: 'Gevrey-Chambertin 葡萄園', caption: '葡萄園參考相'
    },
    vosne: {
      image: 'media/vosne.jpg', source: 'https://commons.wikimedia.org/wiki/File:Vosne-Roman%C3%A9e_Domaine_de_la_Roman%C3%A9e-Conti.jpg', license: 'CC BY-SA 4.0', author: 'Pierre André Leclercq', alt: 'Vosne-Romanée 葡萄園與 Domaine de la Romanée-Conti', caption: '葡萄園參考相'
    },
    beaune: {
      image: 'media/beaune.jpg', source: 'https://commons.wikimedia.org/wiki/File:S%C5%93ur_Pierrette_Monnet.-_Apothecary_at_the_H%C3%B4tel-Dieu_Beaune.jpg', license: 'CC BY-SA 4.0', author: 'Pierre André Leclercq', alt: 'Beaune Hôtel-Dieu 內部', caption: 'Beaune 參考相'
    },
    'vieux-lyon': {
      image: 'media/vieux-lyon.jpg', source: 'https://commons.wikimedia.org/wiki/File:Vieuxlyon_saintjean_toits.jpg', license: 'CC BY 4.0', author: 'Karldupart', alt: 'Vieux Lyon Saint-Jean 屋頂', caption: '舊城區參考相'
    },
    fresque: {
      image: 'media/fresque.jpg', source: 'https://commons.wikimedia.org/wiki/File:CiteCreation_-_Fresque_des_Lyonnais_-_Lyon.jpg', license: 'CC BY-SA 4.0', author: 'Klangwolke', alt: 'Lyon Fresque des Lyonnais Célèbres 壁畫', caption: '街頭藝術參考相'
    },
    fourviere: {
      image: 'media/fourviere.jpg', source: 'https://commons.wikimedia.org/wiki/File:Lyon_-_Notre-Dame_de_Fourvi%C3%A8re_6918.jpg', license: 'CC BY-SA 4.0', author: 'Phyrexian', alt: 'Lyon Basilique Notre-Dame de Fourvière', caption: '教堂參考相'
    },
    lavaux: {
      image: 'media/lavaux.jpg', source: 'https://commons.wikimedia.org/wiki/File:Lavaux_Switzerland.jpg', license: 'CC BY-SA 4.0', author: 'Lorenz Poffet', alt: 'Lavaux 葡萄園梯田與日內瓦湖', caption: '世界遺產景觀參考相'
    },
    montreux: {
      image: 'media/montreux.jpg', source: 'https://commons.wikimedia.org/wiki/File:Montreux_spindrift.jpg', license: 'CC BY-SA 4.0', author: 'He Wenting', alt: 'Montreux 湖畔景色', caption: '湖畔參考相'
    },
    goldenpass: {
      image: 'media/goldenpass.jpg', source: 'https://commons.wikimedia.org/wiki/File:Zweisimmen_20220802E177_384-284-194-184-291-465006.jpg', license: 'CC BY-SA 4.0', author: 'Markus Giger', alt: 'GoldenPass Express 瑞士列車', caption: '鐵路路線參考相'
    },
    interlaken: {
      image: 'media/interlaken.jpg', source: 'https://commons.wikimedia.org/wiki/File:River_Aare,_Interlaken,_Switzerland_(Ank_Kumar)_01.jpg', license: 'CC BY-SA 4.0', author: 'Ank Kumar', alt: 'Interlaken Aare 河', caption: '小鎮參考相'
    },
    lucerne: {
      image: 'media/lucerne.jpg', source: 'https://commons.wikimedia.org/wiki/File:Luzern_old_part_of_town.JPG', license: 'CC BY-SA 4.0', author: 'Simon Koopmann', alt: 'Lucerne 舊城區', caption: '舊城區參考相'
    },
    titlis: {
      image: 'media/titlis.jpg', source: 'https://commons.wikimedia.org/wiki/File:Mount_titlis,cable_car_-_panoramio.jpg', license: 'CC BY-SA 4.0', author: 'rajaraman sundaram', alt: 'Mount TITLIS 纜車', caption: '山區交通參考相'
    },
    'lucerne-dish': {
      image: 'media/lucerne-dish.jpg', source: 'https://commons.wikimedia.org/wiki/File:Luzern_asv2022-10_Zunfthaus_zu_Pfistern_Fritschipastete.jpg', license: 'CC BY 4.0', author: 'A.Savin', alt: '瑞士 Lucerne Fritschipastete 菜式', caption: '食物參考相（唔代表當日餐牌）', kind: 'food', menuUrl: 'https://www.chateau-guetsch.ch/en/restaurant-lumieres/'
    },
    'zurich-lindenhof': {
      image: 'media/zurich-lindenhof.jpg', source: 'https://commons.wikimedia.org/wiki/File:Lindenhof_Hill,_Zurich,_20250330_1227_7917.jpg', license: 'CC BY-SA 4.0', author: 'Jakub Hałun', alt: 'Zürich Lindenhof 觀景台', caption: '城市景觀參考相'
    },
    augustinergasse: {
      image: 'media/augustinergasse.jpg', source: 'https://commons.wikimedia.org/wiki/File:Augustinergasse_32_-_44_in_Z%C3%BCrich_(2013).jpg', license: 'CC BY-SA 4.0', author: 'JoachimKohler-HB', alt: 'Zürich Augustinergasse 街景', caption: '街道參考相'
    },
    bahnhofstrasse: {
      image: 'media/bahnhofstrasse.jpg', source: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_(Schweiz),_Auto_in_der_Bahnhofstrasse_--_2011_--_1425.jpg', license: 'CC BY-SA 4.0', author: 'Dietmar Rabich', alt: 'Zürich Bahnhofstrasse', caption: '購物街參考相'
    },
    'zurich-airport': {
      image: 'media/zurich-airport.jpg', source: 'https://commons.wikimedia.org/wiki/File:Self-service_check-in_terminals_at_Zurich_Airport_(2015).jpg', license: 'CC BY-SA 4.0', author: 'JoachimKohler-HB', alt: 'Zürich Airport 自助登機櫃位', caption: '離境機場參考相'
    },
    roesti: {
      image: 'media/roesti.jpg', source: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrcher_Geschnetzeltes_with_R%C3%B6sti.jpg', license: 'CC BY 4.0', author: 'Armineaghayan', alt: 'Zürcher Geschnetzeltes with Rösti', caption: '瑞士食物參考相（唔代表當日餐牌）', kind: 'food'
    }
  };

  const titleToAsset = {
    '到香港國際機場托運行李': 'hk-airport',
    'EK381 香港 → 杜拜': 'hk-airport',
    'EK147 杜拜 → 阿姆斯特丹': 'dubai-airport',
    'PDF：抵達 Amsterdam Schiphol': 'schiphol',
    'Royal Coster Diamonds': 'coster',
    'HOUSE of GASSAN': 'gassan',
    'Madame Tussauds Amsterdam': 'madame',
    'Zaanse Schans 風車村': 'zaanse',
    'Het Noorderhuis': 'noorderhuis',
    'Amsterdam Canal Cruise': 'canal',
    'De Wallen & Zeedijk': 'dewallen',
    'Cube Houses': 'cube',
    'Blaaktoren（Het Potlood）': 'potlood',
    'Markthal Rotterdam': 'markthal',
    'Oesterfestival 2026': 'oysters',
    'Noordeinde Palace 外觀': 'noordeinde',
    'SkyView de Pier': 'skyview',
    '前往 Maastricht': 'maastricht',
    'Twaalf Apostelenhofje 外觀': 'bogaarden',
    'Designer Outlet Roermond': 'outlet',
    'Domaine de la Bataille de Waterloo 1815': 'waterloo',
    'Atomium': 'atomium',
    'Grand-Place': 'grand-place',
    'Brussels → Paris': 'eiffel',
    'Eiffel Tower': 'eiffel',
    'Café de la Paix': 'cafe-paix',
    'Musée de l’Orangerie': 'orangerie',
    'Breizh Café Montorgueil': 'crepes',
    'Pierre Hermé Paris Opéra': 'macarons',
    'Musée du Parfum Fragonard': 'fragonard',
    'Paris → Dijon': 'dijon-rue',
    'Musée des Beaux-Arts de Dijon': 'dijon-museum',
    'Dijon Historic Centre': 'dijon-rue',
    'Gevrey-Chambertin': 'gevrey',
    'Vosne-Romanée': 'vosne',
    'Beaune': 'beaune',
    'Vieux Lyon': 'vieux-lyon',
    'Fresque des Lyonnais Célèbres': 'fresque',
    'Basilique Notre-Dame de Fourvière': 'fourviere',
    '法國 → Lavaux／Montreux': 'lavaux',
    'Lavaux Vineyard Terraces': 'lavaux',
    'Montreux 湖畔散步': 'montreux',
    'GoldenPass Express Montreux → Interlaken Ost': 'goldenpass',
    'Interlaken': 'interlaken',
    'Interlaken → Lucerne': 'lucerne',
    'Lucerne Old Town': 'lucerne',
    'Mount TITLIS（TITLIS Connect）': 'titlis',
    'Restaurant Lumières': 'lucerne-dish',
    'Lucerne → Zürich': 'zurich-lindenhof',
    'Lindenhof': 'zurich-lindenhof',
    'Augustinergasse': 'augustinergasse',
    'Bahnhofstrasse': 'bahnhofstrasse',
    'PDF 行程表：抵達 Zürich Airport': 'zurich-airport',
    'PDF 行程表：從 Zürich 起飛': 'zurich-airport',
    'PDF 航班表：EK86 Zürich → Dubai': 'zurich-airport',
    'PDF：EK86 抵達 Dubai': 'dubai-airport',
    'EK380 Dubai → Hong Kong': 'dubai-airport',
    'PDF Day 15：抵達香港': 'hk-airport',
    'PDF 航班表：抵達香港': 'hk-airport'
  };

  const media = {};
  Object.entries(titleToAsset).forEach(([title, key]) => {
    if (assets[key]) media[title] = { ...assets[key] };
  });

  window.EUROPE_MEDIA = media;
  window.EUROPE_MEDIA_ASSETS = assets;
}());

var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1 = format_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1.readFeatures(json_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1.addFeatures(features_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1);
var lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1, 
                style: style_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1,
                popuplayertitle: "Data_Devoir_Carte_Thematique — Province_Marrakech_Safi",
                interactive: true,
    title: 'Data_Devoir_Carte_Thematique — Province_Marrakech_Safi<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_0.png" /> Province de Youssofia 246098<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_1.png" /> Province de Rehamna 345772<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_2.png" /> Province de Chichaoua 378932<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_3.png" /> Province d\'Essaouira 425449<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_4.png" /> Province de EL Kalaa des Sraghna 560075<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_5.png" /> Province d\'Al Haouz 642171<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_6.png" /> Province de Safi 719299<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1_7.png" /> Province de Marrakech 1560704<br />'
        });
var format_Pointsdepuisunetable_2 = new ol.format.GeoJSON();
var features_Pointsdepuisunetable_2 = format_Pointsdepuisunetable_2.readFeatures(json_Pointsdepuisunetable_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdepuisunetable_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdepuisunetable_2.addFeatures(features_Pointsdepuisunetable_2);
var lyr_Pointsdepuisunetable_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsdepuisunetable_2, 
                style: style_Pointsdepuisunetable_2,
                popuplayertitle: "Points depuis une table",
                interactive: true,
                title: '<img src="styles/legend/Pointsdepuisunetable_2.png" /> Points depuis une table'
            });
var format_Data_Devoir_Carte_Thematiquecheflieu_3 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_Thematiquecheflieu_3 = format_Data_Devoir_Carte_Thematiquecheflieu_3.readFeatures(json_Data_Devoir_Carte_Thematiquecheflieu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_Thematiquecheflieu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_Thematiquecheflieu_3.addFeatures(features_Data_Devoir_Carte_Thematiquecheflieu_3);
var lyr_Data_Devoir_Carte_Thematiquecheflieu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_Thematiquecheflieu_3, 
                style: style_Data_Devoir_Carte_Thematiquecheflieu_3,
                popuplayertitle: "Data_Devoir_Carte_Thematique — cheflieu",
                interactive: true,
                title: 'Data_Devoir_Carte_Thematique — cheflieu'
            });
var format_Lignes_4 = new ol.format.GeoJSON();
var features_Lignes_4 = format_Lignes_4.readFeatures(json_Lignes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_4.addFeatures(features_Lignes_4);
var lyr_Lignes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_4, 
                style: style_Lignes_4,
                popuplayertitle: "Lignes",
                interactive: true,
                title: '<img src="styles/legend/Lignes_4.png" /> Lignes'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1.setVisible(true);lyr_Pointsdepuisunetable_2.setVisible(true);lyr_Data_Devoir_Carte_Thematiquecheflieu_3.setVisible(true);lyr_Lignes_4.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1,lyr_Pointsdepuisunetable_2,lyr_Data_Devoir_Carte_Thematiquecheflieu_3,lyr_Lignes_4];
lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — cheflieu_Code_Provi': 'Data_Devoir_Carte_Thematique — cheflieu_Code_Provi', 'Data_Devoir_Carte_Thematique — cheflieu_Nom_Provin': 'Data_Devoir_Carte_Thematique — cheflieu_Nom_Provin', 'Data_Devoir_Carte_Thematique — cheflieu_Area': 'Data_Devoir_Carte_Thematique — cheflieu_Area', 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024': 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024', 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu': 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu', 'Data_Devoir_Carte_Thematique — cheflieu_lat': 'Data_Devoir_Carte_Thematique — cheflieu_lat', 'Data_Devoir_Carte_Thematique — cheflieu_long': 'Data_Devoir_Carte_Thematique — cheflieu_long', });
lyr_Pointsdepuisunetable_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Data_Devoir_Carte_Thematiquecheflieu_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Lignes_4.set('fieldAliases', {'fid': 'fid', });
lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — cheflieu_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Area': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_long': 'Hidden', });
lyr_Pointsdepuisunetable_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Data_Devoir_Carte_Thematiquecheflieu_3.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Lignes_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_1.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', });
lyr_Pointsdepuisunetable_2.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_Data_Devoir_Carte_Thematiquecheflieu_3.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_Lignes_4.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_Lignes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
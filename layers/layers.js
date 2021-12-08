ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3826").setExtent([-36300.258094, 2699351.319040, -2539.785896, 2718646.124993]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_4_1 = new ol.format.GeoJSON();
var features_4_1 = format_4_1.readFeatures(json_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_1.addFeatures(features_4_1);
var lyr_4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_1, 
                style: style_4_1,
                interactive: false,
                title: '<img src="styles/legend/4_1.png" /> 集水區4'
            });
var format_43_2 = new ol.format.GeoJSON();
var features_43_2 = format_43_2.readFeatures(json_43_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_43_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43_2.addFeatures(features_43_2);
var lyr_43_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43_2, 
                style: style_43_2,
                interactive: true,
                title: '<img src="styles/legend/43_2.png" /> 聚落43'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_4_1.setVisible(true);lyr_43_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_4_1,lyr_43_2];
lyr_4_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_43_2.set('fieldAliases', {'分區簡': '分區簡', });
lyr_4_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', });
lyr_43_2.set('fieldImages', {'分區簡': 'TextEdit', });
lyr_4_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', });
lyr_43_2.set('fieldLabels', {'分區簡': 'header label', });
lyr_43_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
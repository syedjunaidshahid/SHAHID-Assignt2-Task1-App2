require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {

    // Create a map with a basemap
    var map = new Map({
        basemap: "streets"
    });

    // Create the MapView
    var view = new MapView({
        map: map,
        container: "viewDiv",
        zoom: 9,
        center: [-111.9754, 33.2918] // Adjust the center coordinates as needed
    });

  
     var featureLayer_2 = new FeatureLayer({
        url: "https://services.arcgis.com/ykpntM6e3tHvzKRJ/arcgis/rest/services/Maricopa_County_Cities_and_Towns/FeatureServer/0"
    });  
  

// Add the feature layers to the map
map.add(featureLayer_2);

       var featureLayer_1 = new FeatureLayer({
        url: "https://services.arcgis.com/ykpntM6e3tHvzKRJ/arcgis/rest/services/Maricopa_County_Fire_Districts/FeatureServer/0"
    });


    // Add the feature layers to the map

map.add(featureLayer_1);

});

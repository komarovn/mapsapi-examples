ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.753994, 37.622093],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Search metro stations.
    ymaps.geocode(myMap.getCenter(), {
        /**
         * Request options
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
          */
        // Only looking for a metro station.
        kind: 'metro',
        // Requesting no more than 20 results.
        results: 20
    }).then(function (res) {
            // Setting the image for placemark icons.
            res.geoObjects.options.set('preset', 'islands#redCircleIcon');
            // Adding a collection of found geo objects to the map.
            myMap.geoObjects.add(res.geoObjects);
            // Zooming the map to the collection's viewport.
            myMap.setBounds(res.geoObjects.getBounds());
        });
}
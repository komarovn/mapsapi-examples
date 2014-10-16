ymaps.ready(init);

var myMap,
    fullScreen = false;

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.755768, 37.617671],
        zoom: 10
    });
    $('#toggler').click(toggle);
}

function toggle () {
    fullScreen = !fullScreen;

    // Добавляем/убираем CSS-класс, определяющий размеры контейнера карты,
    // заданные в абсолютных единицах (300x200 px).
    if (fullScreen) {
        $('#map').removeClass('smallMap');
    } else {
        $('#map').addClass('smallMap');
    }

    // Если выставлен флаг, сообщаем карте, что ей следует
    // привести свои размеры к размерам контейнера.
    if ($('#checkbox').attr('checked')) {
        myMap.container.fitToViewport();
    }
}
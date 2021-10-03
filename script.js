aboutSchool = '<a target = _blank href = http://nvk-sosh10.ucoz.com/history/istorija_mobusosh_10_stanicy_sovetskoj-1.pdf>Подробнее...</a>'
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [44.783012, 41.169898],
        zoom: 18,
        controls: ['zoomControl', 'typeSelector']
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        school_1 = new ymaps.Placemark([44.784394, 41.170481], {
            hintContent: 'МОБУСОШ №10 зд.1',
            balloonContent: aboutSchool
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/school.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -18]
        }),
    
        school_3 = new ymaps.Placemark([44.783409, 41.171469], {
            hintContent: 'МОБУСОШ №10 зд.3',
            balloonContent: aboutSchool
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/school.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -18]
        }),
    
        school_2 = new ymaps.Placemark([44.782756, 41.168415], {
            hintContent: 'МОБУСОШ №10 зд.2',
            balloonContent: aboutSchool
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/school.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -50]
        }),

        park = new ymaps.Placemark([44.783475, 41.170265], {
            hintContent: 'Парк',
            balloonContent: 'Парки и площади обновили по федеральному проекту «Формирование комфортной  городской среды». Это очень обрадовало местных жителей. Открытие парка состоялось 20 декабря 2019 года. В парке станицы Советской появились игровые и спортивные площадки (приложение 4), фонтан (приложение 5) удобные скамейки, новое освещение, обустроили также сцену и большую площадь для праздников. В работу вложили около 24 млн. руб. Этот проект был в рамках национального проекта «Комфортная городская среда». Он работает на территории Краснодарского края уже третий год. “Программа поддержана президентом РФ, и мы видим, какой большой эффект она имеет” - говорил об этом заместитель губернатора края Анатолий Вороновский. Также каждый житель нашей станицы может посадить семейное дерево в этом парке. (приложение 2) '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/park.png',
            // Размеры метки.
            iconImageSize: [70, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -18]
        });
    
    myMap.geoObjects
        .add(school_1)
        .add(school_2)
        .add(school_3)
        .add(park)
});
$(function() {
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      URLhashListener: true,
      autoplayHoverPause: true,
	  center: true,
	  responsiveClass:true,
      startPosition: "functional",
      autoplay: true,
      //   onChanged: log,
      autoplayTimeout: 10000
    });
  });
  //   var map;
  $(document).ready(function initMap() {
    // Определяем переменную map

    // Функция initMap которая отрисует карту на странице
    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <section id="map"></section>
    map = new google.maps.Map(document.querySelector(".map"), {
      // При создании объекта карты необходимо указать его свойства
      // center - определяем точку на которой карта будет центрироваться
      center: { lat: 47.2340639, lng: 39.7270759 },

      // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
      zoom: 15,
      // Добавляем свои стили для отображения карты
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }, { lightness: 17 }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 18 }]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 16 }]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#dedede" }, { lightness: 21 }]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            { visibility: "on" },
            { color: "#ffffff" },
            { lightness: 16 }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }]
        },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#fefefe" }, { lightness: 20 }]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
        }
      ]
    });
    // Создаем маркер на карте

    var marker = new google.maps.Marker({
      // Определяем позицию маркера
      position: { lat: 47.2340639, lng: 39.7270759 },
      // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
      map: map,
      icon: {
        url: "img/pointer.png",
        scaledSize: new google.maps.Size(20, 30)
      }
    });
  });

  //   jQuery(document).ready(function($){
  //     $(window).scroll(function(){
  //         if ($(this).scrollTop() &lt; 200) {
  //             $('#smoothup') .fadeOut();
  //         } else {
  //             $('#smoothup') .fadeIn();
  //         }
  //     });
  $(".button").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    return false;
  });

  // Custom JS
});

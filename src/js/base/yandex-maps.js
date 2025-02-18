// Yandex maps API
export const yandexMapApi = () => {
  ymaps.ready(init);

  function init() {
    const map = new ymaps.Map('map', {
      center: [55.773872, 37.684367],
      zoom: 10,
      controls: [],
    });

    const customPlacemark = new ymaps.Placemark(
      [55.773560, 37.684075],
      {
        hintContent: 'Академия бариста',
        balloonContent: 'Академия бариста',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '/assets/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-25, -50],
      },
    );

    map.geoObjects.add(customPlacemark);
  }
};
